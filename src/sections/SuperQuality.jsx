import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <div className="padding-x padding-y max-xl:flex-col flex gap-4">
      <div className="xl:w-1/2 flex flex-col justify-center">
        <h1 className="font-palanquin text-[44px] font-bold leading-">
          We Provide You
          <span className="text-coral-red"> Super Quality</span> Shoes
        </h1>
        <p className="font-montserrat text-lg text-slate-gray mt-4 leading-relaxed">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="font-montserrat text-lg text-slate-gray mt-6 leading-relaxed">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-14 ">
          <button className="font-montserrat flex gap-4 items-center text-lg bg-coral-red text-white px-8 py-4 rounded-full">
            View details
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} />
      </div>
    </div>
  );
};

export default SuperQuality;
