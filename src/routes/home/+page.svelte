<script context="module">
	import { goto } from '$app/navigation';
</script>

<script>
	const logout = async () => {
		document.cookie = `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		document.cookie = `refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		goto('login');
	};

	const showEventList = async () => {
		goto('eventList');
	};
</script>

<p>홈화면입니다</p>
<button on:click={showEventList}>이벤트 리스트</button><br />
<button on:click={logout}>로그아웃</button>
