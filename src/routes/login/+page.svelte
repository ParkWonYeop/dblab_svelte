<script lang="ts">
	import { goto } from '$app/navigation';
	import { getCookie, setCookie } from 'typescript-cookie';
	let email = '';
	let password = '';

	async function login() {
		try {
			const response = await fetch('http://localhost:8080/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify({ email, password })
			});

			const data = await response.json();

			if (data.accessToken && data.refreshToken) {
				setCookie('accessToken', data.accessToken, { path: '/;' });
				setCookie('refreshToken', data.refreshToken, { path: '/;' });
				goto('/home');
			} else {
				alert('잘못된 이메일 또는 비밀번호 입니다.');
			}
		} catch (err) {}
	}

	async function signup() {
		goto('/signup');
	}
</script>

<div>
	<form on:submit|preventDefault={login} style="display: inline;">
		<input bind:value={email} placeholder="Email" /> <br />
		<input type="password" bind:value={password} placeholder="Password" /><br />
		<button type="submit">로그인</button>
	</form>
	<button on:click={signup}>회원가입</button>
</div>
