"use client";

import AddButton from "../components/ui/buttons/AddButton";
import GrayButton from "../components/ui/buttons/GrayButton";
import RedButton from "../components/ui/buttons/RedButton";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-10">
      <AddButton
        variant="filled"
        text="ლისტინგის დამატება"
        action={() => console.log("ფერადი")}
      />
      <AddButton
        variant="transparent"
        text="ლისტინგის დამატება"
        action={() => console.log("გამჭირვალე")}
      />
      <RedButton text="არჩევა" action={() => console.log("არჩევაო")} />
      <GrayButton text="ლისტინგის წაშლა" action={() => console.log("წაშლაო")} />
    </div>
  );
}
