import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCaretDown,
  faLocationDot,
  faNoteSticky,
  faQuoteRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import Image from "next/image";
import {BiSolidShareAlt} from 'react-icons/bi';
import {IoLocationSharp} from 'react-icons/io5';

export default function BackToResult() {
  return (
    <div className="grid grid-cols-1 mx-auto sm:grid-cols-2">
      <div>
        <div className=" rounded-3xs  text-2xs text-darkslategray mx-auto">
          <div className="flex items-center justify-center">
            <Image
              className="object-contain"
              src={"/assets/image/singleBook.png"}
              alt="Picture of the author"
              width={300}
              height={300}
            />
          </div>

          <div className=" flex justify-center gap-5 text-darkslategray ">
            <div className="rounded flex flex-col gap-1">
              <FontAwesomeIcon
                className="w-3 h-3"
                icon={faQuoteRight}
                style={{ color: "#333333" }}
              />
              <b className=" ">Review</b>
            </div>

            <div className="flex flex-col gap-1">
              <FontAwesomeIcon
                className="w-3 h-3"
                icon={faNoteSticky}
                style={{ color: "#333333" }}
              />
              <b className="">Notes</b>
            </div>

            <div className="flex flex-col ">
             <BiSolidShareAlt/>

              <b className="">Share</b>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" p-4">
          <div className=" flex flex-col items-start justify-start gap-[5px] text-[28px]">
            <div className="flex flex-col items-start justify-start ">
              <h1 className="m-0 text-inherit font-normal  ">{`Don’t Make Me Think `}</h1>
            </div>
            <p className="text-sm text-dimgray-200">By Steve Krug, 2000</p>
            <p className="text-sm text-darkgray">Second Edition</p>
          </div>
          <div className="grid grid-cols-2 items-start justify-start gap-5 text-darkslategray ">
            <div className="flex flex-row items-center justify-start ">
              <div className="w-20  flex flex-row items-start justify-start">
                <FontAwesomeIcon icon={faStar} style={{ color: "#f9c639" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#f9c639" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#f9c639" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#f9c639" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#f9c639" }} />
              </div>
            </div>
            <div className="relative font-medium inline-block w-20 h-4 shrink-0">
              5.0 Ratings
            </div>
            <div className="relative font-medium inline-block w-[146px] h-4 shrink-0">
              25 Currently reading
            </div>
            <div className="relative font-medium inline-block w-[146px] h-4 shrink-0">
              119 Have read
            </div>
          </div>

          <div className="grid grid-cols-3 items-start justify-start text-dimgray-200 my-4">
            <div className=" col-span-2 ">
              <b className="inline-block">Availability</b>
              <div className="flex flex-col">
                <div className="flex">
                  <input className="cursor-pointer " type="radio" />
                  <p className="inline-block">Hard Copy</p>
                </div>

                <div className="flex">
                  <input className="cursor-pointer " type="radio" />
                  <p>E-book</p>
                </div>
                <div className="flex">
                  <input className="cursor-pointer" type="radio" />
                  <p>Audio</p>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <b className="inline-block mb-5">Status</b>
              <div className="flex flex-col items-start justify-start gap-[13px] text-mini">
                <button className="cursor-pointer [border:none]  bg-forestgreen-100 relative rounded-8xs ">
                  <div className="text-mini font-inter text-white-100 ">
                    In-Shelf
                  </div>
                </button>
                <div className="flex  ">
                  <IoLocationSharp className="text-tomato"/>
                  <div className="">CS A-15</div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-dimgray-200 rounded-8xs my-auto ">
                  <div className="text-mini  font-inter text-white-100 text-left">
                    Add to List
                  </div>
                  {/* <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff",}}/> */}
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-x-2 mx-auto justify-center ">
            <button className="cursor-pointer [border:none]  bg-coral relative rounded-8xs">
              <div className="text-sm leading-[12px] font-semibold font-inter text-white-100 py-3 px-5">
                BORROW
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-forestgreen-200 relative rounded-8xs ">
              <b className="text-sm leading-[12px] flex font-inter text-white-100 text-center items-center justify-center px-5">
                Return book
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
