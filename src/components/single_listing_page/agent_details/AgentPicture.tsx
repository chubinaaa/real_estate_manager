import Image from "next/image";
import agent_image from "/public/jpg/agent_image.jpg";

type Props = {
  source: string;
};

export default function AgentPicture({ source }: Props) {
  return (
    <Image
      src={source ? source : agent_image}
      alt="agent profile picture"
      width={128}
      height={128}
      className="w-[72px] h-[72px] rounded-full object-cover"
    />
  );
}
