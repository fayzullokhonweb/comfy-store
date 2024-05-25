import { Link, useRouteError } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../components/ErrorAnimation.json";
import { MdOutlineNavigateNext } from "react-icons/md";


function Error() {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <div className="flex flex-col  items-center justify-center gap-3 pt-7">
        <Player
          autoplay
          loop
          src={animationData}
          style={{ height: "400px", width: "500px" }}
        />

        <h2 className="text-3xl">Page Not Found</h2>
        <h3 className="text-xl">Oops... We cannot find this page</h3>
        <Link
          className=" group w-[125px]   px-5 py-2.5 flex items-center rounded-lg text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300"
          to="/"
        >
          Go home
          <MdOutlineNavigateNext className="w-5 h-5 mt-[3px] hidden group-hover:block " />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-7">
      <h2>Something went wrong</h2>
      <Link
        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300"
        to="/"
      >
        Go home
      </Link>
    </div>
  );
}

export default Error;
