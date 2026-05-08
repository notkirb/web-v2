<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
</script>
<title>notkirb_'s projects</title>
<main>
    <h1>say hi to some of my projects!!!!</h1>
    
</main>


<ul class="project-list">
    {#each data.projects as { name, description, link, link_hint }}
        <li>
            <h2>{name}</h2>
            <p>{description}</p>
            <a href="{link}">{link_hint}</a>
        </li>
    {/each}
</ul>

<main style="margin-top: 1em">

    <h1>and my games!!!!</h1>
    
</main>

<ul class="project-list">
    {#each data.games as { name, description, link, link_hint }}
        <li>
            <h2>{name}</h2>
            <p>{description}</p>
            <a href="{link}">{link_hint}</a>
        </li>
    {/each}
</ul>