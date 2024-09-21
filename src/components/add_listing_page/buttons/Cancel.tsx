"use client";

import { useRouter } from "next/navigation";
import GrayButton from "../../ui/buttons/GrayButton";

export default function Cancel() {
  const router = useRouter();

  const handleCancel = () => {
    localStorage.removeItem("estate_upload_address_input");
    localStorage.removeItem("estate_upload_area");
    localStorage.removeItem("estate_upload_bedrooms");
    localStorage.removeItem("estate_upload_desc");
    localStorage.removeItem("estate_upload_postal_code_input");
    localStorage.removeItem("estate_upload_price");
    router.back();
  };

  return <GrayButton text="გაუქმება" action={handleCancel} />;
}
