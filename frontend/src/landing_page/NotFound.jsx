import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="text-center flex flex-col justify-center items-center my-50">
      <h2 className="text-2xl font-medium">404 Not Found</h2>
      <p className="text-neutral-500 py-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" >
        <button className="bg-[#387ed1] text-white font-medium text-xl py-2 px-8 rounded cursor-pointer hover:bg-neutral-900">
          Go Home
        </button>
      </Link>
    </section>
  );
}
