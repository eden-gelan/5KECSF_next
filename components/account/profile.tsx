import Image from "next/image";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { BiDonateBlood,BiHomeAlt2 } from "react-icons/bi";
import person from "../../public/assets/image/home/person.png";
export default function Profile() {
  return (
    <div className="my-8 flex flex-col sm:flex-row justify-center sm:justify-start mx-auto gap-9 ">
      <div className="flex flex-col mr-10">
        <p className="capitalize">your profile picture</p>
        <Image className="w-20 h-20 mx-5" src={person} alt="person" />
        <div className="">
          <p className="capitalize  text-gray-100 text-sm mx-2">
            upload new photo
          </p>
          <div className="h-[0.2px] w-[130px] bg-gray-100" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
      <div className="bg-tomato lg:h-[170px] rounded-lg  lg:w-[180px] h-[100px] w-[150px]">
        <div className="flex gap-5 items-center justify-center">
          <div className="bg-white rounded-md ">
            <HiOutlineBookOpen className="p-1 lg:text-3xl text-lg text-tomato" />
          </div>
          <p className="text-white text-lg lg:text-13xl">120</p>
        </div>
        <p className="text-white lg:text-13xl text-lg flex justify-center ">
          Readings
        </p>
      </div>

      <div className="bg-purple-300 lg:h-[170px] rounded-lg  lg:w-[180px] h-[100px] w-[150px]">
        <div className="flex gap-5 items-center justify-center">
          <div className="bg-white rounded-md ">
            <HiOutlineBookOpen className="p-1 lg:text-3xl text-lg text-tomato" />
          </div>
          <p className="text-white text-lg lg:text-13xl">120</p>
        </div>
        <p className="text-white lg:text-13xl text-lg flex justify-center ">
          Readings
        </p>
      </div>
      </div>
      
    </div>
  );
}
