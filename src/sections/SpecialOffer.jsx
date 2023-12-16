import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <div className="padding-x padding-y flex flex-row-reverse gap-8 max-xl:flex-col">
      <div className="xl:w-1/2 flex flex-col justify-center">
        <h1 className="font-palanquin text-[44px] font-bold leading-">
          <span className="text-coral-red"> Special </span>Offer
        </h1>
        <p className="font-montserrat text-lg text-slate-gray mt-4 leading-relaxed">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="font-montserrat text-lg text-slate-gray mt-6 leading-relaxed">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-14 flex gap-8">
          <button className="font-montserrat flex gap-4 items-center text-lg bg-coral-red text-white px-8 py-4 rounded-full">
            Shop now
            <img src={arrowRight} width={24} className="rounded-full" />
          </button>
          <button className="font-montserrat flex gap-4 items-center text-lg text-slate-gray px-8 py-4 rounded-full border border-slate-gray">
            Learn more
          </button>
        </div>
      </div>

      <div className="xl:w-1/2 flex justify-center items-center">
        <img src={offer} />
      </div>
    </div>
  );
};

export default SpecialOffer;
