import React from "react";
import {books} from "../../model/listing/listingPage1";
import Link from "next/link";
import Image from "next/image";
import manag from "../../../assets/image/home/managBooks.png";

export default function GridView() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full">
        {books.map((book, i) => {
          return (
              <div key={i}>
                <div
                    className="mb-5 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.15)] h-[385.83px] "
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                >
                  <Link href="/single">
                    <div>
                  
                        <Image
                            className="  w-[201.5px] h-[291.26px] "
                            src={book.bookUrl}
                            alt="Picture of the author"
                            width={300}
                            height={500}
                         
                        />
                    </div>
                  </Link>
                </div>
                <div
                    style={{
                      display: "block",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                >
                  <div
                      className="text-lg capitalize font-semibold "
                      style={{color: "darkslateblue.200"}}
                  >
                    The lady beauty Scarlett
                  </div>
                  <div className=" text-sm tracking-[0.02em] capitalize text-gray.100 block ">
                    {book.autor}
                  </div>
                  <b className=" text-3xl  capitalize text-tomato ">
                    {book.price}
                  </b>
                </div>
              </div>
          );
        })}
      </div>
  );
}
