import BookList from "@/components/shelf/gridList";
import Navigate from "@/components/shelf/navigate";

export default function Shelf() {
  return (
    <div className=" max-w-screen h-full mx-2 sm:mx-20 md:mx-10 my-20">
      <div className="flex text-3xl gap-2">
        <div>Your</div>
        <div className="text-tomato">shelf</div>
      </div>
       <Navigate/>
       <BookList/>
    </div>
  );
}
