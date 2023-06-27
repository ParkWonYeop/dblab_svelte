import type { PageServerLoad } from './$types';

const getData = async () => {
    const data = await fetch('http://127.0.0.1:8080/test');
    const json = await data.json();

    return json;
};

export const load = (async ({ params }) => {
    return {
        post: await getData()
    }
}) satisfies PageServerLoad;