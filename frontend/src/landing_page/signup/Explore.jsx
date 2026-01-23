export default function Explore() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl text-center font-medium text-neutral-700">
        Investment options with Zerodha demat account
      </h1>
      <div className="flex justify-center my-18 gap-20">
        <div className="flex flex-col gap-20">
          <div className="flex items-center gap-5 w-100">
            <img src="/E1.svg" alt="E1" className="w-25 h-25" />
            <div>
              <h2 className="text-xl font-medium text-neutral-700">Stocks</h2>
              <p className="text-neutral-500 py-3">
                Invest in all exchanged-listed securities
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 w-100">
            <img src="/E3.svg" alt="E3" className="w-25 h-25" />
            <div>
              <h2 className="text-xl font-medium text-neutral-700">IPO</h2>
              <p className="text-neutral-500 py-3">
                Apply to the latest IPOs instantly via UPI
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex items-center gap-5 w-100">
            <img src="/E2.svg" alt="E2" className="w-25 h-25" />
            <div>
              <h2 className="text-xl font-medium text-neutral-700">
                Mutual funds
              </h2>
              <p className="text-neutral-500 py-3">
                Invest in commission-free direct mutual funds
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 w-100">
            <img src="/E4.svg" alt="E4" className="w-25 h-25" />
            <div>
              <h2 className="text-xl font-medium text-neutral-700">
                Futures & options
              </h2>
              <p className="text-neutral-500 py-3">
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[#387ed1] text-xl text-white font-medium px-8 py-2 rounded w-fit hover:bg-neutral-900 cursor-pointer">
        Explore Investments
      </button>
    </section>
  );
}
