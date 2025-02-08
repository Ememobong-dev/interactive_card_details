"use client";
import { Input, Label } from "@/components/Input";
import InputGroup from "@/components/InputGroup";
import { ChangeEvent, useReducer, useState } from "react";
import FormReducer, { INITIAL_STATE } from "./reducers/FormReducer";

export default function Home() {
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const _val = e.target.value;
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: _val },
    });
  console.log(state);

  };


  const handleFormSubmit = () => {
    if(!state.cardName.value){
      dispatch({
        type: "UPDATE_ERROR",
        payload: {name: "cardName", errorExist: true, errorMsg: "CardHolder Name is required"}
      })
    }
    if(!state.cardNumber.value){
      dispatch({
        type: "UPDATE_ERROR",
        payload: {name: "cardNumber", errorExist: true, errorMsg: "CardNumber is required"}
      })
    }
    if(!state.cardExpiryMonth.value){
      dispatch({
        type: "UPDATE_ERROR",
        payload: {name: "cardExpiryMonth", errorExist: true, errorMsg: "CardExpiryMonth is required"}
      })
    }
    if(!state.cardExpiryYear.value){
      dispatch({
        type: "UPDATE_ERROR",
        payload: {name: "cardExpiryYear", errorExist: true, errorMsg: "cardExpiryYear is required"}
      })
    }
    if(!state.cvc.value){
      dispatch({
        type: "UPDATE_ERROR",
        payload: {name: "cvc", errorExist: true, errorMsg: "CVC is required"}
      })
    }
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
            name="cardName"
            title="Cardholder name"
            placeholder="e.g. Jane Appleseed"
            value={state.cardName.value}
            handleOnChange={handleInputChange}
          />
          {state.cardName.errorExist && <p className="text-RedError text-2xl"> {state.cardName.errorMsg} </p>}
          <InputGroup
            name="cardNumber"
            title="Card Number"
            placeholder="e.g. 1234 5678 9123 0000"
            value={state.cardNumber.value}
            handleOnChange={handleInputChange}
          />
          {state.cardNumber.errorExist && <p className="text-RedError text-2xl"> {state.cardNumber.errorMsg} </p>}
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
                <p> {state.cardExpiryMonth.errorMsg} </p>
              )}
              {state.cardExpiryYear.errorExist && (
                <p> {state.cardExpiryYear.errorMsg} </p>
              )}
            </div>
            <InputGroup
              name="cvc"
              title="CVC"
              placeholder="e.g. 123"
              value={state.cvc.value}
              handleOnChange={handleInputChange}
            />
            {state.cvc.errorExist && <p className="text-RedError text-2xl"> {state.cvc.errorMsg} </p>}
          </div>
        </div>

        <div className="w-1/2 mt-5">
          <button
            onClick={handleFormSubmit}
            className="w-full hover:opacity-45 rounded-lg shadow-md px-8 py-4 text-lg font-sp-semibold tracking-widest text-center bg-veryDarkViolet text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
