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
	<a href="https://vault.notkirb.com/">the vault</a>
	<a href="/about">about me</a>
</nav>
{@render children()}
<footer>
	<a href="https://github.com/notkirb">github</a>
	<a href="https://discord.gg/qtB3F6tyBc">discord</a>
	<a href="https://x.com/notkirb_">twitter</a>
	<aside>
		<img src="/assets/images/no-ai.png" alt="" style="max-height: 12px;">
		made by a human
	</aside>
</footer>