"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { HotelWidgetConfig } from "@/types/hotel-widget";

const HotelWidget = () => {
  const [config, setConfig] = useState<HotelWidgetConfig | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch("/api/widget-config");
        if (!res.ok) {
          throw new Error("Failed to fetch widget config");
        }
        const data = await res.json();
        setConfig(data);
      } catch (error) {
        console.error("Error fetching widget config:", error);
      }
    };

    fetchConfig();
  }, []);

  useEffect(() => {
    if (!config) return;

    const initWidget = (config: HotelWidgetConfig) => {
      let timeoutId: NodeJS.Timeout | null = null;

      const context = typeof window !== "undefined" ? window : null;
      if (!context) return;

      const tryInitWidget = () => {
        const HotelWidget = window.HotelWidget;
        const TIMEOUT_DELAY = 500;

        if (HotelWidget) {
          try {
            HotelWidget.init(config);
            try {
              HotelWidget.add({
                type: "bookingForm",
                inline: true,
                appearance: {
                  container: "WidgetHorizontalBlockId",
                },
              });
              HotelWidget.add({
                type: "roomsList",
                appearance: {
                  container: "WidgetRoomsListId",
                },
              });
              HotelWidget.add({
                type: "availabilityCalendar",
                months: 2,
                appearance: {
                  container: "WidgetHorizontalAvailabilityCalendarId",
                },
              });
              HotelWidget.add({
                type: "showCheckAvailabilityButtonForMobileDevices",
                appearance: {
                  container: "WidgetShowCheckAvailabilityButtonForMobileDevicesId",
                },
              });
            } catch (addError) {
              console.error("Ошибка добавления виджета:", addError);
            }
          } catch (initError) {
            console.error("Ошибка инициализации виджета:", initError);
          }
        } else {
          timeoutId = setTimeout(tryInitWidget, TIMEOUT_DELAY);
        }
      };

      tryInitWidget();

      return () => {
        if (timeoutId) clearTimeout(timeoutId);
      };
    };

    initWidget(config);
  }, [config]);

  return (
    <>
      <Script
        src="https://bookonline24.ru/widget.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Widget script loaded")}
      />
      <div id="WidgetHorizontalBlockId" style={{ marginBottom: "20px" }}></div>
      <div id="WidgetRoomsListId" style={{ marginBottom: "20px" }}></div>
      <div
        id="WidgetHorizontalAvailabilityCalendarId"
        style={{ marginBottom: "20px" }}
      ></div>
      <div
        id="WidgetShowCheckAvailabilityButtonForMobileDevicesId"
        style={{ marginBottom: "20px" }}
      ></div>
    </>
  );
};

export default HotelWidget;


