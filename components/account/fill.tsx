export default function Fill() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        <div className="flex flex-col">
          <p>Full name</p>
          <input
            className="max-w-screen h-[10px] p-2 rounded-md border bg-textfield border-gray-50   placeholder:text-gray-100 placeholder:text-3xs"
            placeholder="Reinhard Kenson"
          />
        </div>
        <div className="flex flex-col">
          <p>College ID</p>
          <input
            className="max-w-screen  h-[10px] p-2  rounded-md border bg-textfield border-gray-50 placeholder:text-gray-100 placeholder:text-3xs"
            placeholder="Kensoncs.official@college.com"
          />
        </div>

        <div className="flex flex-col">
          <p>Regster Number</p>
          <input
            className="max-w-screen h-[10px] p-2  rounded-md  border bg-textfield border-gray-50 placeholder:text-gray-100 placeholder:text-3xs"
            placeholder="6022020"
          />
        </div>

        <div className="flex flex-col">
          <p>phone number</p>
          <input
            className="max-w-screen h-[10px] p-2  rounded-md  border bg-textfield border-gray-50 placeholder:text-gray-100 placeholder:text-3xs"
            placeholder="+91 | 9952508995"
          />
        </div>

       
      </div>
      <div className="flex flex-col">
        <p>Bio</p>
        <textarea className="border border-gray-100 bg-textfield  placeholder:text-gray-100 placeholder:text-3xs0 rounded-md p-2  h-24 resize-none mb-4" placeholder="i am a Student "></textarea>
      </div>
    </section>
  );
}
