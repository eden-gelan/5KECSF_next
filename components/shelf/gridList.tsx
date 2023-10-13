import { releases } from "../../model/homePage";
import Image from "next/image";
export default function BookList() {
  return (
    <section className="grid grid-cols-1 mx-auto md:grid-cols-2  lg:grid-cols-3 gap-5 my-10 justify-items-center">
      {releases.map((release, i) => {
        return (
          <div className="h-[250px] rounded-lg bg-white grid grid-cols-2 gap-3 p-3">
            <div>
              <Image
                className="object-contain "
                src={release.bookUrl}
                alt="Picture of the author"
                width={100}
                height={120}
              />
              <p className="text-sm">{release.title}</p>
              <p>{release.autor},{release.year}</p>
              <p className="text-gray-100">{release.rating} /{release.ratingTotal}</p>
            </div>
            <div >
                <p>Borrowed on</p>
                <p className="text-gray-100 text-3xs">{release.borrowedDate}</p>
                <p>Submission Date</p>
                <p  className="text-gray-100 text-3xs">{release.submissionDate}</p>
                <div className="flex flex-col gap-3">
                <button className="border-none bg-gray-100 text-white h-8 w-30 rounded-md">Borrowed</button>
                <button className="border-solid border-tomato bg-white text-tomato h-8 w-30 rounded-md">Return</button>
                </div>
                
            </div>
          </div>
        );
      })}
    </section>
  );
}
