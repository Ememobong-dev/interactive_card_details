import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[30%] relative desktop_gradient">
        <div className="absolute top-44 -right-32 w-full min-h-[500px]">
          <div className="flex flex-col gap-10">
            {/* FRONT CARD */}
            <div className=" flex flex-col gap-20 rounded-lg py-5 px-8 card-gradient shadow-lg text-white">
              <div className="flex gap-5 items-center">
                <span className="w-16  h-16  border rounded-full bg-white p-4"></span>
                <span className="w-6 h-6 rounded-full bg-transparent p-2 border"></span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="flex w-full text-2xl tracking-[0.2rem] font-sp-bold gap-5 justify-between items-center">
                  <p>0000</p>
                  <p>0000</p>
                  <p>0000</p>
                  <p>0000</p>
                </span>
                <span className="flex w-full justify-between items-center uppercase font-sp-medium tracking-widest">
                  <p> Jane Appleseed </p>
                  <p>00/00</p>
                </span>
              </div>
            </div>

            {/* BACK CARD */}
            <div className=" back-card relative -right-20 w-full flex justify-end rounded-lg py-5 px-8 shadow-2xl">
              <div className=" flex gap-5 items-center">
                <span className="text-white"> 000 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-full bg-white flex flex-col gap-8 justify-center items-center ">
        <div className="flex flex-col gap-2 w-1/2">
          <label
            className="uppercase font-sp-semibold tracking-widest text-veryDarkViolet"
            htmlFor=""
          >
            Cardholder name
          </label>
          <input
            type="text"
            className="border placeholder:text-lg placeholder:font-sp-medium placeholder:tracking-widest bg-transparent rounded-lg w-full p-4 "
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <label
            className="uppercase font-sp-semibold tracking-widest text-veryDarkViolet"
            htmlFor=""
          >
            Card Number
          </label>
          <input
            type="text"
            className="border placeholder:text-lg placeholder:font-sp-medium placeholder:tracking-widest bg-transparent rounded-lg w-full p-4 "
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div className="flex justify-between w-1/2 ">
          <div className="flex flex-col gap-2">
            <label
              className="uppercase font-sp-semibold tracking-widest text-veryDarkViolet"
              htmlFor=""
            >
              Exp. Date (MM/YY)
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                className="border placeholder:text-lg placeholder:font-sp-medium placeholder:tracking-widest bg-transparent rounded-lg w-32 p-4 "
                placeholder="MM"
              />
              <input
                type="text"
                className="border placeholder:text-lg placeholder:font-sp-medium placeholder:tracking-widest bg-transparent rounded-lg w-32 p-4 "
                placeholder="YY"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="uppercase font-sp-semibold tracking-widest text-veryDarkViolet"
              htmlFor=""
            >
              CVC
            </label>
            <input
              type="text"
              className="border placeholder:text-lg placeholder:font-sp-medium placeholder:tracking-widest bg-transparent rounded-lg w-full p-4 "
              placeholder="e.g. 123"
            />
          </div>
        </div>
        <div className="w-1/2 mt-5">
          <button className="w-full rounded-lg shadow-md px-8 py-4 text-lg font-sp-semibold tracking-widest text-center bg-veryDarkViolet text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
