<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/">home</a>
	<a href="/projects">projects</a>
	<a href="/blog">blog</a>
	<a href="/about">about me</a>
</nav>

{@render children()}
