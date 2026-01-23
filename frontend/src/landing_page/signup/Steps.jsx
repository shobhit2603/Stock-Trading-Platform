export default function StepsSection() {
  return (
    <section className="my-45">
      <h1 className="text-2xl text-center font-medium text-neutral-700">
        Steps to open a demat account with Zerodha
      </h1>

      <div className="flex gap-10 mx-75 items-center justify-center my-15">
        <div className="w-1/2">
          <img src="/S1.svg" alt="S1" />
        </div>
        <div className="w-1/2">
          <div className="border-b border-black/20 py-5">
            <p className="text-xl flex gap-5">
              <span className="border border-black/20 px-2 py-1 rounded-full text-base">
                01
              </span>{" "}
              Enter the requested details
            </p>
          </div>
          <div className="border-b border-black/20 py-5">
            <p className="text-xl flex gap-5">
              <span className="border border-black/20 px-2 py-1 rounded-full text-base">
                02
              </span>{" "}
              Complete e-sign & verification
            </p>
          </div>
          <div className=" py-5">
            <p className="text-xl flex gap-5">
              <span className="border border-black/20 px-2 py-1 rounded-full text-base">
                03
              </span>{" "}
              Start investing!
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-10 mx-55 items-center justify-center mt-45">
        <div className="w-1/2 flex flex-col items-center justify-center gap-6">
          <img src="/S2.svg" alt="S2" className="w-90"/>
          <h1 className="text-2xl font-medium text-neutral-700">Benefits of opening a Zerodha demat account</h1>
        </div>
        <div className="w-1/2 flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-medium text-neutral-900">
              Unbeatable pricing
            </h2>
            <p className="text-neutral-600 py-6">
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-neutral-900">
              Best investing experience
            </h2>
            <p className="text-neutral-600 py-6">
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-neutral-900">
              No spam or gimmicks
            </h2>
            <p className="text-neutral-600 py-6">
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-neutral-900">
              The Zerodha universe
            </h2>
            <p className="text-neutral-600 py-6">
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
