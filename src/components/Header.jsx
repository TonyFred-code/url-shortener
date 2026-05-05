import { useState } from "react";
import NavBar from "./NavBar.jsx";
import MobileNavBar from "./MobileNavBar.jsx";

export default function Header() {
  const [mobileNavBarOpen, setMobileNavBarOpen] = useState(false);

  const toggleMobileNavBarOpen = () => {
    setMobileNavBarOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between px-4 py-6 items-center relative md:px-12 lg:px-32 gap-12 md:py-10">
      <div>
        <span>
          <img src="/images/logo.svg" alt="Shortly" />
        </span>
      </div>
      <button
        type="button"
        aria-label={mobileNavBarOpen ? "Close menu" : "Open menu"}
        className={`${mobileNavBarOpen ? "open" : ""} menu`}
        onClick={toggleMobileNavBarOpen}
        aria-expanded={mobileNavBarOpen}
        aria-controls="navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <NavBar />
      <MobileNavBar open={mobileNavBarOpen} />
    </header>
  );
}
