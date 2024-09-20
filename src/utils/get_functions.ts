import { unstable_cache } from "next/cache";
import { API_DOMAIN, API_TOKEN } from "./constants";

// Locations
export const getRegionList = async () => {
    try {
        const res = await fetch(`${API_DOMAIN}/regions`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                authorization: `Bearer ${API_TOKEN}`,
            },
        });
        if (!res.ok) throw new Error("unable to fetch regions list");

        return await res.json() as Array<Region>;
    } catch (error) {
        console.error(error)
        return null
    }
};
export const getCitiesList = async () => {
    try {
        const res = await fetch(`${API_DOMAIN}/cities`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                authorization: `Bearer ${API_TOKEN}`,
            },
        });
        if (!res.ok) throw new Error("unable to fetch cities list");

        return await res.json() as Array<City>;
    } catch (error) {
        console.error(error)
        return null
    }
}

// Agents
export const getAgentsList = unstable_cache(async () => {
    try {
        const res = await fetch(`${API_DOMAIN}/agents`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                authorization: `Bearer ${API_TOKEN}`,
            },
        });
        if (!res.ok) throw new Error("unable to fetch agents list");

        const data = await res.json() as Array<Agent>

        return data.reverse()
    } catch (error) {
        console.error(error)
        return null
    }
}, ["agent_list"], { tags: ["agent_list"] })

// Estates
export const getSingleEstateData = async (id: number) => {
    try {
        const res = await fetch(`${API_DOMAIN}/real-estates/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                authorization: `Bearer ${API_TOKEN}`,
            },
        });
        if (!res.ok) throw new Error("unable to fetch single estate data");

        return await res.json() as SingleEstate;
    } catch (error) {
        console.error(error)
        return null
    }
};
export const getAllEstates = unstable_cache(async () => {
    try {
        const res = await fetch(`${API_DOMAIN}/real-estates`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                authorization: `Bearer ${API_TOKEN}`,
            },
        });
        if (!res.ok) throw new Error("unable to fetch estate list ");

        const data = await res.json() as Array<EstateInList>;

        return data.reverse()
    } catch (error) {
        console.error(error)
        return null
    }
}, ["estate_list"], { tags: ["estate_list"] })