<script>
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';

	async function login() {
		try {
			const response = await fetch('http://127.0.0.1:8080/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			});

			const data = await response.json();

			if (data.accessToken && data.refreshToken) {
				localStorage.setItem('grantType', data.grantType);
				localStorage.setItem('accessToken', data.accessToken);
				localStorage.setItem('refreshToken', data.refreshToken);
				goto('/home');
			} else {
				alert('잘못된 이메일 또는 비밀번호 입니다.');
			}
		} catch (err) {}
	}

	async function signup() {}
</script>

<div>
	<form on:submit|preventDefault={login} style="display: inline;">
		<input bind:value={email} placeholder="Email" /> <br />
		<input type="password" bind:value={password} placeholder="Password" /><br />
		<button type="submit">로그인</button>
	</form>
	<button on:click={signup}>회원가입</button>
</div>
