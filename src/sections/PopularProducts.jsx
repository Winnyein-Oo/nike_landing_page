import { star } from "../assets/icons";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <div className="padding-x padding-y">
      <h1 className="font-palanquin text-[44px] mt-8 font-bold ">
        Our
        <span className="text-coral-red"> Popular </span> Products
      </h1>
      <p className="font-montserrat text-base text-slate-gray leading-relaxed mt-8 max-w-lg">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
        {products.map((product) => (
          <div key={product.name}>
            <div>
              <img src={product.imgURL} />
            </div>
            <div className="mt-8 flex items-center gap-3">
              <img src={star} width={24} />
              <span className="font-montserrat text-xl text-slate-gray">
                (4.5)
              </span>
            </div>
            <h4 className="mt-2 font-palanquin text-[24px] font-bold">
              {product.name}
            </h4>
            <p className="mt-2 text-coral-red font-montserrat text-2xl font-semibold">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
