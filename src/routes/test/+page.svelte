<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<body>
	<form method="POST" action="?/login">
		<h1>{data.post.title}</h1>
		<p>{data.post.message}</p>
		<button>Log in</button>
	</form>
</body>
