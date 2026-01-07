export default function Teams() {
  return (
    <section>
      <div>
        <h2 className="text-center text-2xl font-medium">People</h2>
        <div className="flex gap-15 mx-75 my-20">
          <div className="-mt-5">
            <img
              src="/nithin-kamath.jpg"
              alt="Founder Image"
              className="rounded-full h-75 w-75"
            />
            <p className="my-5 text-center text-lg">Nithin Kamath</p>
            <p className="text-center text-sm text-neutral-500">Founder, CEO</p>
          </div>
          <div className="text-neutral-600 leading-7">
            <p className="mb-5">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              <br />
              hurdles he faced during his decade long stint as a trader. Today,
              <br />
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="mb-5">
              He is a member of the SEBI Secondary Market Advisory Committee
              <br />
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className="mb-5">Playing basketball is his zen.</p>
            <p>Connect on <span className="text-[#387ed1] cursor-pointer font-medium hover:text-neutral-900">Homepage</span> / <span className="text-[#387ed1] cursor-pointer font-medium hover:text-neutral-900">TradingQnA</span> / <span className="text-[#387ed1] cursor-pointer font-medium hover:text-neutral-900">Twitter</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
