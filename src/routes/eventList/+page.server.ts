import type { PageServerLoad, Actions } from './$types';
export const load = (async ({ cookies }) => {
    const token = cookies.get('accessToken');
    const response = await fetch("http://localhost:8080/event", {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    const data = await response.json();
    return { data };
}) satisfies PageServerLoad;