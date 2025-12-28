import AdvantagesList from "@/components/advantagesList/advantagesList";
import Reviews from "@/components/reviews/reviews";
import UiLink from "@/components/ui/ui-link";
import { advantages } from "@/data/advantages";
import { reviewsData } from "@/data/reviews";
import { rooms } from "@/data/rooms";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";
const RoomList = dynamic(() => import("@/components/room-card/roomList"));

export const metadata: Metadata = {
  title: "Добро пожаловать в Парк Отель",
  description: "Откройте для себя уют и комфорт в наших номерах. Отличное расположение и современные удобства.",
  keywords: "гостиница, номера, отдых, комфорт, Калининград",
};

export default function Home() {
  return (
    <div>
      <section className="relative h-screen  w-full bg-hotel-hero-background bg-cover bg-center bg-no-repeat">
        {/* Полупрозрачный оверлей с z-index ниже */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        {/* Блок с текстом и кнопкой */}
        <div className="container relative m-auto w-full h-full flex flex-col items-center justify-center z-10">
          <div className="w-full flex flex-col items-center justify-center">
            <p
              className="text-center text-[18px] tracking-[2px] pt-[10px] pb-[22px] text-white text-secondary uppercase box-border px-5 sm:text-[22px]">Россия,
              г. Калининград, ул. Аллея Смелых 187</p>
            <h1
              className="text-center m-0 py-6 text-[40px] leading-[1.1] tracking-[1px] text-white font-semibold sm:text-7xl">
              Гостиница <span className="whitespace-nowrap">&quot;Парк Отель&quot;</span>
            </h1>
            <div className="flex gap-5 max-w-[500px] w-full mt-[50px]  box-border px-5">
              <UiLink href="/rooms" size="large">
                Выбрать номер
              </UiLink>
              <UiLink href="/rooms" size="large" border={true}>
                Выбрать номер
              </UiLink>
            </div>
          </div>
        </div>
      </section>
      <section className="second-block pt-32 pb-14">
        <div className="container flex m-auto justify-center max-lg:flex-col max-lg:items-center ">
          <div className="max-w-xl w-full mx-5">
            <div className="mx-5">
              <div
                className="relative flex max-lg pb-[20px] max-sm:h-[500px] max-[500px]:h-[300px] max-[320px]:h-[200px]">
                <div className="w-[60%] pr-[20px] max-sm:w-[50%]">
                  <div className="relative w-full h-[440px] max-sm:h-full">
                    <Image
                      className="rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 border-gray-300 object-cover"
                      src="/images/AUS3.webp"
                      alt="Уютный номер отеля с обеденной зоной, длинным столом, белыми стульями, подвесными светильниками и окнами с видом на сад"
                      fill={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="w-[40%] mt-[15%] max-sm:mt-0 max-sm:w-[50%]">
                  <div className="relative w-full h-[260px] max-sm:h-full">
                    <Image
                      className="rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 border-gray-300 object-cover"
                      src="/images/AUS1.webp"
                      alt="asd"
                      fill={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative mt-[20px] pb-[100%] max-sm:hidden">
                    <div className="absolute right-[50%] w-[150%] h-[215px]">
                      <Image
                        className="rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 border-gray-300 object-cover"
                        src="/images/AUS2.webp"
                        alt="asd"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-[300px] pt-[20px] sm:hidden max-[500px]:h-[200px]">
                <Image
                  className="rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 border-gray-300 object-cover"
                  src="/images/improved3.webp"
                  alt="asd"
                  fill
                />
              </div>
            </div>
          </div>
          <div className="w-full box-content xl:pl-24 lg:max-w-[550px]">
            <div className="mx-5">
              <h2 className="uppercase text-[40px] text-black leading-[1.23] font-semibold">&quot;Парк Отель&quot;</h2>
              <p className="mt-[34px] text-black text-[20px] leading-[1.55] font-light">Городской отель «Парк Отель»
                отличный выбор для тех, кто ищет уютное и комфортное проживание.
                Наш отель расположен в новом здании спального района, примерно в 5 км от центра города Калининграда,
                рядом с тихой лесной зоной. Вам ничего не помешает насладиться тишиной и отдохнуть от городской суеты.
                При этом в шаговой доступности супермаркеты, кафе, фитнес-клуб, автобусные остановки. В уютных, светлых
                двухместных номерах отеля есть всё необходимое для проживания: телевизор с плоским экраном и цифровыми
                каналами,
                холодильник, душ, фен и шкафом для одежды. А в номерах улучшенной категории в вашем распоряжение
                кондиционер.
                У каждого гостя будет доступ в интернет, вы сможете выложить фотографии, отправить файл или позвонить
                родным по видео.
                На территории гостиницы имеется бесплатная парковка. Стойка регистрации открыта круглосуточно.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container max-w-7xl m-auto">
          <div className="py-8 pl-[100px] max-w-[760px] max-sm:p-0">
            <div className="mx-5">
              <h2 className="uppercase text-[40px] text-black leading-[1.23] font-semibold">НАШИ НОМЕРА</h2>
              <p className="pt-10 text-[26px] text-black leading-[1.45] font-light">Мы предлагаем 3 категории
                номеров
              </p>
            </div>
          </div>
          <div className="max-5">
            <Suspense fallback={<div>Loading...</div>}>
              <RoomList rooms={rooms}/>
            </Suspense>
          </div>
          <p className="text-[20px] text-center text-black leading-[1.55] font-light mt-[120px] mx-5">Во всех номерах
            гостиницы к Вашим услугам спутниковое ТВ, Wi-Fi
            (бесплатно), полный санузел, холодильник, электронные замки, шкаф для одежды,
            мягкая мебель, рабочий стол. Возможно размещение третьего Гостя на дополнительном месте
            (дополнительная одноместная кровать), услуга оплачивается отдельно.</p>
        </div>
      </section>
      <section className="bg-white mt-[100px]">
        <div className="container max-w-7xl m-auto">
          <div className="py-8 pl-[100px] max-w-[760px] max-sm:p-0">
            <h2 className="uppercase text-[40px] text-black leading-[1.23] font-semibold">ПРЕИМУЩЕСТВА</h2>
          </div>
          <AdvantagesList advantages={advantages}/>
        </div>
      </section>
      <section className="bg-gray-100 py-12 mt-[100px]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Местоположение
          </h2>
          <p className="text-center text-[18px] text-gray-600 mb-8">
            Мы находимся в удобном месте, легко доступном для гостей. Ознакомьтесь с картой ниже, чтобы найти нас.
          </p>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=131144376859"
              width="100%"
              height="600"
              className="w-full h-[400px] md:h-[600px]"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 min-h-[200px] flex items-stretch">
        <div className="container mx-auto px-6 md:px-12 flex gap-12 max-lg:flex-col">
          <div className="flex flex-col justify-between w-1/3 h-auto lg:h-full top-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-xl p-6 rounded-lg max-lg:w-full">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-extrabold">Отзывы</h2>
                <iframe 
                  src="https://yandex.ru/sprav/widget/rating-badge/131144376859?type=award" 
                  width="150" 
                  height="50" 
                  frameBorder="0"
                  className="bg-white rounded-lg"
                  title="Рейтинг Яндекс"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                />
              </div>
              <p className="text-gray-300 text-lg">
                Здесь собраны отзывы наших клиентов. Нажмите на имя клиента, чтобы перейти в его профиль и проверить подлинность отзыва.
              </p>
            </div>
            <div>
              <hr className="border-t border-gray-600 my-6"/>
              <p className="text-gray-400 text-sm">*Отзывы проверяются модераторами перед публикацией.</p>
            </div>
          </div>
          <div className="w-2/3 max-h-[500px] overflow-y-auto space-y-6 pl-8 custom-scrollbar rounded-lg shadow-lg p-6 bg-gray-500  max-lg:w-full">
            <Reviews reviews={reviewsData}/>
          </div>
        </div>
      </section>
    </div>
  );
}

