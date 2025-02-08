"use client";


import { InputType, LabelType } from "@/interface";
import { useRef } from "react";


export const Label = ({ title }: LabelType) => {
  return (
    <label
      className="uppercase font-sp-semibold tracking-widest text-veryDarkViolet"
      htmlFor=""
    >
      {title}
    </label>
  );
};

export const Input = ({
  name,
  placeholder,
  size,
  value,
  handleOnChange,
}: InputType) => {

    const ref = useRef();
    console.log(ref.current?.value)

  return (
    <input
      type="text"
      ref={ref}
      name={name}
      value={value}
      onChange={handleOnChange}
      className={`border outline-none placeholder:text-lg placeholder:font-sp-medium placeholder:tracking-widest bg-transparent rounded-lg border-gradient ${
        size === "md" ? "w-32" : "w-full"
      } p-4 `}
      placeholder={placeholder}
    />
  );
};





