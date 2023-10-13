
import Image from "next/image";
import React from "react";

export const some = (<div className="absolute top-[145px] left-[690px] w-[503px] h-[381px] text-sm">
          <div className="absolute top-[0px] left-[0px] w-[357px] flex flex-col items-start justify-start gap-[5px] text-[35px]">
            <div className="w-[357px] flex flex-col items-start justify-start gap-[38px]">
              <h1 className="m-0 relative text-inherit leading-[128.52%] font-normal font-inherit inline-block w-[429px] h-3.5 shrink-0">{`Don’t Make Me Think `}</h1>
              <div className="relative text-mini inline-block w-72 h-[30px] shrink-0">
                {`By `}
                <span className="[text-decoration:underline]">Steve Krug</span>,
                2000
              </div>
            </div>
            <h3 className="m-0 relative text-mini font-normal font-inherit text-darkgray inline-block w-[183px] h-3.5 shrink-0">
              Second Edition
            </h3>
          </div>
          <div className="absolute top-[130px] left-[0px] flex flex-row items-start justify-start gap-[19px] text-darkslategray">
            <div className="flex flex-row items-center justify-start gap-[11px] text-dimgray-200">
              <div className="w-[82px] h-3 flex flex-row items-start justify-start gap-[3px]">

                <Image
                    className="relative w-3.5 h-[13.22px] object-cover"
                    src="/star.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
                <Image
                    className="relative w-3.5 h-[13.22px] object-cover"
                    src="/star.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
                <Image
                    className="relative w-3.5 h-[13.22px] object-cover"
                    src="/star.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
                <Image
                    className="relative w-3.5 h-[13.22px] object-cover"
                    src="/star.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
                <Image
                    className="relative w-3.5 h-[13.22px] object-cover"
                    src="/star.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
                <Image
                    className="relative w-3.5 h-[13.22px] object-cover"
                    src="/star.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div className="relative font-medium inline-block w-20 h-4 shrink-0">
                5.0 Ratings
              </div>
            </div>
            <div className="relative font-medium inline-block w-[146px] h-4 shrink-0">
              25 Currently reading
            </div>
            <div className="relative font-medium inline-block w-[146px] h-4 shrink-0">
              119 Have read
            </div>
          </div>
          <div className="absolute top-[176px] left-[0px] flex flex-row items-start justify-start gap-[17px]">
            <div className="relative w-[132px] h-[101px]">
              <b className="absolute top-[0px] left-[0px] inline-block w-[132px] h-4">
                Availability
              </b>
              <div className="absolute top-[27px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
                <input
                  className="cursor-pointer flex flex-row items-center justify-start"
                  type="radio"
                />
                <input
                  className="cursor-pointer flex flex-row items-center justify-start"
                  type="radio"
                />
                <input
                  className="cursor-pointer flex flex-row items-center justify-start"
                  type="radio"
                />
              </div>
            </div>
            <div className="relative w-[132px] h-[95.5px]">
              <b className="absolute top-[0px] left-[0px] inline-block w-[132px] h-4">
                Status
              </b>
              <div className="absolute top-[32.5px] left-[0px] flex flex-col items-start justify-start gap-[13px] text-mini">
                <button className="cursor-pointer [border:none] p-0 bg-forestgreen-100 relative rounded-8xs shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[85px] h-[26px]">
                  <div className="absolute top-[5px] left-[0px] text-mini font-inter text-white-100 text-center inline-block w-[85px] h-[17px]">
                    In-Shelf
                  </div>
                </button>
                <div className="flex flex-row items-start justify-start gap-[1px]">
                  {/*<img*/}
                  {/*  className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"*/}
                  {/*  alt=""*/}
                  {/*  src="/heroiconsminimappin.png"*/}
                  {/*/>*/}
                  <Image
                      className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                      src="/heroiconsminimappin.png"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                  />
                  <div className="relative leading-[150%] inline-block w-[77px] h-6 shrink-0">
                    {" "}
                    CS A-15
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[320px] left-[0px] flex flex-row items-start justify-start gap-[38px]">
            <button className="cursor-pointer [border:none] p-0 bg-coral relative rounded-8xs w-[209px] h-[61px]">
              <div className="absolute top-[6px] left-[10px] text-xl leading-[12px] font-semibold font-inter text-white-100 text-center flex items-center justify-center w-[188px] h-12">
                BORROW
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-forestgreen-200 relative rounded-8xs w-[209px] h-[61px]">
              <b className="absolute top-[6px] left-[10px] text-xl leading-[12px] flex font-inter text-white-100 text-center items-center justify-center w-[123px] h-12">
                Return book
              </b>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-dimgray-200 absolute top-[330px] left-[962px] rounded-8xs w-[127px] h-10">
          <div className="absolute top-[10px] left-[16px] text-mini leading-[128.52%] font-inter text-white-100 text-left inline-block w-[95px] h-5">
            Add to List
          </div>
          {/*<img*/}
          {/*  className="absolute top-[19.25px] left-[104.71px] rounded-[1px] w-[11.59px] h-[6.39px] object-cover"*/}
          {/*  alt=""*/}
          {/*  src="/undefined5.png"*/}
          {/*/>*/}
              <Image
                  className="absolute top-[19.25px] left-[104.71px] rounded-[1px] w-[11.59px] h-[6.39px] object-cover"
                  src="/undefined5.png"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
              />
        </button>
          </div>
        </div>)