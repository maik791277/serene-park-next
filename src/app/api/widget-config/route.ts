import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hotelId: process.env.HOTEL_ID,
    version: process.env.API_VERSION,
    baseUrl: process.env.BASE_URL,
    hooks: {
      onError: "onError",
      onInit: "onInit",
      onBooking: "onBooking",
    },
  });
}