const SignUp = () => {
  return (
    <div className="padding-x padding-y lg:flex gap-16 lg:items-center lg:justify-between ">
      <h1 className="font-palanquin text-[44px] font-bold lg:w-1/2">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h1>
      <div className="flex justify-between p-2 border border-slate-gray rounded-full lg:w-2/5 max-lg:mt-8 max-sm:flex-col max-sm:border-none max-sm:gap-4">
        <input
          placeholder="subscribe@nike.com"
          className="outline-none ml-2 max-sm:border max-sm:border-slate-gray max-sm:px-2 max-sm:py-4 max-sm:rounded-full max-sm:ml-0"
        />
        <button className="font-montserrat flex gap-4 items-center text-lg bg-coral-red text-white px-6 py-4 rounded-full justify-center">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
