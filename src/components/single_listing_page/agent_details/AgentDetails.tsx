import Agent from "./Agent";
import AgentPicture from "./AgentPicture";
import Email from "./Email";
import Number from "./Number";

type Props = {
  image: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
};

export default function AgentDetails({
  email,
  image,
  name,
  phone,
  surname,
}: Props) {
  return (
    <div className="w-[70%] flex flex-col justify-center items-start gap-4 | border-[1px] border-thirdGray rounded-[8px] px-5 py-6 mb-[20px]">
      <div className="flex justify-center items-center gap-[14px]">
        <AgentPicture source={image} />
        <Agent name={name} surname={surname} />
      </div>
      <div className="flex flex-col justify-center items-start gap-1">
        <Email value={email} />
        <Number value={phone} />
      </div>
    </div>
  );
}
