import Image from "next/image";
import { geners } from "../model/homeGener";
import { releases } from "../model/homePage";
import Banner1 from "../components/home/banner1";
import Categories from "../components/home/catagory";
import Banner2 from "../components/home/banner2";
import HomeFooter from "../components/home/homeFooter";
import Header from "@/components/common/header";


export default function Home() {
  return (
    <main className=" min-h-screen  w-full ">
      <Header/>
      <Banner1 />
      <Categories />

      <div className="Gener text-darkslategray ">
        <div className="">
          <p className="text-[32px] font-body-normal-14 flex justify-center mt-4">
            Select Books by Genres
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 md:max-w-[1000px] ">
            {geners.map((gener, i) => {
              return (
                <div className="mx-auto" key={i}>
                  <Image
                    className=" rounded-xl w-[100px] h-[100px] object-contain "
                    alt=""
                    src={gener.imageUrl}
                    width={500}
                    height={500}
                  />
                  <div className=" ">
                    {gener.gener}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-[24px] font-body-normal-14 flex justify-center mt-4">
          New Realeses Books
        </p>
        <p className="text-[12px] font-body-normal-14 flex justify-center mt-4">
          1000+ books are published by different authors everyday.
        </p>
        <p className="text-[10px] font-body-normal-14 flex justify-center mt-4 text-tomato">
          View all products
        </p>

        <div className="grid m-10  grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 ">
          {releases.map((release, i) => {
            return (
              <div
                className="relative rounded-3xs  w-[10rem] h-[16.25rem]  mx-auto mb-5 "
                key={i}
              >
                <Image
                  className="rounded-8xs w-[7.69rem] h-[10.63rem] "
                  alt=""
                  src={release.bookUrl}
                  height={300}
                  width={500}
                />
                <div className=" flex flex-col items-start justify-start gap-[0.31rem]">
                  <div className="relative text-[0.75rem] leading-[128.52%] inline-block w-[8.13rem] h-[0.88rem] shrink-0">
                    {release.title}
                  </div>
                  <div className="">
                    {release.autor}, {release.year}
                  </div>
                  <div className="relative leading-[128.52%] inline-block w-[6.31rem] h-[0.69rem] shrink-0">
                    <span>{release.rating}</span>
                    <span className="text-darkgray">
                      /{release.ratingTotal}
                    </span>
                  </div>
                </div>
                <div className="absolute top-[15.13rem] right-[1.31rem] rounded bg-primary-purple-dark-10 w-[4.0rem] h-[0.56rem] flex flex-row py-[0.5rem] px-[0.88rem] box-border items-center justify-end text-black font-inria-serif">
                  <div className="relative leading-[128.52%] font-light text-ellipsis whitespace-nowrap w-[2.44rem] h-[0.81rem] shrink-0">
                    {release.catagory}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
        <Banner2/>




        <div className="flex m-10 justify-center items-center ">
          <div className=" p-8">
            <div  className="flex justify-center">
              <div className=" text-[2rem] tracking-[1.87px] font-semibold flex  justify-center items-center">
                Still not sure?
              </div>
            </div>

            <div className="flex m-6 justify-center">
              <div className="tracking-[1.29px] leading-[1.88rem] md:w-[400px]  flex justify-center items-center">
                Jump start your book reading by quickly check through the popular
                book categories. 1000+ books are published by different authors
                everyday. Buy your favourite books on TreeBooks Today.
              </div>

            </div>

            <div className="flex justify-center">
              <button className="cursor-pointer p-0 bg-[transparent]  rounded-6xs box-border w-[12.31rem] h-[3.81rem] border-[1px] border-solid border-darkslateblue-200 flex justify-center items-center">

                <div className=" text-[1rem] tracking-[0.1em] leading-[220%] uppercase font-body-normal-14 text-darkslateblue-200 text-left">
                  READ FAQ
                </div>
              </button>
            </div>
          </div>
        </div> 
        <HomeFooter/>

    </main>
  );
}
