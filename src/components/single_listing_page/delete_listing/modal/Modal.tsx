"use client";

import { useRouter } from "next/navigation";
import { API_DOMAIN, API_TOKEN } from "../../../../utils/constants";
import Backdrop from "../../../ui/Backdrop";
import XcloseBtn from "../../../ui/buttons/XcloseBtn";
import Buttons from "./Buttons";
import Heading from "./Heading";
import { useState } from "react";

type Props = {
  modalHandler: () => void;
  estate_id: number;
};

export default function Modal({ modalHandler, estate_id }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const deleteAction = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_DOMAIN}/real-estates/${estate_id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${API_TOKEN}`,
        },
      });

      if (!res.ok) throw new Error("Unable to delete single estate");

      router.replace("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Backdrop onClick={modalHandler} />
      <div className="z-50 fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 | flex flex-col justify-center items-center gap-[35px] | px-[170px] py-[58px] | bg-white rounded-[10px] select-none">
        <Heading />
        <span className="absolute top-[30px] right-[30px]">
          <XcloseBtn onClick={modalHandler} />
        </span>
        <Buttons
          cancelAct={modalHandler}
          deleteAct={deleteAction}
          loading={isLoading}
        />
      </div>
    </>
  );
}
