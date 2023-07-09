<script context="module">
	import { goto } from '$app/navigation';
</script>

<script>
	let email = '';
	let password = '';
	let name = '';
	let nickName = '';

	const signup = async () => {
		const response = await fetch('http://localhost:8080/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password, name, nickName })
		});

		const data = await response.text();

		if (data === 'success') {
			goto('/login');
		} else {
			alert('이메일 또는 비밀번호를 다시 한번 확인해주세요.');
		}
	};
</script>

<div>
	<form on:submit|preventDefault={signup} style="display: inline;">
		이메일 <input type="email" bind:value={email} placeholder="Email" /> <br />
		비밀번호 <input type="password" bind:value={password} placeholder="Password" /><br />
		이름 <input bind:value={name} placeholder="Name" /><br />
		별명 <input bind:value={nickName} placeholder="Nickname" /><br />
		<button type="submit">확인</button>
	</form>
</div>
