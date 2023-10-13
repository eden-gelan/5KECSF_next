import React from "react";

import Link from "next/link";
export default function Nav() {
  return (
      <div>
        <section className="hidden mb-8 flex-row justify-center lg:flex">
          <div className=" bg-gainsboro-200 h-0.5"/>
          <div className="my-8 text-[1.13rem] tracking-[0.12em] capitalize text-align-center">
            <Link className="font-extrabold  text-tomato no-underline" href="/">HOME</Link>
            <span className="font-medium text-gray-300">
              <span className="text-lightgray-100 mx-5">|</span>
              <span className="text-gray-300">{`     ABOUT US     `}</span>
              <span className="text-lightgray-100 mx-5">|</span>
              <Link className="text-gray-300 no-underline" href="listing">{`     BOOKS     `}</Link>
              <span className="text-lightgray-100 mx-5">|</span>
              <span>{` NEW RELEASE     `}</span>
              <span className="text-lightgray-100 mx-5">|</span>
              <span className="text-gray-300">{`     CONTACT US     `}</span>
              <span className="text-lightgray-100 mx-5">|</span>
              <span className="text-gray-300 mx-8"> BLOG</span>
            </span>
          </div>
        </section>
      </div>
  );
}
