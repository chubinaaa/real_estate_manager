import Agent from "./Agent";
import AgentPicture from "./AgentPicture";
import Email from "./Email";
import Number from "./Number";

export default function AgentDetails() {
  return (
    <div className="w-[70%] flex flex-col justify-center items-start gap-4 | border-[1px] border-thirdGray rounded-[8px] px-5 py-6 mb-[20px]">
      <div className="flex justify-center items-center gap-[14px]">
        <AgentPicture source="" />
        <Agent name="სოფიო" surname="გელოვანი" />
      </div>
      <div className="flex flex-col justify-center items-start gap-1">
        <Email value="sophio.gelovani@redberry.ge" />
        <Number value="577777777" />
      </div>
    </div>
  );
}
