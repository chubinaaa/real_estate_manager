import FileInput from "../../ui/inputs/FileInput";
import TypingInput from "../../ui/inputs/TypingInput";

export default function Inputs() {
  return (
    <div className="w-[800px] | mt-[60px] mb-[94px] | flex flex-col justify-center items-center gap-7">
      <div className="w-full grid grid-cols-2 gap-x-[30px] gap-y-7">
        <TypingInput
          label="სახელი"
          messageText="მინიმუმ ორი სიმბოლო"
          id="name"
          name="name"
        />
        <TypingInput
          label="გვარი"
          messageText="მინიმუმ ორი სიმბოლო"
          id="surname"
          name="surname"
        />
        <TypingInput
          label="ელ-ფოსტა"
          messageText="გამოიყენეთ @redberry.ge ფოსტა"
          id="email"
          name="email"
        />
        <TypingInput
          label="ტელეფონის ნომერი"
          messageText="მხოლოდ რიცხვები"
          id="phone"
          name="phone"
        />
      </div>
      <FileInput label="ატვირთეთ ფოტო" id="avatar" name="avatar" />
    </div>
  );
}
