"use client";

import RadioCheckbox from "../components/ui/RadioCheckbox";

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    console.log(form.get("radio_input"));
  };

  return (
    <div className="w-full flex justify-center items-center gap-3">
      <form onSubmit={handleSubmit}>
        <RadioCheckbox
          id="for_sale"
          name="radio_input"
          value="for_sale_value_for_api"
          label="იყიდება"
        />
        <RadioCheckbox
          id="for_rent"
          name="radio_input"
          value="for_rent_value_for_api"
          label="ქირავდება"
        />
        <button type="submit">ტესტ</button>
      </form>
    </div>
  );
}
