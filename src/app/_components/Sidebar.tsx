"use client";

import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AnimationIcon from "@mui/icons-material/Animation";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard" },
    { title: "My Deeds" },
    { title: "SearchUser" },
    { title: "Settings" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen bg-green-50 relative`}
      >
        <ArrowBackIosNewIcon
          className={`absolute right-3 top-3 cursor-pointer w-6 h-6 p-1 rounded-full hover:bg-blue-200 transition-colors
          ${!open && "rotate-180"}`}
          style={{ color: "#1e3a8a" }} // 任意の色を指定
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <AnimationIcon
            fontSize="large"
            className={`cursor-pointer duration-500 transition-transform
                ${open ? "rotate-[360deg]" : "rotate-[-360deg]"}`}
          ></AnimationIcon>
        </div>
        {/* <h1
          className={`text-black origin-left font-bold text-xl first-letter
            duration-300 ${!open && "scale-0"}`}
        >
          Good Deeds
        </h1> */}
        <ul className={`pt-6 ${!open && "scale-0"}`}>
          {Menus.map((menu, index) => (
            <li
              key={index}
              className="text-xl flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white "
            >
              {menu.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
