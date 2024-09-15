type Props = {
  name: string;
  surname: string;
};

export default function Agent({ name, surname }: Props) {
  return (
    <div className="flex flex-col justify-center items-start gap-1 select-none">
      <h1 className="font-normal text-[14px]">
        {name} {surname}
      </h1>
      <p className="font-normal text-[14px] text-secondaryGray">აგენტი</p>
    </div>
  );
}
