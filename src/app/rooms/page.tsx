"use client";

import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import HotelWidget from "@/components/hotel-widget/hotelWidget";

export default function Page() {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Проверка состояния капчи при загрузке страницы
  useEffect(() => {
    const checkCaptcha = async () => {
      try {
        const response = await fetch("/api/check-captcha", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setCaptchaVerified(data.verified);
      } catch (error) {
        console.error("Ошибка проверки состояния капчи:", error);
      }
    };

    checkCaptcha();
  }, []);

  // Обработка успешной проверки капчи
  const handleCaptcha = async (token: string | null) => {
    if (!token) {
      setCaptchaVerified(false);
      setErrorMessage("Токен капчи отсутствует.");
      return;
    }

    try {
      const response = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (data.success) {
        setCaptchaVerified(true);
        setErrorMessage("");
      } else {
        setCaptchaVerified(false);
        setErrorMessage(data.message || "Проверка reCAPTCHA не удалась.");
      }
    } catch (error) {
      console.error("Ошибка при проверке капчи:", error);
      setErrorMessage("Произошла ошибка при проверке.");
      setCaptchaVerified(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {!captchaVerified && (
        <div className="flex-grow w-full flex items-center justify-center bg-gradient-to-br from-gray-600 via-gray-800 to-gray-900 text-white py-20">
          <div className="max-w-[600px] w-full min-h-[400px] h-full bg-white rounded-xl shadow-[0_0_20px_8px_rgba(255,255,255,0.3)] flex flex-col items-center justify-center p-8 mx-5 space-y-6">
            <h2 className="text-gray-900 text-center text-2xl font-bold">
              Проверка безопасности
            </h2>
            <p className="text-gray-700 text-center text-base">
              Чтобы продолжить, подтвердите, что вы не робот. Это поможет защитить наш
              сервис от автоматизированных действий.
            </p>

            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              onChange={handleCaptcha}
            />

            {errorMessage && (
              <p className="text-red-500 text-center text-sm">{errorMessage}</p>
            )}

            <p className="text-gray-500 text-center text-sm">
              Нажимая на проверку, вы соглашаетесь с нашими{" "}
              <a
                href="/terms"
                className="text-blue-500 hover:text-blue-700 underline transition"
              >
                Условиями использования
              </a>{" "}
              и{" "}
              <a
                href="/privacy"
                className="text-blue-500 hover:text-blue-700 underline transition"
              >
                Политикой конфиденциальности
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {captchaVerified && <HotelWidget />}
    </div>
  );
}
