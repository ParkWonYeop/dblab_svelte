<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let data: PageData;

	export let form: ActionData;
</script>

<table border={parseInt("1")}>
	<th>Id</th>
	<th>이벤트 이름</th>
	<th>이벤트 주최자</th>
	<th>생성일</th>
	{#each data.data as event, index}
		<tr>
			<td>{index + 1}</td>
			<a href="/event/{index}"><td>{event.name}</td></a>
			<td>{event.user.nickName}</td>
			<td
				>{new Date(event.createdAt).getFullYear()}년
				{new Date(event.createdAt).getMonth() + 1}월
				{new Date(event.createdAt).getDate()}일
				{new Date(event.createdAt).getHours()}시
				{new Date(event.createdAt).getMinutes()}분
			</td>
		</tr>
	{/each}
</table>
<form action="/event/add">
	<button>이벤트 추가</button>
</form>
<form action="/home">
	<button>홈으로</button>
</form>
