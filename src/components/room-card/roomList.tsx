"use client";

import RoomCard from "@/components/room-card/roomCard";

type Room = {
  id: number;
  title: string;
  features: string[];
  price: string;
  images: string[];
};

const RoomList = ({ rooms }: { rooms: Room[] }) => {
  return (
    <div className="m-auto flex flex-col gap-5">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          title={room.title}
          features={room.features}
          price={room.price}
          images={room.images}
        />
      ))}
    </div>
  );
};

export default RoomList;

