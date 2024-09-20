"use client";

import { useState } from "react";
import { API_DOMAIN, API_TOKEN } from "../../../utils/constants";
import Backdrop from "../../ui/Backdrop";
import GrayButton from "../../ui/buttons/GrayButton";
import RedButton from "../../ui/buttons/RedButton";
import Heading from "./Heading";
import Inputs from "./Inputs";
import { revalidateAgentsList } from "../../../actions";
import { useRouter } from "next/navigation";

type Props = {
  modalHandler: () => void;
};

export default function Modal({ modalHandler }: Props) {
  const router = useRouter();
  const [isSubmitEnable, setIsSubmitEnable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    e.stopPropagation();

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

      await revalidateAgentsList();
      router.refresh();
      modalHandler();
      localStorage.clear();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
        <Inputs enableSubmition={setIsSubmitEnable} />
        <div className="w-full flex justify-end items-center gap-[15px]">
          <GrayButton text="გაუქმება" action={modalHandler} />
          <RedButton
            text="დაამატე აგენტი"
            type="submit"
            disabled={!isSubmitEnable || isLoading}
          />
        </div>
      </form>
    </>
  );
}
