import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(bigShoe1);

  return (
    <div className="xl:flex relative">
      <div className=" font-montserrat xl:w-2/5 pl-16 max-sm:px-8 py-28">
        <p className="text-coral-red text-xl ">Our summer Collections</p>
        <h1 className="font-palanquin text-[74px] xl:text-[88px] font-bold mt-8 leading-tight sm:text[66px]">
          <span className="xl:whitespace-nowrap  xl:bg-white xl:pr-3 xl:absolute">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red"> Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-lg text-slate-gray mt-8 leading-relaxed">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <div className="mt-16 ">
          <button className="font-montserrat flex gap-4 items-center text-lg bg-coral-red text-white px-8 py-4 rounded-full">
            Shop now
            <img
              src="/src/assets/icons/arrow-right.svg"
              width={24}
              className="rounded-full"
            />
          </button>
        </div>

        <div className="mt-24 flex flex-wrap gap-8">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="font-palanquin text-[48px] font-bold">
                {item.value}
              </p>
              <p className="text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-hero flex-1 flex  justify-center items-center max-xl:py-28 ">
        <img src={currentImg} />
        <div className="flex absolute -bottom-12 gap-4  ">
          {shoes.map((shoe, index) => (
            <div
              key={index}
              className={`flex-1 bg-card p-4 rounded-xl bg-cover cursor-pointer border-2 ${
                shoe.bigShoe === currentImg ? "border-coral-red" : "transparent"
              }`}
              onClick={() => setCurrentImg(shoe.bigShoe)}
            >
              <img src={shoe.thumbnail} width={124} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
