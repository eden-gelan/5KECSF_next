import React from "react";
import higher from "../../public/assets/image/home/higherEduc.png";
import manage from "../../public/assets/image/home/managBooks.png";
import eng from "../../public/assets/image/home/engineerBook.png";
import Image from "next/image";

export default function Categories() {
  return (
      <div className="  text-[1.5rem] text-darkslateblue-200 max-w-[1300px] mx-auto px-4 flex flex-col items-start  mt-2">
        <div className=" text-left flex text-[0.88rem] text-tomato ">
          <div className="bg-tomato w-[2.01rem] h-[0.12rem] mt-2 "/>
          <b className=" tracking-[0.1em]">
            Categories
          </b>
        </div>

        <div className="">
          <b className=" text-[2rem]  text-darkslateblue-200 ">
            Explore our Top Categories
          </b>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 mt-4 text-center mx-auto">
          <div className="flex flex-col gap-y-2 w-full items-center">
            <Image
                className="rounded-3xs  h-[12.0rem] object-cover w-full"
                alt=""
                src={higher}
            />

            <div className="leading-[2rem] font-semibold inline-block w-[14.98rem] h-[2.19rem]">
              Higher Education
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
        
            <Image
                className=" rounded-3xs h-[12.0rem] object-cover w-full"
                src={manage}
                alt="Picture of the author"
                
            />

            <div className=" font-semibold inline-block w-[16.32rem] h-[2.19rem]">
              Management Books
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
                className=" rounded-3xs h-[12.0rem] object-cover w-full"
                src={eng}
                alt="Picture of the author"
          
            />
            <div className=" font-semibold inline-block w-[17.42rem] h-[2.19rem]">
              Engineering Books
            </div>
          </div>
        </div>

        <div className=" w-full mt-4 flex justify-center">
          <button
              className="cursor-pointer px-10 py-2 bg-[transparent]  rounded-6xs box-border border-[1px] border-solid border-darkslateblue-200  text-[1rem] tracking-[0.1em] leading-[220%] uppercase font-body-normal-14 text-darkslateblue-200">
              View more           
          </button>
        </div>
      </div>
  );
}
