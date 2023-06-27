import type { Actions } from './$types';

export const actions = {
    default: async (event) => {

    },
    login: async (event) => {
        const data = await fetch("http://localhost:8080/test", {
            method: "POST",
            body: JSON.stringify({
                number: 3
            }),
        })

        const json = await data.json();

        return json;
    }
} satisfies Actions;