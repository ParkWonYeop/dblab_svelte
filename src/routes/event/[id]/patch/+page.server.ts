import type { PageServerLoad } from './$types';
export const load = (async ({ params ,cookies }) => {
    const token = cookies.get('accessToken')
    const response = await fetch("http://localhost:8080/organizer", {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })

    if (!response.ok) {
        return { success: false }
    }

    const responses = await fetch(`http://localhost:8080/event?id=${params.id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })

    const data = await responses.json();

    return {
        success: true,
        token: token,
        data: data
    };
}) satisfies PageServerLoad;