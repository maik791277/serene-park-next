import Image from "next/image";

type Advantage = {
  id: number;
  title: string;
  text: string;
  icon: string
};

const AdvantagesList = ( {advantages}: {advantages: Advantage[] }) => {
  return (
    <div className="grid grid-cols-2 justify-items-center justify-center w-full">
      {advantages.map((advantage) => (
        <div
          key={advantage.id}
          className="flex items-center justify-flex-start max-w-[460px] w-full mt-[45px]"
        >
          <Image src={advantage.icon} alt="icon" height={70} width={70}/>
          <div className="ml-4">
            <h3 className="text-lg font-bold">{advantage.title}</h3>
            <p className="text-sm text-gray-600">{advantage.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AdvantagesList;