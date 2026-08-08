<script lang="js">
    import { onMount } from "svelte";

    const username = 'notkirb';

    var song_name = '[   ]'
    var artist_name = '[   ]'
    var listening = 'the last song i listened to was'
    var album_art = 'https://placehold.co/64x64/000000/0f0'

    onMount(async function () {
        const response = await fetch(`https://lastfm-last-played.biancarosa.com.br/${username}/latest-song`);
        const data = await response.json();
        const track = data.track;

        song_name = track.name
        artist_name = track.artist["#text"]
        album_art = track.image[1]["#text"]
        try {
            listening = (track["@attr"]["nowplaying"]) ? 'im currently listening to' : 'the last song i listened to was'
        } catch {
            listening = 'the last song i listened to was'
        }
    });
    
    
</script>
<div>
    <div class="art"><img src="{album_art}"></div>
    <div class="small-status">{listening}</div>
    <div class="artist">{artist_name}</div>
    <div class="song-name">{song_name}</div>
</div>


<style>
    .small-status {
        font-size: 12px;
        color: #999999;
    }
    .art {
        float: left;
        margin-right: 12px
    }
</style>