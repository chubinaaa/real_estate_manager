"use client";

import Backdrop from "../../ui/Backdrop";
import FileInput from "../../ui/inputs/FileInput";
import TypingInput from "../../ui/inputs/TypingInput";
import Buttons from "./Buttons";
import Heading from "./Heading";

type Props = {
  modalHandler: () => void;
};

export default function Modal({ modalHandler }: Props) {
  return (
    <>
      <Backdrop onClick={modalHandler} />
      <div className="z-50 fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 | flex flex-col justify-center items-center | px-[105px] py-[87px] | bg-white rounded-[10px] ">
        <Heading />
        <div className="w-[800px] | mt-[60px] mb-[94px] | flex flex-col justify-center items-center gap-7">
          <div className="w-full grid grid-cols-2 gap-x-[30px] gap-y-7">
            <TypingInput label="სახელი" messageText="მინიმუმ ორი სიმბოლო" />
            <TypingInput label="გვარი" messageText="მინიმუმ ორი სიმბოლო" />
            <TypingInput
              label="ელ-ფოსტა"
              messageText="გამოიყენეთ @redberry.ge ფოსტა"
            />
            <TypingInput
              label="ტელეფონის ნომერი"
              messageText="მხოლოდ რიცხვები"
            />
          </div>
          <FileInput label="ატვირთეთ ფოტო" />
        </div>
        <Buttons
          addAct={() => console.log("დაემატა აგენტი")}
          cancelAct={modalHandler}
        />
      </div>
    </>
  );
}
