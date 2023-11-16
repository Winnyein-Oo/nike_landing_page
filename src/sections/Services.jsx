import { services } from "../constants";

const Services = () => {
  return (
    <div className="padding-x padding-y flex flex-wrap gap-4">
      {services.map((ser) => (
        <div key={ser.label} className="p-8 shadow-3xl rounded-xl flex-1 ">
          <div className="p-2 rounded-full bg-coral-red w-max">
            <img src={ser.imgURL} width={24} />
          </div>

          <h2 className="text-[26px] font-bold font-palanquin mt-6">
            {ser.label}
          </h2>
          <p className="text-lg text-slate-gray font-montserrat mt-4 min-w-[200px] leading-normal">
            {ser.subtext}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;
