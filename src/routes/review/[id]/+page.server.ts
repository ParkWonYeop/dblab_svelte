import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

function isNum(obj: string|number): boolean {
  return ! isNaN(Number(obj));
}
 
export const load = (async({ params, cookies }) => {
  if (isNum(params.id)) {
    const token = cookies.get('accessToken');
    const response = await fetch(`http://localhost:8080/event/review?id=${params.id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    const data = await response.json();
    return { data : data, event_id: params.id };
  }
 
  throw error(404, 'Not found');
}) satisfies PageServerLoad;