export interface HotelWidgetConfig {
  hotelId: string;
  version: string;
  baseUrl: string;
  hooks?: {
    onError?: (error: Error) => void;
    onInit?: () => void;
    onBooking?: (value: unknown) => void;
  };
}

export interface HotelWidgetAPI {
  init: (config: HotelWidgetConfig) => void;
  add: (options: {
    type: string;
    inline?: boolean;
    months?: number;
    appearance: {
      container: string;
    };
  }) => void;
  remove?: (containerId: string) => void;
  update?: (containerId: string, options: object) => void;
  isExists?: (containerId: string) => boolean;
}