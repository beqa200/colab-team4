import { useState } from "react";
import Moon from "/images/icon-moon.svg";
import Plus from "/images/icon-plus.svg";
import Sun from "/images/icon-sun.svg";

export default function Header() {
  const [isNightMode, setIsNightMode] =
    useState<boolean>(false);

  const toggleTheme = (): void => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div
      className={`flex justify-between w-[390px] p-[20px] ${
        isNightMode ? "bg-black" : "bg-white"
      }`}
    >
      <h1
        className={`${
          isNightMode
            ? "text-white"
            : "text-black"
        }`}
      >
        event
      </h1>
      <div className="flex">
        <img
          src={Plus}
          alt="plus icon"
          className={`w-[24px] h-[24px] mr-[30px] cursor-pointer filter ${
            isNightMode ? "invert" : ""
          }`}
        />
        <img
          src={isNightMode ? Sun : Moon}
          alt="theme toggle icon"
          className={`w-[24px] h-[24px] cursor-pointer filter ${
            isNightMode ? "" : "invert"
          }`}
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}
