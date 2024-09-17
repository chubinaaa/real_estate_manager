type Props = {
  value: number;
};

export default function Price({ value }: Props) {
  return <h1 className="font-bold text-[48px]">{value} ₾</h1>;
}
