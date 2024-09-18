"use client";

import { API_DOMAIN, API_TOKEN } from "../../../utils/constants";
import Backdrop from "../../ui/Backdrop";
import Buttons from "./Buttons";
import Heading from "./Heading";
import Inputs from "./Inputs";

type Props = {
  modalHandler: () => void;
};

export default function Modal({ modalHandler }: Props) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(`${API_DOMAIN}/agents`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          authorization: `Bearer ${API_TOKEN}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to post agent data");
      modalHandler();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Backdrop onClick={modalHandler} />
      <form
        onSubmit={handleSubmit}
        className="z-50 fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 | flex flex-col justify-center items-center | px-[105px] py-[87px] | bg-white rounded-[10px] "
      >
        <Heading />
        <Inputs />
        <Buttons cancelAct={modalHandler} />
      </form>
    </>
  );
}
