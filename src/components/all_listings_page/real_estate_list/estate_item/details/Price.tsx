type Props = {
  value: number;
};

export default function Price({ value }: Props) {
  return <h1 className="font-bold text-[28px] text-primaryBlack">{value.toLocaleString()} ₾</h1>;
}
