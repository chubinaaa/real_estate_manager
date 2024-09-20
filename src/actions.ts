"use server"

import { revalidateTag } from "next/cache"

export const revalidateAgentsList = async () => {
    revalidateTag("agent_list")
}

export const revalidateEstateList = async () => {
    revalidateTag("estate_list")
}