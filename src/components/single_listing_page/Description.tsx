type Props = {
  data: string;
};

export default function Description({ data }: Props) {
  return (
    <p className="font-normal text-[18px] text-secondaryGray | pt-10 pb-[50px]">
      {data}
    </p>
  );
}
