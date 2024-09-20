"use client";

import { useRouter } from "next/navigation";
import GrayButton from "../../ui/buttons/GrayButton";

export default function Cancel() {
  const router = useRouter();

  const handleCancel = () => {
    localStorage.clear();
    router.back();
  };

  return <GrayButton text="გაუქმება" action={handleCancel} />;
}
