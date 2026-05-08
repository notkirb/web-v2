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
	<a href="/about">about me</a>
	<a href="/blog">blog</a>
	<aside>
		<a href="https://vault.notkirb.com/">the vault</a>
	</aside>
</nav>
{@render children()}
<footer>
	<a href="https://x.com/notkirb_">twitter</a>
	<a href="https://github.com/notkirb">github</a>
	<a href="https://discord.gg/qtB3F6tyBc">discord</a>
	<aside>
		by notkirb_
		<img src="/assets/images/no-ai.png" alt="" style="max-height: 10px;">
	</aside>
</footer>