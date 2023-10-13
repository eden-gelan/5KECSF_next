import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiShoppingBag,
  BiUser,
  BiHeart,
} from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";

import React from "react";
import Link from "next/link";
import Nav from "./nav";


const Header = () => {
  return (
    <div>
      <div className=" flex items-center justify-between w-[full]  bg-darkslateblue-200  h-[3rem]">
        <div className="flex ml-6">
          <div className="mr-2">
            <BsFillTelephoneFill className="text-white" />
          </div>
          <div
            className="relative tracking-[0.02em] font-semibold text-lg"
            style={{ color: "white" }}
          >
            +91 8374902234
          </div>
        </div>

        <div className="gap-5 px-5 hidden sm:flex ">
          <BiLogoFacebook className="text-white" />
          <BiLogoLinkedin className="text-white" />
          <BiLogoTwitter className="text-white" />
          <BiLogoInstagramAlt className="text-white" />
        </div>
      </div>
      <section className="flex  py-10 px-8 items-center justify-between">
        <div className="  hidden sm:flex">
          <div className=" relative rounded-md [background:linear-gradient(90deg,_#2979ff,_#4c589e)] text-left text-[2.25rem] text-blue-100 font-red-hat-display px-2">
            <div className="absolute z-[-100] top-[-10px] left-[-10px] bg-silver-100 rounded-full w-[60px] h-[60px] mr-2" />
            <b className="text-[2rem] flex text-white-100 text-center items-center justify-center ">
              S
            </b>
          </div>
          <div className="leading-[2.25rem] font-medium text-left text-[2.25rem] text-blue-100  ml-2 ">
            5kECSF
          </div>
        </div>

        <input
          className="[border:none] font-semibold font-body-normal-14 py-2  text-[0.88rem] bg-whitesmoke-100 rounded-xl w-[400px] placeholder:px-2 ml-2 "
          type="text"
          placeholder="Search books"
        />
        <div className="hidden lg:flex gap-1 justify-end">
          
          <div className="flex gap-1">
            <BiShoppingBag />
            <div className="tracking-[0.12em] uppercase font-semibold">
              Cart:(0$)
            </div>
          </div>

          <div className=" bg-lightgray-100 w-[0.06rem] h-[1rem]" />
          <div className="flex gap-1">
            <BiUser />
            <Link className="right-[0rem] tracking-[0.12em] uppercase font-semibold no-underline text-black" href="dashboard/account">
           Account
            </Link>
          </div>
          <div className="bg-lightgray-100 w-[0.06rem] h-[1rem]" />
          <div className="flex gap-1">
            <BiHeart />
            <div className=" tracking-[0.12em] uppercase font-semibold">
              Wishlist
            </div>
          </div>
        </div>
      </section>
      <div className="hidden lg:flex"></div>
      <div className="h-[0.2px] w-full bg-gray-100" />
      <Nav />
    </div>
  );
};

export default Header;
