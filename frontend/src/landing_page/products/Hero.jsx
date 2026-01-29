export default function Hero() {
  return (
    <div className="my-40 flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl font-medium text-neutral-700">
        Zerodha Products
      </h1>
      <h3 className="text-xl text-neutral-600">
        Sleek, modern, and intuitive trading platforms
      </h3>
      <p className="text-neutral-500">
        Check out our{" "}
        <span className="text-blue-500 hover:text-neutral-950 cursor-pointer">
          investment products <i class="ri-arrow-right-long-line"></i>
        </span>
      </p>
    </div>
  );
}
