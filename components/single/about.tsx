import React from "react";
import person from "../../public/assets/image/home/aboutSingle.png"
import other1 from "../../public/assets/image/home/RichDad.png"
import other2 from "../../public/assets/image/home/React.png"
import Image from "next/image";

export default function About() {
  return (
      <div className="rounded-3xs bg-white px-9 py-10  mx-3 text-xl">
        <div className="flex">
          <div className="mr-10">
            <h2 className="m-0 text-inherit leading-[128.52%] font-semibold">
              <span className="  text-coral">About</span>
              <span className="text-dimgray-200"> Author</span>
            </h2>
            <h2 className="m-0 text-inherit leading-[128.52%] font-normal ">
              Steve Krug
            </h2>
          </div>
          <div>
           
            <Image
                className="w-[88px] h-[101px] object-cover"
                alt="Picture of the author"
                src={person}
 
            />
          </div>
        </div>
        <div className="">

          <div className="text-smi leading-[128.52%] inline-block ">
            Steve Krug is a usability consultant who has more than 30 years of
            experience as a user advocate for companies like Apple, Netscape,
            AOL, Lexus, and others. Based in part on the success of his first
            book, Don&apos;t Make Me Think, he has become a highly sought-after
            speaker on usability design.
          </div>
          <h3 className="mt-3 text-mini font-bold ">
            Other Books
          </h3>
          <Image
              className="rounded-8xs w-[75px]  h-[99px] mr-8"
              alt=""
              src={other1}
          />
          <Image
              className="rounded-8xs w-[75px]  h-[99px]"
              alt=""
              src={other2}
          />
        </div>

      </div>
  );
}
