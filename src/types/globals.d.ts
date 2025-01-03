import { HotelWidgetAPI } from "@/types/hotel-widget";

declare global {
  interface Window {
    HotelWidget?: HotelWidgetAPI;
  }
}

// Это необходимо, чтобы TypeScript распознал данный файл как модуль
export {};
