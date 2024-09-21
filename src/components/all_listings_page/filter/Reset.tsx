type Props = {
  action: () => void;
};

export default function Reset({ action }: Props) {
  return (
    <h1 className="ml-2 font-medium cursor-pointer" onClick={action}>
      გასუფთავება
    </h1>
  );
}
