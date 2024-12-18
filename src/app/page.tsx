import {rooms} from "@/data/rooms";
import Image from "next/image";
import AdvantagesList from "@/components/advantagesList/advantagesList";
import {advantages} from "@/data/advantages";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import UiLink from "@/components/ui/ui-link";
const RoomList = dynamic(() => import("@/components/room-card/roomList"));

export default function Home() {
  return (
    <main>
      <section className="relative h-screen  w-full bg-hotel-hero-background bg-cover bg-center bg-no-repeat">
        {/* Полупрозрачный оверлей с z-index ниже */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        {/* Блок с текстом и кнопкой */}
        <div className="container relative m-auto w-full h-full flex flex-col items-center justify-center z-10">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-center text-[18px] tracking-[2px] pt-[10px] pb-[22px] text-white text-secondary uppercase box-border px-5 sm:text-[22px]">Россия,
              г. Калининград, ул. Аллея Смелых 187</p>
            <h1 className="text-center m-0 py-6 text-[40px] leading-[1.1] tracking-[1px] text-white font-semibold sm:text-7xl">
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
                      src="/images/2024-05-07_00-54-47.png"
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
                      src="/images/A0105240-24E6-4955-8.png"
                      alt="asd"
                      fill={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative mt-[20px] pb-[100%] max-sm:hidden">
                    <div className="absolute right-[50%] w-[150%] h-[215px]">
                      <Image
                        className="rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 border-gray-300 object-cover"
                        src="/images/2024-05-07_13-32-05.png"
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
                  src="/images/2024-05-07_13-32-05.png"
                  alt="asd"
                  fill
                />
              </div>
            </div>
          </div>
          <div className=" w-full box-content xl:pl-24 lg:max-w-[550px]">
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
        <div className="container m-auto">
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
              <RoomList rooms={rooms} />
            </Suspense>
          </div>
          <p className="text-[20px] text-center text-black leading-[1.55] font-light mt-[120px] mx-5">Во всех номерах гостиницы к Вашим услугам спутниковое ТВ, Wi-Fi
            (бесплатно), полный санузел, холодильник, электронные замки, шкаф для одежды,
            мягкая мебель, рабочий стол. Возможно размещение третьего Гостя на дополнительном месте
            (дополнительная одноместная кровать), услуга оплачивается отдельно.</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="container m-auto">
          <h2>ПРЕИМУЩЕСТВА</h2>
          <AdvantagesList advantages={advantages}/>
        </div>
      </section>
    </main>
  );
}

