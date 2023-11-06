<script lang="ts">
	import { error } from '@sveltejs/kit';
    import type { PageData } from './$types';
    import { getCookie, setCookie } from 'typescript-cookie';
  
    export let data: PageData;

    const deleteEvent = async() => {
        const response = await fetch('http://localhost:8080/organizer/event', {
				method: 'DELETE',
				headers: {
                    Authorization: `Bearer ` + getCookie('accessToken'),
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify({ 
                    eventCode: data.event_id,
                    name: data.data.name,
                    description: data.data.description })
			});

            if(response.ok){
                return true;
            }

            throw error;
    }

    const patchEvent = async() => {
        const response = await fetch('http://localhost:8080/organizer/event', {
				method: 'PUT',
				headers: {
                    Authorization: `Bearer ` + getCookie('accessToken'),
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify({ 
                    eventCode: data.event_id,
                    name: data.data.name,
                    description: data.data.description })
			});

            if(response.ok){
                return true;
            }

            throw error;
    }
  </script>
  
  <h1>{data.data.name}</h1>
  <div>{data.data.description}</div>
  <form on:submit|preventDefault={deleteEvent} style="display: inline;">
    <button type="submit">삭제</button>
  </form>
  <form on:submit|preventDefault={deleteEvent} style="display: inline;">
    <button type="submit">수정</button>
  </form>