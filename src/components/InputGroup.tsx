import { InputGroupType } from "@/interface";
import { Input, Label } from "./Input";



const InputGroup = ({
    title,
    name,
    placeholder,
    size,
    value,
    handleOnChange,
  }: InputGroupType) => {
    return (
      <div className="flex flex-col gap-2">
        <Label title={title} />
        <Input
          name={name}
          value={value}
          placeholder={placeholder}
          handleOnChange={handleOnChange}
          size={size}
        />
      </div>
    );
  };
  
  export default InputGroup;