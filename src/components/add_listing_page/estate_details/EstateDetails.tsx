import FileInput from "../../ui/inputs/FileInput";
import TypingInput from "../../ui/inputs/TypingInput";
import TextareaInput from "./TextareaInput";

export default function EstateDetails() {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-5">
      <h1 className="font-medium text-[16px] mb-[2px]">ბინის დეტალები</h1>
      <div className="w-full flex justify-center items-center gap-5">
        <TypingInput label="ფასი" messageText="მხოლოდ რიცხვები" />
        <TypingInput label="ფართობი" messageText="მხოლოდ რიცხვები" />
      </div>
      <div className="w-1/2">
        <TypingInput
          label="საძინებლების რაოდენობა"
          messageText="მხოლოდ რიცხვები"
          isRequired
        />
      </div>
      <TextareaInput />
      <FileInput label="ატვირთეთ ფოტო" />
    </div>
  );
}
