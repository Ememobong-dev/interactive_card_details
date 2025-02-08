import { ChangeEvent } from "react";

export interface LabelType {
  title: string;
}

export interface InputType {
  name?: string;
  placeholder: string;
  size?: "md" | "lg";
  value?: string;
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputGroupType extends LabelType, InputType {}