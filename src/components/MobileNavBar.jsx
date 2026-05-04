import { bool } from "prop-types";

export default function MobileNavBar({ open }) {
  return (
    <nav
      className={`absolute z-10 top-full ${open ? "max-h-200" : "max-h-0"} md:hidden overflow-hidden transition-all duration-300 ease-in w-10/12 left-1/2 -translate-x-1/2`}
      id="navigation"
    >
      <div className=" p-7 rounded-xl text-white capitalize flex flex-col gap-5 bg-purple-950">
        <ul className="flex flex-col items-center gap-2 poppins-bold text-center *:w-full">
          <li>
            <a
              href="#"
              className="capitalize w-full py-3 cursor-pointer hover:text-blue-400 inline-flex justify-center"
            >
              features
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" cursor-pointer hover:text-blue-400 capitalize w-full py-3 inline-flex justify-center"
            >
              pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="capitalize w-full py-3 inline-flex justify-center cursor-pointer hover:text-blue-400"
            >
              resources
            </a>
          </li>
        </ul>
        <hr className="opacity-10" />
        <ul className="flex flex-col items-center gap-3 poppins-bold text-center *:w-full">
          <li className="">
            <a
              href="#"
              className="py-3 rounded-full w-full cursor-pointer hover:text-blue-400 inline-flex justify-center"
            >
              login
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-full inline-flex w-full py-3 bg-blue-400 hover:bg-blue-450 justify-center"
            >
              sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

MobileNavBar.propTypes = {
  open: bool.isRequired,
};
