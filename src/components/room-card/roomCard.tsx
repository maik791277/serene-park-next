'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { iconPathsCardRooms } from "@/data/rooms";
import Image from "next/image";
import UiLink from "@/components/ui/ui-link";

interface RoomCardProps {
  title: string;
  features: string[];
  price: string;
  images: string[];
}

const RoomCard: React.FC<RoomCardProps> = ({ title, features, price, images }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden mx-[20px]">
      {/* Левая часть - информация о номере */}
      <div className="room-card p-6 flex-1 border border-myCustomColor rounded-[15px] rounded-br-[0px] lg:rounded-tr-[0px] lg:border-r-0 max-lg:rounded-bl-[0px] max-lg:border-b-0  ">
        <h3 className="text-[40px] text-black font-normal mb-4 text-center lg:text-left">
          Номер <span className="block">&quot;{title}&quot;</span>
        </h3>
        <ul className="mb-6 text-gray-600">
          {features.map((feature, index) => {
            // Получаем путь для иконки из iconPaths
            const iconPath = iconPathsCardRooms[feature];

            return (
              <li key={index} className="flex items-center mb-2">
                {/* Если иконка найдена, отображаем её */}
                {iconPath && (
                  <Image
                    src={iconPath}
                    alt={feature}
                    className="inline-block mr-2 w-[33px] h-[33]"
                    height={33}
                    width={33}
                  />
                )}
                <p className="text-[18px] text-black font-normal">{feature}</p>
              </li>
            );
          })}
        </ul>
        <p className="text-[30px] font-black leading-[47px] text-gray-800 mb-4">Цена: от {price}</p>
        <div className="flex space-x-4">
          <UiLink size="large" href={"/rooms"}>
            ЗАБРОНИРОВАТЬ
          </UiLink>
          <UiLink size="large" href={"https://my.matterhub.ru/8/wfeXd4JtBrL/?m=wfeXd4JtBrL&hl=1&sr=-.33,-.72&ss=78"} isExternal={true} border={true} color="myCustomColor">
            СМОТРЕТЬ В 3D
          </UiLink>
        </div>
      </div>

      {/* Правая часть - слайдер с фоном */}
      <div className="flex-shrink-0 w-full lg:w-1/2">
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide
                key={index}
                className="relative h-full w-full min-h-[400px] lg:min-h-[500px] bg-cover bg-center">
              <Image
                src={image}
                className="h-full w-full object-cover"
                alt="Description"
                fill={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoomCard;