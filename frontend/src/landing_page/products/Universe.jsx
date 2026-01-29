export default function Universe() {
  return (
    <section className="text-center min-h-screen mb-15">
      <h2 className="text-xl py-20">
        Want to know more about our technology stack? Check out the{" "}
        <span className="text-blue-700 hover:text-neutral-950 cursor-pointer">
          Zerodha.tech
        </span>{" "}
        blog.
      </h2>

      <div>
        <h1 className="text-2xl font-medium text-neutral-700 mb-7">
          The Zerodha Universe
        </h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="flex flex-col gap-15 mx-70 my-20 text-neutral-400">
          <div className="flex gap-30">
            <div className="flex flex-col items-center justify-center gap-5">
              <img
                src="/zerodhafundhouse.png"
                alt="Fund House"
                className="w-50"
              />
              <p className="text-xs font-medium">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <img
                src="/sensibull-logo.svg"
                alt="Fund House"
                className="w-60"
              />
              <p className="text-xs font-medium">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <img src="/tijori.svg" alt="Fund House" className="w-35" />
              <p className="text-xs font-medium">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </div>
          </div>
          <div className="flex gap-30">
            <div className="flex flex-col items-center justify-center gap-5">
              <img src="/streak-logo.png" alt="Fund House" className="w-35" />
              <p className="text-xs font-medium">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <img
                src="/smallcase-logo.png"
                alt="Fund House"
                className="w-50"
              />
              <p className="text-xs font-medium">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <img src="/ditto-logo.png" alt="Fund House" className="w-35" />
              <p className="text-xs font-medium">
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </div>
          </div>
          <button className="bg-[#387ed1] text-white font-medium text-xl py-2 px-8 rounded cursor-pointer hover:bg-neutral-900 w-fit mx-auto">
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  );
}
