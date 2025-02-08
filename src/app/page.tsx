"use client";
import { Input, Label } from "@/components/Input";
import InputGroup from "@/components/InputGroup";
import { ChangeEvent, useReducer, useState } from "react";
import FormReducer, { INITIAL_STATE } from "./reducers/FormReducer";
import Image from "next/image";
import check from "../../public/images/icon-complete.svg";

export default function Home() {
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);
  const [allInputValidated, setAllInputValidated] = useState(false);

  let isInputError = false;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    if (name === "cardNumber") {
      value = value.replace(/\D/g, "").slice(0, 16);
      value = value.replace(/(\d{4})/g, "$1 ").trim();
    }

    if (name === "cardExpiryMonth" || name === "cardExpiryYear") {
      value = value.replace(/\D/g, "");
      if (value.length > 2) {
        value = value.slice(0, 2); 
      }
    }
  
    if (name === "cvc") {
      value = value.replace(/\D/g, "");
      if (value.length > 3) {
        value = value.slice(0, 3);
      }
    }

    dispatch({
      type: "CHANGE_INPUT",
      payload: { name, value },
    });
  };

  const handleFormSubmit = () => {
    if (!state.cardName.value) {
      dispatch({
        type: "UPDATE_ERROR",
        payload: {
          name: "cardName",
          errorExist: true,
          errorMsg: "CardHolder Name is required",
        },
      });
      isInputError = true;
    }

    if (!state.cardNumber.value) {
      dispatch({
        type: "UPDATE_ERROR",
        payload: {
          name: "cardNumber",
          errorExist: true,
          errorMsg: "CardNumber is required",
        },
      });
      isInputError = true;
    }

    if ((state.cardNumber.value).length < 16) {
      dispatch({
        type: "UPDATE_ERROR",
        payload: {
          name: "cardNumber",
          errorExist: true,
          errorMsg: "CardNumber must be 16 digits",
        },
      });
      isInputError = true;
    }



    if (!state.cardExpiryMonth.value) {
      dispatch({
        type: "UPDATE_ERROR",
        payload: {
          name: "cardExpiryMonth",
          errorExist: true,
          errorMsg: "CardExpiryMonth cant't be blank",
        },
      });
      isInputError = true;
    }
    if (!state.cardExpiryYear.value) {
      dispatch({
        type: "UPDATE_ERROR",
        payload: {
          name: "cardExpiryYear",
          errorExist: true,
          errorMsg: "cardExpiryYear can't be blank",
        },
      });
      isInputError = true;
    }
    if (!state.cvc.value) {
      dispatch({
        type: "UPDATE_ERROR",
        payload: { name: "cvc", errorExist: true, errorMsg: "CVC is required" },
      });
      isInputError = true;
    }

    if (!isInputError) {
      setAllInputValidated(true);
    }
  };

  const handleReset = () => {
    dispatch({
      type: "RESET_INPUT"
    })
    setAllInputValidated(false)
  }




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
                  {allInputValidated && state.cardNumber.value}
                </span>
                <span className="flex w-full justify-between items-center uppercase font-sp-medium tracking-widest">
                  <p>{allInputValidated && state.cardName.value}</p>
                  <p>
                    {allInputValidated &&
                      ` ${state.cardExpiryMonth.value} / ${state.cardExpiryYear.value} `}
                    {/* {` ${state.cardExpiryMonth.value} / ${state.cardExpiryYear.value} `} */}
                  </p>
                </span>
              </div>
            </div>

            {/* BACK CARD */}
            <div className=" back-card relative -right-20 w-full flex justify-end rounded-lg py-5 px-8 shadow-2xl">
              <div className=" flex gap-5 items-center">
                <span className="text-white mr-4">
                  {allInputValidated && state.cvc.value}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] pl-28 h-full bg-white flex flex-col gap-8 justify-center items-center ">
        {!allInputValidated ? (
          <div className="w-1/2 flex flex-col gap-8 ">
            <InputGroup
              name="cardName"
              title="Cardholder name"
              placeholder="e.g. Jane Appleseed"
              value={state.cardName.value}
              handleOnChange={handleInputChange}
            />
            {state.cardName.errorExist && (
              <p className="text-RedError text-sm">
                {" "}
                {state.cardName.errorMsg}{" "}
              </p>
            )}
            <InputGroup
              name="cardNumber"
              title="Card Number"
              placeholder="e.g. 1234 5678 9123 0000"
              value={state.cardNumber.value}
              handleOnChange={handleInputChange}
            />
            {state.cardNumber.errorExist && (
              <p className="text-RedError text-sm">
                {" "}
                {state.cardNumber.errorMsg}{" "}
              </p>
            )}
            <div className="flex justify-between gap-3">
              <div className="flex flex-col gap-2">
                <Label title="Exp. Date (MM/YY)" />
                <div className="flex gap-3">
                  <Input
                    placeholder="MM"
                    size="md"
                    value={state.cardExpiryMonth.value}
                    handleOnChange={handleInputChange}
                    name="cardExpiryMonth"
                  />
                  <Input
                    placeholder="YY"
                    size="md"
                    value={state.cardExpiryYear.value}
                    handleOnChange={handleInputChange}
                    name="cardExpiryYear"
                  />
                </div>
                {state.cardExpiryMonth.errorExist && (
                  <p className="text-RedError text-sm">
                    {" "}
                    {state.cardExpiryMonth.errorMsg}{" "}
                  </p>
                )}
                {state.cardExpiryYear.errorExist && (
                  <p className="text-RedError text-sm">
                    {" "}
                    {state.cardExpiryYear.errorMsg}{" "}
                  </p>
                )}
              </div>
              <div>
                <InputGroup
                  name="cvc"
                  title="CVC"
                  placeholder="e.g. 123"
                  value={state.cvc.value}
                  handleOnChange={handleInputChange}
                />
                {state.cvc.errorExist && (
                  <p className="text-RedError text-sm">
                    {" "}
                    {state.cvc.errorMsg}{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5 text-xl ">
            <span>
              <Image src={check} alt="check" />
            </span>
            <span className="text-veryDarkViolet text-2xl font-sp-semibold">THANK YOU!</span>
            <p className="text-darkGrayishViolet">We have added your card details</p>
          </div>
        )}

        <div className="w-1/2 mt-5">
          {!allInputValidated ? (
            <button
              onClick={handleFormSubmit}
              className="w-full hover:opacity-45 rounded-lg shadow-md px-8 py-4 text-lg font-sp-semibold tracking-widest text-center bg-veryDarkViolet text-white"
            >
              Confirm
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full hover:opacity-45 rounded-lg shadow-md px-8 py-4 text-lg font-sp-semibold tracking-widest text-center bg-veryDarkViolet text-white"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
