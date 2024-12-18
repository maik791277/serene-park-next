"use client";

import React, { useEffect, useState } from "react";

export default function InteractiveHeader({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Проверяем, что мы на клиенте, перед тем как использовать window
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true); // Устанавливаем флаг, если находимся на клиенте
    }
  }, []);

  useEffect(() => {
    if (!isClient) return; // Не запускаем обработчик, если не на клиенте

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isClient]);

  if (!isClient) {
    return null; // Не рендерим компонент на сервере
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {children}
    </div>
  );
}


