import { star } from "../assets/icons";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <div className="padding-x padding-y container">
      <h1 className="font-palanquin text-[44px] font-bold text-center">
        What Our
        <span className="text-coral-red"> Customers </span>Says?
      </h1>
      <div className="flex justify-center">
        <p className="font-montserrat text-lg text-slate-gray mt-4 leading-relaxed text-center max-w-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="mt-16 flex justify-evenly max-xl:flex-col max-xl:gap-16">
        {reviews.map((rev) => (
          <div key={rev.customerName} className="flex flex-col items-center">
            <div>
              <img src={rev.imgURL} className="rounded-full" width={114} />
            </div>
            <p className="font-montserrat text-lg text-slate-gray mt-6 leading-relaxed text-center max-w-sm">
              {rev.feedback}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img src={star} width={24} />
              <span className="font-montserrat text-xl text-slate-gray">
                {rev.rating}
              </span>
            </div>
            <h2 className="text-[26px] font-bold font-palanquin mt-4">
              {rev.customerName}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
