import Image from "next/image";

type Advantage = {
  id: number;
  title: string;
  text: string;
  icon: string
};

const AdvantagesList = ( {advantages}: {advantages: Advantage[] }) => {
  return (
    <div className="grid grid-cols-1 grid-auto-rows-min justify-items-center justify-center w-full md:grid-cols-2 gap-6">
      {advantages.map((advantage) => (
        <div
          key={advantage.id}
          className="flex items-start justify-start w-full max-w-[500px] mt-[45px]"
        >
          <Image src={advantage.icon} alt="icon" height={70} width={70}/>
          <div className="ml-4">
            <h3 className="text-[20px] font-bold">{advantage.title}</h3>
            <p className="text-[18px] text-gray-600">{advantage.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AdvantagesList;