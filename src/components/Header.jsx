import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menu, setMenu] = useState(false);

  function handleShowMenu() {
    setMenu(true);
  }

  function handleHideMenu() {
    setMenu(false);
  }

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <header className="">
      {/* Small device header*/}
      <div className="md:hidden flex flex-row justify-between items-center px-4 py-6 overflow-hidden">
        <h1 className="text-2xl">Pablo Spreafico</h1>
        <button onClick={handleShowMenu}>
          <GiHamburgerMenu id="boton" size={30} />
        </button>
        <div
          className={`fixed bg-white  h-screen top-0 duration-300 z-[9999] w-[90%]  flex flex-col p-20 items-center gap-8 ${
            menu ? "right-0" : "right-[-100%]"
          }  px-4`}
        >
          <h2 className="text-center font-bold text-2xl">WORK</h2>
          <ul className="flex flex-col gap-8">
            {/* Link list here*/}
            {data.map((elem, index) => {
              return (
                <li
                  key={index}
                  className="text-[#999] text-2xl font-[Helvetica]"
                >
                  Placeholder Text #{elem}
                </li>
              );
            })}
          </ul>
          <AiOutlineClose
            size={35}
            className="absolute top-6 right-4 sm:top-12 sm:right-10"
            onClick={handleHideMenu}
          />
        </div>
        <div
          className={`fixed h-screen w-screen top-0 duration-200 ${
            menu ? "bg-gray-300/70  left-0" : "bg-gray-300/0 left-[-100%] z-10"
          }`}
        ></div>
      </div>

      {/*Bigger devices*/}
      <nav className="hidden md:block">
        <h1 className="text-2xl mb-10">Pablo Spreafico</h1>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[12px]">WORK</h2>
          <ul className="flex flex-col gap-2">
            {/* Link list here*/}
            {data.map((elem, index) => {
              return (
                <li
                  key={index}
                  className="text-[#999] w-fit text-[14px] font-[Helvetica] hover:text-black duration-200 cursor-pointer"
                >
                  Placeholder Text #{elem}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
