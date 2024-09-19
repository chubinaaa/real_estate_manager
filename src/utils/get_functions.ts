import { API_DOMAIN, API_TOKEN } from "./constants";

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