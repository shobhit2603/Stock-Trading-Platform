export default function Hero() {
  return (
    <section className="my-20 min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl text-neutral-700 font-medium mt-20 leading-9">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h2>
      </div>
      <hr className="border-neutral-200 mx-50 my-25" />
      <div className="flex justify-between text-neutral-600 mx-80 leading-7">
        <div>
          <p className="mb-5">
            We kick-started operations on the 15th of August, 2010
            <br /> with the goal of breaking all barriers that traders and
            <br />
            investors face in India in terms of cost, support, and
            <br /> technology. We named the company Zerodha, a<br /> combination
            of Zero and "Rodha", the Sanskrit word for
            <br /> barrier.
          </p>
          <p className="mb-5">
            Today, our disruptive pricing models and in-house
            <br /> technology have made us the biggest stock broker in
            <br /> India.
          </p>
          <p className="mb-5">
            Over 1.6+ crore clients place billions of orders every year
            <br /> through our powerful ecosystem of investment
            <br /> platforms, contributing over 15% of all Indian retail
            <br /> trading volumes.
          </p>
        </div>
        <div>
          <p className="mb-5">
            In addition, we run a number of popular open online
            <br /> educational and community initiatives to empower retail
            <br /> traders and investors.
          </p>
          <p className="mb-5">
            <span className="text-[#387ed1] cursor-pointer font-medium">
              Rainmatter
            </span>
            , our fintech fund and incubator, has invested
            <br /> in several fintech startups with the goal of growing the
            <br /> Indian capital markets.
          </p>
          <p className="mb-5">
            And yet, we are always up to something new every day.
            <br /> Catch up on the latest updates on our{" "}
            <span className="text-[#387ed1] cursor-pointer font-medium">
              blog
            </span>{" "}
            or see what
            <br /> the media is{" "}
            <span className="text-[#387ed1] cursor-pointer font-medium">
              saying about us
            </span>{" "}
            or learn more about our
            <br /> business and product{" "}
            <span className="text-[#387ed1] cursor-pointer font-medium">
              philosophies
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
