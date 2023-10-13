import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { PiBarcodeLight } from "react-icons/pi";
import Image from "next/image";
import person from "../../public/assets/image/home/person.png";

export default function Top() {
  return (
    <section className="sm:flex  sm:flex-row gap-5 justify-center lg:gap-20 sm:m-5 mx-10 grid grid-cols-1">
      <div className=" px-4   rounded-full flex items-center border  sm:gap-2 border-gray-100 bg-textfield border-solid h-8 w-fit mx-auto mt-5 sm:mt-0">
        <div className="flex gap-2 ">
          <div>All</div>
          <AiFillCaretDown  />
        </div>
        <input
          className="border-none p-1 w-20 sm:w-full "
          placeholder="search"
        />
        <AiOutlineSearch className="text-tomato sm:w-8 sm:h-8" />
        <div>|</div>
        <PiBarcodeLight className="text-tomato sm:w-8 sm:h-8" />
      </div>
      <div className=" px-4 gap-3 w-fit bg-textfield rounded-full flex items-center justify-center  border border-gray-50 border-solid h-8 mx-auto">
        <Image className="w-4 h-4" src={person} alt="kerson" />
        <p>kerson</p>
        <AiFillCaretDown />
      </div>
    </section>
  );
}
