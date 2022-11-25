<script lang="ts">
  import { WindowManager } from "../../stores";

</script>

<div 
  id="start_button" class:opened={$WindowManager.start_menu_opened}
  class="middle" on:click={WindowManager.toggleStartMenu} on:keydown={() => {}}
>
  <img src="https://therolf.fr/img/xp/wl.png" alt="xp" /><span id="start_button_text">
    start
  </span>
</div>

<style>
#start_button {
  align-self: flex-start;
  height: 100%;
  background-image: url(https://therolf.fr/img/xp/sb.png);
  width: 99px;
  margin-bottom: 1px;
  cursor: default;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
}
#start_button_text {
  color: rgb(255, 255, 255);
  font-family: 'Franklin Gothic Medium';
  font-style: italic;
  font-size: 14pt;
  text-shadow: 1px 2px 2px rgb(69, 76, 16), 0 0 3px rgb(69, 76, 16);
}


#start_button:hover {
    background-position: 0 -33px;
}
#start_button.opened {
    background-position: 0 33px;
}
</style>