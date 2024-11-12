import { useState } from "react";
import menuicon from "../assets/menu.png";
import closeicon from "../assets/close.png";

function Header() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const openSidebar = () => {
    setSidebarIsOpen(true);
  };
  const closeSidebar = () => {
    setSidebarIsOpen(false);
  };

  return (
    <>
      <header className=" bg-white w-full text-black md:py-3  px-5">
        <div className="flex flex-row items-center justify-between md:pl-5 md:pr-5 pl-3 md:pb-0 pb-4 pt-5 md:pt-0">
          <h1 className="font-extrabold text-2xl italic">Novel Ventures</h1>
          <div className="hidden md:flex flex-row gap-5">
            <a
              className="hover:bg-slate-100 rounded-md font-semibold p-2 "
              href="/"
              onClick={closeSidebar}
            >
              Home
            </a>
            <a
              className=" hover:bg-slate-100 rounded-md font-semibold p-2  "
              href="rated"
            >
              <h5>Most Rated</h5>
            </a>
            <a
              className=" hover:bg-slate-100 p-2 rounded-md  font-semibold "
              href="/favorites"
            >
              <h5>Your favorites</h5>
            </a>
          </div>
          <div className="md:hidden">
            <img
              className="menu-icon w-8 h-8"
              onClick={openSidebar}
              src={menuicon}
              alt="Menu"
            />
          </div>
        </div>
      </header>

      {sidebarIsOpen && (
        <nav className="fixed top-0 right-0 w-[60%] h-full bg-white text-black z-50 p-5">
          <div className="flex justify-end">
            <img
              className="close-icon w-7 h-7 cursor-pointer"
              onClick={closeSidebar}
              src={closeicon}
              alt="Close"
            />
          </div>
          <div className="mt-10 flex flex-col justify-end text-end gap-4">
            <a
              className="hover:bg-slate-100 py-2 px-3 rounded"
              href="/"
              onClick={closeSidebar}
            >
              Home
            </a>
            <a
              className="hover:bg-slate-100 py-2 px-3 rounded"
              href="#rated"
              onClick={closeSidebar}
            >
              Most rated
            </a>
            <a
              className="hover:bg-slate-100 py-2 px-3 rounded"
              href="/favorites"
              onClick={closeSidebar}
            >
              Your favorite
            </a>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
