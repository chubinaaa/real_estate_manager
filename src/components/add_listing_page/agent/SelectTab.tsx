"use client";

import { useContext, useEffect } from "react";
import SelectOptions from "../../ui/selections/SelectOptions";
import { AddEstateContext } from "../../../context/ctx";

type Props = {
  data: Array<Agent>;
};
export default function SelectTab({ data }: Props) {
  const { agentState } = useContext(AddEstateContext).inputStates;

  const [state, setState] = agentState;

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      const savedAgentId = Number(
        localStorage.getItem("estate_upload_agent_id")
      );
      savedAgentId
        ? setState({ value: savedAgentId, validity: true })
        : setState({ value: 0, validity: false });
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
