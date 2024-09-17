"use client";

import { useRouter } from "next/navigation";
import AddButton from "../../ui/buttons/AddButton";

export default function AddListing() {
  const router = useRouter();

  return (
    <AddButton
      variant="filled"
      text="ლისტინგის დამატება"
      action={() => router.push("/add-listing")}
    />
  );
}
