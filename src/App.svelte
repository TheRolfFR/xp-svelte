<script lang="ts">
  import Taskbar from './lib/Taskbar.svelte';
  import { WindowManager } from './stores';
</script>

<main on:click|self={WindowManager.closeStartMenu} on:keydown={() => {}}>
</main>
<Taskbar />

<style>
  main {
    overflow: hidden;
    flex-grow: 1;
  }
</style>