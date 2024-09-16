"use client";

import { useRouter } from "next/navigation";
import GrayButton from "../../ui/buttons/GrayButton";

export default function Cancel() {
  const router = useRouter();

  return <GrayButton text="გაუქმება" action={() => router.back()} />;
}
