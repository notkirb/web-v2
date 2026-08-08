<script lang="ts">
    // Source - https://stackoverflow.com/a/72859846
    // Posted by Bob Fanger, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-08-07, License - CC BY-SA 4.0

    const images = Object.values(import.meta.glob('$lib/assets/8831/*', { eager: true, as: 'url' }))
</script>
<div class="buttonwall">
    {#each images as image}
        <img src="{image}" alt=""/>
    {/each}
</div>
