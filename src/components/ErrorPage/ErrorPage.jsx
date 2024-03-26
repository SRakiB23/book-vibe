import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center md:pt-60">
      <h1 className="text-3xl">
        404!!! <br /> The Page is not Available!!!
      </h1>
      <Link to="/">
        <button className="bg-yellow-400 p-2 rounded-lg mt-4 font-bold">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
