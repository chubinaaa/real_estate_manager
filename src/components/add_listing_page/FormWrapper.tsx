"use client";

import { useRouter } from "next/navigation";
import { API_DOMAIN, API_TOKEN } from "../../utils/constants";
import AddEstateProvider from "../../context/providers/AddEstateProvider";
import { revalidateEstateList } from "../../actions";
import { useContext } from "react";
import { AddEstateContext } from "../../context/ctx";

type Props = {
  children: React.ReactNode;
};

export default function FormWrapper({ children }: Props) {
  const { setDisableBtn } = useContext(AddEstateContext);
  const router = useRouter();

  const handleSubmition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      setDisableBtn(true);
      const res = await fetch(`${API_DOMAIN}/real-estates`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          authorization: `Bearer ${API_TOKEN}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Unable to publish estate data");

      const estate = (await res.json()) as SingleEstate;

      await revalidateEstateList();
      router.refresh();
      router.push(`/${estate.id}`);
      localStorage.clear();
    } catch (error) {
      console.error(error);
    } finally {
      setDisableBtn(false);
    }
  };

  return (
    <AddEstateProvider>
      <form onSubmit={handleSubmition}>{children}</form>
    </AddEstateProvider>
  );
}
