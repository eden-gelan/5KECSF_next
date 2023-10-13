import Fill from "./fill";
import Profile from "./profile";

export default function Body() {
  return (
    <div className=" bg-white  md:m-10 p-5 ">
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-5 justify-center items-center sm:justify-start ">
        <div className="flex-col flex justify-center">
          <p className="text-tomato">Account Setting</p>
          <div className="w-20   h-[0.2px]  bg-tomato  " />
        </div>
        <div className="flex-col flex gap-0">
          <p className="text-black">Login & Security</p>
          <div className=" w-20  h-[0.2px] bg-gray-500 " />
        </div>
        <div className="flex-col flex gap-0">
          <p className="text-black">Notification</p>
          <div className="w-20  h-[0.2px] bg-gray-500 " />
        </div>
        <div className="flex-col flex gap-0">
          <p className="text-black">Interface</p>
          <div className="w-20  h-[0.2px] bg-gray-500 " />
        </div>
      </div>
      <Profile/>
      <Fill/>
      <div className="flex flex-col justify-center  items-center sm:flex-row sm:justify-start gap-5 mx-auto ">
        <button className="h-[40px] w-[150px] rounded-lg bg-tomato border-none text-white">Update profile</button>
        <div>Reset</div>
      </div>
    </div>
  );
}
