import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faCircle as faCircleSolid,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
      style={{
        backgroundImage: `url(./Image.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <main className="flex flex-col h-2/3 w-full">
        <div className="flex flex-row">
          <div className="flex col-auto">
            <FontAwesomeIcon icon={faAngleLeft} className="w-[11px]" />
          </div>
          <div className="col flex flex-col w-10/12 m-auto text-center h-[257px] justify-between">
            <div className="text-2xl font-bold">Startup 3</div>
            <div className="text-7xl font-bold">Forget About Code</div>
            <div className="text-[22px] w-[715px] mx-auto font-medium">
              Startup Framework gives you complete freedom over your creative
              process — you don’t have to think about any technical aspects.
              There are no limits and absolutely no coding.
            </div>
          </div>
          <div className="flex col-auto">
            <FontAwesomeIcon icon={faAngleRight} className="w-[11px]" />
          </div>
        </div>
        <div className="flex justify-evenly w-auto m-auto gap-2">
          <FontAwesomeIcon icon={faCircleSolid} className="w-[11px]" />
          <FontAwesomeIcon icon={faCircle} className="w-[11px]" />
          <FontAwesomeIcon icon={faCircle} className="w-[11px]" />
          <FontAwesomeIcon icon={faCircle} className="w-[11px]" />
          <FontAwesomeIcon icon={faCircle} className="w-[11px]" />
        </div>
        <div className="flex justify-evenly w-100 m-auto">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[60px] w-[230px] box-border"
          >
            Create an Account
          </button>
        </div>
      </main>
    </div>
  );
}
