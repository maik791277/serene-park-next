import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { token } = await request.json();

  if (!token) {
    return NextResponse.json({ success: false, message: 'Отсутствует токен' }, { status: 400 });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // Проверяем токен через API Google reCAPTCHA
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: secretKey as string,
      response: token,
    }),
  });

  const data = await response.json();

  if (!data.success) {
    return NextResponse.json({ success: false, message: 'Проверка reCAPTCHA не удалась' }, { status: 400 });
  }

  return NextResponse.json({ success: true, message: 'Проверка reCAPTCHA успешна' });
}