import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[30%] h-full bg-custom-gradient ">
        {/* <div className=" w-1/2 rounded-md py-3 px-5 bg-[orange] ">
        <p>0000000000000000000000000000</p>
      </div> */}
      </div>
      <div className="w-[70%] h-full bg-white flex flex-col gap-8 justify-center items-center ">
        <div className="flex flex-col gap-2 w-1/2">
          <label className="uppercase font-sp-semibold tracking-widest text-veryDarkViolet" htmlFor="">
            Cardholder name
          </label>
          <input
            type="text"
            className="border placeholder:text-lg placeholder:font-sp-medium placeholder:tracking-widest bg-transparent rounded-lg w-full p-4 "
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <label className="uppercase font-sp-semibold tracking-widest text-veryDarkViolet" htmlFor="">
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
            <label className="uppercase font-sp-semibold tracking-widest text-veryDarkViolet" htmlFor="">
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
            <label className="uppercase font-sp-semibold tracking-widest text-veryDarkViolet" htmlFor="">
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
          <button className="w-full rounded-lg shadow-md px-8 py-4 text-lg font-sp-semibold tracking-widest text-center bg-veryDarkViolet text-white">Confirm</button>

        </div>
      </div>
    </div>
  );
}
