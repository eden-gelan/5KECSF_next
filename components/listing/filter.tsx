import React from "react";
import { BiMinus, BiDollar,BiPlus } from "react-icons/bi";
export default function Filter() {
  return (
    <div className="  mb-8 h-fit md:col-span-1 w-fit mx-auto">
      <div className=" ">
        <div className="flex py-4 justify-between text-lg">
          <b className="">Page</b>
          <BiMinus />
        </div>
        <div className="relative bg-gainsboro-200 w-[280px] h-[1.89px] mx-auto" />
        <div className="flex flex-row items-center justify-between">
          <div>
            <BiDollar className="" />
            <input className="w-[60px] h-[25px] " />
          </div>

          <p className="font-medium font-inter text-lg flex justify-center my-3">
            to
          </p>
          <div>
            <BiDollar />
            <input className="w-[60px] h-[25px]" />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="cursor-pointer [border:none]  bg-darkslateblue-200 ">
            <div className="capitalize  py-4 px-[120px]  font-medium font-inter text-white text-center">
              Filter
            </div>
          </button>
        </div>
      </div>
      <div className=" my-4 text-left flex justify-between">
        <b className=" ">Book type</b>
        <BiPlus className="text-lg"/>
      </div>

      <div className="bg-gainsboro-200 w-[280px] h-0.5  mx-auto" />
      <div className=" my-4 text-left flex justify-between ">
        <b className="">Availability</b>
        <BiPlus className="text-lg"/>
      </div>

      <div className="bg-gainsboro-200 w-[280px] h-0.5 mx-auto" />
      <div className="my-4 text-left flex justify-between">
        <b className="">Genre</b>
        <BiPlus className="text-lg"/>
      </div>

      <div className=" bg-gainsboro-200 w-[280px] h-0.5 mx-auto" />
      <div className="my-4 text-left flex justify-between">
        <b className="">language</b>
        <BiPlus className="text-lg"/>
      </div>
      <div className=" bg-gainsboro-200 w-[280px] h-0.5 mx-auto" />
    </div>
  );
}
