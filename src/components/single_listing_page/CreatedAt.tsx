type Props = {
  value: string;
};

export default function CreatedAt({ value }: Props) {
  const formatDate = (creationTime: string) => {
    const date = new Date(creationTime);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const created_at = formatDate(value);

  return (
    <h1 className="font-normal text-[16px] text-primaryGray select-none">
      გამოქვეყნების თარიღი {created_at}
    </h1>
  );
}
