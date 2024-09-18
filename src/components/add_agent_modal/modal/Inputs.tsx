import { useEffect, useState } from "react";
import FileInput from "../../ui/inputs/FileInput";
import TypingInput from "../../ui/inputs/TypingInput";
import { isValidPhoneNumber } from "../../../utils/helpers";

type Props = {
  enableSubmition: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Inputs({ enableSubmition }: Props) {
  const [name, setName] = useState({
    value: "",
    validity: false,
  });
  const [surname, setSurname] = useState({
    value: "",
    validity: false,
  });
  const [email, setEmail] = useState({
    value: "",
    validity: false,
  });
  const [phone, setPhone] = useState({
    value: "",
    validity: false,
  });
  const [avatar, setAvatar] = useState("");

  // Validation
  useEffect(() => {
    const validate = (condition: boolean) => condition;

    const isNameValid = validate(name.value.trim().length > 2);
    const isSurnameValid = validate(surname.value.trim().length > 2);
    const isEmailValid = validate(email.value.trim().endsWith("@redberry.ge"));
    const isPhoneValid = validate(isValidPhoneNumber(phone.value.trim()));
    const isAvatarUploaded = validate(avatar.trim().length > 0);

    setName((prev) => ({ ...prev, validity: isNameValid }));
    setSurname((prev) => ({ ...prev, validity: isSurnameValid }));
    setEmail((prev) => ({ ...prev, validity: isEmailValid }));
    setPhone((prev) => ({ ...prev, validity: isPhoneValid }));

    const isFormValid =
      isNameValid &&
      isSurnameValid &&
      isEmailValid &&
      isPhoneValid &&
      isAvatarUploaded;
    enableSubmition(isFormValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name.value, surname.value, email.value, phone.value, avatar]);

  return (
    <div className="w-[800px] | mt-[60px] mb-[94px] | flex flex-col justify-center items-center gap-7">
      <div className="w-full grid grid-cols-2 gap-x-[30px] gap-y-7">
        <TypingInput
          label="სახელი"
          messageText="მინიმუმ ორი სიმბოლო"
          id="agent_name_input"
          name="name"
          state={[name, setName]}
          isRequired
        />
        <TypingInput
          label="გვარი"
          messageText="მინიმუმ ორი სიმბოლო"
          id="agent_surname_input"
          name="surname"
          state={[surname, setSurname]}
          isRequired
        />
        <TypingInput
          label="ელ-ფოსტა"
          messageText="გამოიყენეთ @redberry.ge ფოსტა"
          id="agent_email_input"
          name="email"
          state={[email, setEmail]}
          isRequired
        />
        <TypingInput
          label="ტელეფონის ნომერი"
          messageText="მხოლოდ რიცხვები (ფორმატი: 5XXXXXXXX)"
          id="agent_phone_input"
          name="phone"
          state={[phone, setPhone]}
          isRequired
          maxLength={9}
        />
      </div>
      <FileInput
        label="ატვირთეთ ფოტო"
        id="agent_avatar_input"
        name="avatar"
        state={[avatar, setAvatar]}
      />
    </div>
  );
}
