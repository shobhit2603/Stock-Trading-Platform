export default function Signup() {
  return (
    <section className="my-35">
      <h1 className="text-3xl text-center">
        Open a free demat and trading account online
      </h1>
      <p className="text-neutral-500 text-center text-xl py-6">
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </p>
      <div className="flex justify-center gap-10 my-12">
        <img
          src="/account_open.svg"
          alt="account_open"
          className="w-1/2 pl-55"
        />
        <div className="flex flex-col w-1/2 pr-50 gap-7">
          <h2 className="text-2xl">Signup now</h2>
          <p className="text-neutral-400">Or track your existing application</p>

          {/* Mobile Input (like image) */}
          <div className="flex items-center border border-neutral-300 rounded overflow-hidden w-[420px]">
            {/* Left: Flag + Code */}
            <div className="flex items-center gap-3 pl-3 pr-6 py-4 border-r border-neutral-300 bg-white">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India"
                className="w-6 h-4 object-cover rounded-sm"
              />
              <span className="text-neutral-700 font-medium">+91</span>
            </div>

            {/* Right: Input */}
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="px-4 py-4 w-full outline-none text-neutral-700 placeholder:text-neutral-400"
            />
          </div>

          <button className="bg-[#387ed1] text-xl text-white px-23 py-3 rounded w-fit hover:bg-neutral-900 cursor-pointer">
            Get OTP
          </button>

          <p className="text-xs text-neutral-600">
            By proceeding, you agree to the Zerodha{" "}
            <span className="text-[#387ed1] font-medium cursor-pointer">
              terms
            </span>{" "}
            &{" "}
            <span className="text-[#387ed1] font-medium cursor-pointer">
              privacy policy
            </span>
          </p>

          <p className="text-xs text-neutral-600">
            Looking to open NRI account?{" "}
            <span className="text-[#387ed1] font-medium cursor-pointer">
              Click here
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
