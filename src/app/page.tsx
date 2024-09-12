import CheckBoxInput from "../components/ui/inputs/CheckBoxInput";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center gap-10 p-10">
      <CheckBoxInput
        label="რეგიონის მიხედვით"
        id="ტესტი"
        name="checkboxGroup"
        value="region"
      />
    </div>
  );
}
