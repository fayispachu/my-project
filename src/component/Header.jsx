import { useState } from "react";
import menuicon from "../assets/menu.png";
import { Link } from "react-router-dom";
import closeicon from "../assets/close.png";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <>
      <header className=" bg-[#fdf5e6] w-full text-[#441616]  md:py-3  px-5">
        <div className="flex flex-row items-center justify-between md:pl-5 md:pr-5 pl-3 md:pb-0 pb-4 pt-5 md:pt-0">
          <h1 className="font-extrabold text-2xl italic text-[#441616] ">
            Novel Ventures
          </h1>
          <div className="hidden md:flex flex-row gap-5">
            <a
              className="hover:bg-[#fce6c5] rounded-md font-semibold p-2 "
              href="/"
              onClick={closeSidebar}
            >
              Home
            </a>
            <a
              className=" hover:bg-[#fce6c5] rounded-md font-semibold p-2  "
              href="#rated"
            >
              <h5>Most Rated</h5>
            </a>
            <Link
              className=" hover:bg-[#fce6c5] p-2 rounded-md  font-semibold "
              to="/favorite"
            >
              <h5>Your favorites</h5>
            </Link>
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

      {sidebar && (
        <nav className="fixed top-0 right-0 w-[60%] h-full bg-white text-black z-50 p-5 font-semibold">
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
              className="hover:bg-[#fce6c5] py-2 px-3 rounded"
              href="/"
              onClick={closeSidebar}
            >
              Home
            </a>
            <a
              className="hover:bg-[#fce6c5] py-2 px-3 rounded"
              href="#rated"
              onClick={closeSidebar}
            >
              Most rated
            </a>
            <Link
              className="hover:bg-[#fce6c5] py-2 px-3 rounded"
              to="/favorite"
              onClick={closeSidebar}
            >
              Your favorite
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
