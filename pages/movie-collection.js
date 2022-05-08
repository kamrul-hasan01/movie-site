import React, { useState } from "react";
import DashboardNav from "../components/Section/DashboardNav";
import Link from "next/link";
import Table from "../components/common/Table";

const MovieCollection = () => {
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-10/12 pt-[10px]">
        <div className="text-right">
          <Link href="/videos-add">
            <a className="bg-themeText text-white text-lg px-3 py-2 rounded mx-5">
              {" "}
              Add New video
            </a>
          </Link>
        </div>

        <div className=" px-[40px] my-10">
          <Table />
        </div>
      </div>
    </section>
  );
};

export default MovieCollection;
