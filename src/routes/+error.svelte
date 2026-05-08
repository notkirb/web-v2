<script>
	import { page } from '$app/state';
</script>
<title>an error on notkirb_'s site</title>
<main>
    <h1>oops, a {page.status} happened</h1>
    <p>in other words, {page.error?.message}</p>
    <p>either this page doesnt exist yet or you mistyped something.</p>
</main>