import React from "react";
import Link from "next/link";
const DashboardNav = () => {
  return (
    <div className="w-2/12 h-[100vh] text-white pt-5 bg-themeBG -mt-1">
      <Link href="/">
        <a className="block my-2 py-2 pl-5 group  hover:bg-[#0A0E17]">
          <i className="pr-3 fa-solid fa-house-chimney" /> Home
        </a>
      </Link>
      <Link href="/Dashboard/Videos">
        <a className="block my-2 py-2 pl-5 group  hover:bg-[#0A0E17]">
          <i className="pr-3 fa-solid fa-video" /> Movies
        </a>
      </Link>
      <Link href="/Dashboard/Request">
        <a className="block my-2 py-2 pl-5 group  hover:bg-[#0A0E17]">
          <i className="pr-3 fa-solid fa-clipboard-question" /> Request
        </a>
      </Link>
      <Link href="/Dashboard/Slider">
        <a className="block my-2 py-2 pl-5 group  hover:bg-[#0A0E17]">
          <i className="pr-3 fa-solid fa-clipboard-question" />
          Slider
        </a>
      </Link>
      <Link href="/Dashboard/User">
        <a className="block my-2 py-2 pl-5 group  hover:bg-[#0A0E17]">
          <i className="pr-3 fa-solid fa-user" /> User
        </a>
      </Link>
    </div>
  );
};

export default DashboardNav;
