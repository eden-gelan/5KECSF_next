import React from "react";
import banner1 from "../../public/assets/image/home/homeBanner1.png";
import Image from "next/image";

export default function Banner1() {
  
  return (
    <section className=" flex justify-center items-center text-darkslateblue-200 [background:linear-gradient(78.43deg,_#fbeeee,_#f7fffe)]   flex-col ">
      <div className=" flex justify-center flex-col  sm:flex-row max-w-[1300px] px-4 mx-auto ">
        <div className="flex-1 flex gap-y-4 flex-col justify-center">
          <p className="text-darkslateblue.200 text-[50px] font-bold" >
            ipsum dolor si
          </p>
          <p style={{ fontSize: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            magna velit eleifend. Amet, quis urna, a eu.
          </p>
          <button className="cursor-pointer p-0 bg-[transparent] rounded-6xs box-border w-[12.31rem] h-[3.81rem] border-[1px] border-solid border-darkslateblue-200 flex justify-center items-center">
            <div className="text-[1rem] tracking-[0.1em] leading-[220%] uppercase font-body-normal-14 text-darkslateblue-200 text-left">
              Read more
            </div>
          </button>
        </div>

        <div className=" h-[350px] sm:h-full sm:flex-1  flex justify-center items-center">
          <Image
            className=" object-contain w-[300px] sm:w-[400px]  lg:w-full "
            src={banner1}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
}
