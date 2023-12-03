import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="my-[72px] flex h-screen flex-col items-center justify-center text-white">
      <p className="text-9xl">404</p>
      <p className="text-xl">Not Found</p>
      <p className="text-xl">
        Return to{" "}
        <Link to="/cinema-hunt/" className="text-blue-500">
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
