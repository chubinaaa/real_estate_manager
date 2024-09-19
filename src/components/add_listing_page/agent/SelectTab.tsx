"use client";

import { useEffect, useState } from "react";
import SelectOptions from "../../ui/selections/SelectOptions";

type Props = {
  data: Array<Agent>;
};
export default function SelectTab({ data }: Props) {
  const [state, setState] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      const savedAgentId =
        Number(localStorage.getItem("estate_upload_agent_id")) || 0;
      setState(savedAgentId);
    }
  }, []);

  return (
    <SelectOptions
      putAgentModalOpener
      labelText="აირჩიე"
      id="estate_upload_agent_id"
      name="agent_id"
      options={data.map((agent) => ({
        id: agent.id,
        name: `${agent.name} ${agent.surname}`,
      }))}
      state={[state, setState]}
    />
  );
}
