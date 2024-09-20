"use client";

import { useContext } from "react";
import RedButton from "../../ui/buttons/RedButton";
import { AddEstateContext } from "../../../context/ctx";

export default function Add() {
  const { isFormValid } = useContext(AddEstateContext);

  return <RedButton type="submit" text="დამატება" disabled={!isFormValid} />;
}
