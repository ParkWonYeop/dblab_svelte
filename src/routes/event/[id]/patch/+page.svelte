<script lang="ts">
	import { error } from '@sveltejs/kit';
	import type { PageData } from './$types';
	import { getCookie, setCookie } from 'typescript-cookie';

	export let data: PageData;

	let name = data.data.name;
	let description = data.data.description;
	let maxParticipation = data.data.maxParticipation;

	const back = async () => {
		window.history.back();
	};

	const patchEvent = async () => {
		const response = await fetch('http://localhost:8080/organizer/event', {
				method: 'PUT',
				headers: {
                    Authorization: `Bearer ` + getCookie('accessToken'),
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify({ 
                    eventCode: data.data.event_id,
                    name: name,
                    description: description,
					maxParticipation: maxParticipation 
				})
			});

            if(response.ok){
                return true;
            }

            throw error;
	};
</script>

{#if data?.success}
	<form on:submit|preventDefault={patchEvent} style="display: inline;">
		<label>
			제목
			<input name="name" bind:value={name}/>
		</label><br /><br />
		<label>
			<textarea name="description" bind:value={description} rows="20" cols="50" wrap="virtual" />
		</label> <br />
		<label>
			<input type="number" name="maxParticipation" bind:value={maxParticipation} min="1" max="100"/>
		</label> <br />
		<button type="submit">확인</button>
	</form>
{:else}
	<h>권한이 없습니다.</h>
	<button on:click={back}>뒤로가기</button>
{/if}
