<script lang="ts">
	import type { PageData } from './$types';
	import { getCookie, setCookie } from 'typescript-cookie';

	export let data: PageData;

	let name = '';
	let description = '';
	let maxParticipation = ''

	const back = async () => {
		window.history.back();
	};

	const addEvent = async () => {
		const response = await fetch('http://localhost:8080/organizer/event', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ` + getCookie('accessToken'),
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify({ name, description, maxParticipation })
		});

		if (!response.ok) {
			alert('오류가 발생했습니다.');
		}

		window.history.back();
	};
</script>

{#if data?.success}
	<form on:submit|preventDefault={addEvent} style="display: inline;">
		<label>
			제목
			<input name="name" bind:value={name} />
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
