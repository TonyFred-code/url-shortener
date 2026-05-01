import { bool } from "prop-types";

export default function MobileNavBar({ open }) {
  return (
    <nav
      className={`absolute z-10 top-full ${open ? "max-h-200" : "max-h-0"} md:hidden overflow-hidden transition-all duration-300 ease-in w-10/12 left-1/2 -translate-x-1/2`}
      id="navigation"
    >
      <div className=" p-7 rounded-xl text-white capitalize flex flex-col gap-5 bg-purple-950">
        <ul className="flex flex-col items-center gap-3 poppins-bold *:w-full text-center *:py-3">
          <li>features</li>
          <li>pricing</li>
          <li>resources</li>
        </ul>
        <hr className="opacity-10" />
        <ul className="flex flex-col items-center gap-3 poppins-bold *:w-full text-center *:py-3">
          <li className="py-3 rounded-full">login</li>
          <li className="rounded-full bg-blue-400">sign up</li>
        </ul>
      </div>
    </nav>
  );
}

MobileNavBar.propTypes = {
  open: bool.isRequired,
};
