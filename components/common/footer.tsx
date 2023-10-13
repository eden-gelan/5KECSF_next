import React from "react";
import logo from "../../public/assets/image/home/homeFooterLogo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Footer() {
  return (
      <footer>
        <div className=" grid p-10 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-tomato   text-white  justify-center items-center ">
        <div className="flex-col">
          <Image src={logo} alt="Vercel Logo" />

          <p>
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.{" "}
          </p>
          <div className="flex m-10 gap-8 sm:m-5 ">
            <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />
            <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />
            <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />
            <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />
          </div>
        </div>
        <div className="h-[0.2px] w-full bg-white sm:hidden" />
        <div className="flex flex-col gap-y-2 text-lg" >
          <b className=" text-white mb-5" style={{ fontSize: 32 }}>
            Company
          </b>
          <b >Home</b>
          <b>About Us</b>
          <b >Books</b>
          <b >New Releas</b>
          <b >Contact Us</b>
          <b >Blog</b>
        </div>
        <div className="h-[0.2px] w-full bg-white sm:hidden" />
        <div className="mr-5 flex flex-col">
          <b className="" style={{ fontSize: 20 }}>
          Important Links
          </b>
          <div className="text-sm flex flex-col gap-2 m-5">
          <b>Privacy Policy</b>
          <b>FAQs</b>
          <b>Terms of Service</b>
          </div>

         
        </div>
        
      </div>
      <div className="flex items-center justify-between text-sm px-5 bg-tomato text-white">
        <p>© 2022 Arihant. All Rights Reserved.</p>
        <p> Privacy | Terms of Service</p>
      </div>
      </footer>
  );
}
