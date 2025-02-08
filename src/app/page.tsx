"use client";
import { Input, Label } from "@/components/Input";
import InputGroup from "@/components/InputGroup";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [cardName, setCardName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardExpiryMonth, setCardExpiryMonth] = useState("");
  const [cardExpiryYear, setCardExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");

  const handleCardNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };
  const handleCardNumChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNum(e.target.value);
  };
  const handleCardExpiryMonth = (e: ChangeEvent<HTMLInputElement>) => {
    setCardExpiryMonth(e.target.value);
  };
  const handleCardExpiryYear = (e: ChangeEvent<HTMLInputElement>) => {
    setCardExpiryYear(e.target.value);
  };
  const handleCardCvc= (e: ChangeEvent<HTMLInputElement>) => {
    setCvc(e.target.value);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-[30%] relative desktop_gradient">
        <div className="absolute top-44 -right-32 w-full">
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
                <span className="text-white mr-4"> 000 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] pl-28 h-full bg-white flex flex-col gap-8 justify-center items-center ">
        <div className="w-1/2 flex flex-col gap-8 ">
          <InputGroup
            title="Cardholder name"
            placeholder="e.g. Jane Appleseed"
            value={cardName}
            handleOnChange={handleCardNameChange}
          />
          <InputGroup
            title="Card Number"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNum}
            handleOnChange={handleCardNumChange}
          />
          <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-2">
              <Label title="Exp. Date (MM/YY)" />
              <div className="flex gap-3">
                <Input
                  placeholder="MM"
                  size="md"
                  value={cardExpiryMonth}
                  handleOnChange={handleCardExpiryMonth}
                />
                <Input
                  placeholder="YY"
                  size="md"
                  value={cardExpiryYear}
                  handleOnChange={handleCardExpiryYear}
                />
              </div>
            </div>
            <InputGroup
              title="CVC"
              placeholder="e.g. 123"
              value={cvc}
              handleOnChange={handleCardCvc}
            />
          </div>
        </div>

        <div className="w-1/2 mt-5">
          <button className="w-full hover:opacity-45 rounded-lg shadow-md px-8 py-4 text-lg font-sp-semibold tracking-widest text-center bg-veryDarkViolet text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
