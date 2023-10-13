import Footer from "../../components/common/footer";
import GridView from "../../components/listing/gridView";
import Filter from "../../components/listing/filter";
import Image from "next/image";
import React from "react";
import Header from "@/components/common/header";
import HomeFooter from "@/components/home/homeFooter";

const listingPage1 = () => {
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-1 p-8 max-w-[400px]  mx-auto sm:grid-cols-2 sm:max-w-[1400px] md:grid-cols-3">
        <Filter />
        <div className=" md:col-span-2 ">
          <div className="flex flex-col items-center justify-center mb-8 gap-y-5 lg:flex-row lg:gap-x-20">
            <b className="">Sort by : Alphabetically, A-Z</b>

            <b className="">Show : 12</b>

            <b className=" ">Showing 1 - 12 of 26 result</b>
          </div>
          <GridView />
        </div>
      </div>
      <HomeFooter/>
    </div>
  );
};

export default listingPage1;
