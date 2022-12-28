<script lang="ts">
  const IMG_ROOT = process.env.NODE_ENV !== 'production' ? 'https://therolf.fr' : '';
  const menuItems: Record<string, {
    splitter: boolean
  }|{
    icon: string,
    text: string,
    link: string,
    main?: boolean,
    blank?: boolean
  }> = {
    languages: {
      icon: "computer",
      text: "My languages",
      link: "/languages/",
      main: true,
    },
    resume: {
      icon: "wordpad",
      text: "Resume",
      link: "/resume/",
      main: true,
    },
    sp: {
      splitter: true,
    },
    css: {
      icon: "appearance",
      text: "CSS Generators",
      link: "/cssgenerators/",
    },
    articles: {
      icon: "documents",
      text: "Articles",
      link: "/anchor/",
    },
    portfolio: {
      icon: "images",
      text: "Portfolio",
      link: "/portfolio/",
    },
    resources: {
      icon: "fonts",
      link: "/resources/",
      text: "Resources",
    },
    workspace: {
      icon: "internet_explorer",
      text: "WorkSpace",
      link: "/workspace2/",
    },
    gists: {
      icon: "notepad",
      text: "Gists",
      link: "https://gist.github.com/TheRolfFR",
      blank: true,
    },
  };

  const socials: Record<string, {
    icon: string,
    text: string,
    link: string
  }> = {
    linkedin: {
      icon: "linkedin",
      text: "LinkedIn",
      link: "http://bit.ly/therolf-linkedin",
    },
    twitter: {
      icon: "twitter",
      text: "Twitter",
      link: "https://bit.ly/therolf-twitter",
    },
    dribbble: {
      icon: "dribbble",
      text: "Dribble",
      link: "https://bit.ly/therolf-dribbble",
    },
    codepen: {
      icon: "codepen",
      text: "CodePen",
      link: "https://bit.ly/therolf-codepen",
    },
    github: {
      icon: "github",
      text: "GitHub",
      link: "https://bit.ly/therolf-github",
    },
    twitch: {
      icon: "twitch",
      text: "Twitch",
      link: "https://bit.ly/therolf-twitch",
    },
  };
</script>

<div id="start_menu">
  <div id="start_header" class="flex-items-middle">
      <img id="user_icon" src={IMG_ROOT + '/img/therolf.jpg'} alt="R" /><span id="user_name">TheRolf</span>
  </div>
  <div id="start_body">
      <div class="orange-hr"></div>
      <div id="start_left">
        {#each Object.values(menuItems) as item }
          {#if 'splitter' in item && item.splitter }
            <div class="start_item_splitter"></div>
          {:else if 'link' in item}
            <a href={item.link} class="start_item" target={'blank' in item ? '_blank' : undefined}>
                <img src={IMG_ROOT + '/img/xp/icons/' + item.icon + '.png'} alt={item.icon} class="start_img">
                <div class={'start_text' + ('main' in item ? ' start_text_main': '')}>{ item.text }</div>
            </a>
          {/if}
        {/each}
          <div style="flex: 1 1 0%;"></div>
          <div class="start_item_splitter"></div>
          <div class="start_item">
              <div style="display: flex; align-items: center;">
                  <span class="start_text start_text_main">
                      All Programs
                  </span><img src="/img/xp/all_programs.ico" alt="" style="margin-left: 5px; height: 18px;" />
              </div>
          </div>
      </div>
      <div id="start_right">
        {#each Object.values(socials) as item}
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="start_item" href={item.link} target="_blank" rel="noreferrer">
            <img src={IMG_ROOT + '/img/xp/icons/' + item.icon + '.png'} alt={item.icon} class="start_img">
            <div class="start_text start_text_main">{ item.text }</div>
          </a>
        {/each}
          <div class="start_item_splitter"></div>
          <div class="start_item">
              <img class="start_img" src="data:image/png;base64,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" alt="Control Panel">
              <div class="start_texts">
                  <div class="start_text ">Control Panel</div>
              </div>
          </div>
          <div class="start_item">
              <img class="start_img" src="data:image/png;base64,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" alt="Set Program Access and Defaults">
              <div class="start_texts">
                  <div class="start_text ">Set Program Access and Defaults</div>
              </div>
          </div>
          <div class="start_item">
              <img class="start_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAhoSURBVFhHxVd7UFTnFQetJaO0jU2j8dmx6DhpQiZ9UScaTKtJUyca/6lmRh3r2FFHK+AkGBBQNIoixhig4hstr/KUh+7yEFiEhWV5LMsCuzyW5/J+unoBef16zrcjSIKoM5nJmfnNvd+d/c7vd853zrl3rX50UwVY2ZRF2oe0l/qj0/AfdOoDLDBcQkuBh5TxtbUP/WyO5deTbffuoFe2bvV7Y88eP1taWluevqRpw94Me2zWAcgGxmIIsRYgBg0N+UiOOIOgc67p14Mzr8tkhf9TqSoTUlI0pVptnS4vr9JI62a6r9u//9xucveKxetLWEdF4DAexwO9JwinJ2D2gUnvB422FqMkZ4QwTBgam7jycwZbmd40/PFqu4PkkrPx4tZe8bWE7m+ANm+g/Sugla6txyzXbk+oUv1R3/4YfYNAz8Cz8YiUuLheM5LL9wg/Ec5fxNrKTklo8QXqvgQq/g3o6WrwIngCVZ54WOQOebIa7STAZH422knEnYzyob17DgWT2zcs3l/AWnXHJNR5Y6R4D0ZqgwHpPtCfNo6xR3Ko8hUoaXiM2j7A2DM16h4AhUYJuorSYZ1Oe5dcz7MwPMdatEckGA7jUe5BjI0WUAEG0MEGTQAXoS+/hAxNJyq6AV371CjroCtBkZ8LVW6OiVz/k/BzQTKdNZe4SqOa/ejN/YIqLRUY8CN8O4Ghb9HZeBZyZRnUzYDa9GwUk4C4jFr4+Z2rJNeHCXMFyXRm0jhJ5uzP0F18jlIeQtVP9WCm+6chnUGCXIZ7NRRh/dTIImQ3AdE5bVi3bmM+ud5BmHJ+TLKmor1SW8rf0GMIB/qIrIdasOfMZJhPISvtKpIqATmJYCQbLZAT7lYDSVVAIiFWNwL7d/6iJtcfE2wEyXTWULBTqo5zhLkmDOigNmyjefA0Wgld3qhSncQNpRkxBiCK5lZ4MRBCJRNRBMTTWk7PZRXDSK/sR0ysfPCjD9edJve/sLBMY8bcrZL+9t/RXx0INB8FmqgFn0azB1pLT6GkIAU5OgkyNUWqHKX7EWQXd0JZVA+lugKqAg20JRrodRrU13Md+HUdOXIkxMPD47NNmzbNJ6qpR7Uh7VNJH78FQ1UnqZfcgNrvoNEVHVoftLR2YGR4BNJDCYnxCYiOikRCfCySZUm4l5aCzMwMqFQqaLVaVFdXQ6/Xi/v8/HxER0f3urm5+S5btuxXRDlZSOntD6XymH9QM1P0VZ8TqBsY1Z9jxOCCtnwXZMa4Iyc7C4bKSrS2tuL27dvsFHfv3iXiTGg0GtTW1qKlpQVtbW0CPT096O7uRkdHB8rLy3H//n14enpmE+USwoQIbbij1JBEAqop2nIngjNNQ2d05DpDmR5BG7NRUFBIKECxphi5ubkoLi6mNNcLkocPH8JsNuPBgwfo7e0VpF1dXWhvbxdgAbzmTMhkMmzbti2OaBda2MmKrr812Jm6mcbwIaD0IE2Ugxgq2Iu8tBAY61tQSVGXlpZCp9OhqamJ3pANKCwsFI4HBgbGifv6+sYFcAZMJpPYy4LT09NFBjhTcXFxAwsXLvwXUf9MCEg8ZtOn9Lcb095YNVYa7DBWdtNhTBloP2YoUaDR1Aqj0SjOk0UwMQvgiLKzswWRJElCBBNWVFSI7CiVSty7d09c+RkfD9eFwWCAQqHAihUrbhH1rwnWVq4brTa+t9Iq+o92Voo/Ef68wkrxu+WzcuRyeX9Pbx8aGxtRU1MjNrOIoqIiNDc3C3BkvM7JyUFeXp6459/U1dUJcUxcUlIihGRkZCA1JRVhoWFYtGhREpG/SZhJsPop4Q+ENU8wa9asD06f8W1ix0zOZ8nOnohgp52dnUIc1wIfBxcg33PEvC85ORl37txBREQErly5gqCgIHh/dRQnfU5gwYIF/LJ6iyAEsLGIcbz77u/n3bhxw5iVlYXw8HBR8VzJHBmnkkXw+fJR8PEwIWUMMTExCAsLQ0hICAICAnD27FlcuHABly9fRmxULHxlh3Ah3huLFy35noBJ5uj4/qvx8fE1o6OjIjrugJs3b4po+AyZnIlDQ0MFGUfIhEzm4+MjiIODg0W7sjAOJD9fjRh5OCLiQ7B06dLpBaxevfpV2iwEcItxhTPUarVwStlBYmLiOKGvr6+4ZyGcBW631NRUUSMsmAuSBcplyVBkKrgG7hDNbwlTC1i1atVcckIvX3pB9veLKueeZ3BG+Jz5jJmUxfAxsbCkpCSkpKQIcl7z84sXL8Ld3R1btmxBYGAgEhISMGfOHM7AswU4ODjY7Nq161pVFb3eyIaGhkQmngjgguN2jIyMFOComTw2Nhb+/v6gsQsnJyccOHAAXl5e4tmTWuLfHj16tGvDhg2uRDXbwvh941E5187Ozo/GZwcXGxtPPRbBXcFDKSoqajzlbm5fYv369di8eTO2b98OZ2dnHD9+HOfPn8etW7fE3OBOoq4au3Tp0qO1a9eGEsf7gu0ZxiJes7a2Xu/o6CijournyTc4OCgmHvc5TTVQsYq0Hz58HJ98shE7d+4Q5Bw5tx53CLcr1cPovn372lauXFlIfqMIJwjTCnhi3JpLbG1t99JrVUuRjPCRcF1w2tPSUsXV2/viqLd3OF39cfXqNTGUeG6QiH6qqVran0p++Iv5C8I6wmLC8z9YnjKe3W8vXrzYjyI08dDh9NN5D65Zs6Z+/vx5ecuXv63etcurTyZTwMXFpcfe3r5s5syZCbTvG8JOwjuEXxJeivhpm0F4jZx+QM5DaaLl2tjY8FgNJOwlfDR7tu2O11+fd33GjBn/pfUxwqeE3xA4AN7/gxgfC79S1xL+SlhB4E9wfs6VzenlQcN/UHg99dfQD2CcSv5D+l0CXvPfs+cQW1n9H8BtE+xXPQvuAAAAAElFTkSuQmCC" alt="Printers and Faxes">
              <div class="start_texts">
                  <div class="start_text ">Printers and Faxes</div>
              </div>
          </div>
          <div class="start_item_splitter"></div>
          <div class="start_item">
              <img class="start_img" src="data:image/png;base64,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" alt="Help and Support">
              <div class="start_texts">
                  <div class="start_text ">Help and Support</div>
              </div>
          </div>
          <div class="start_item">
              <img class="start_img" src="data:image/png;base64,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" alt="Search">
              <div class="start_texts">
                  <div class="start_text ">Search</div>
              </div>
          </div>
          <div class="start_item">
              <img class="start_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAANoSURBVFhH7ZVrSFNhGMff2QXbOTPTIspdMzJYboNCnUdhJhGVkX2SvvglIhDKUEu3qUVll1W2MLqCuGiRRheLQEuyhqPQZvPyoTVIIaM5iRNMZSH6dN63KcuOszb7lD/4c97B9vyf9/887KB55pnnj1AVJgjUpnsC9TmHQH22S6A62y1QnQlLSH1+cOXmqxCVfOJWtFwnDzjMgvrCG7SjEdaUdMK6si5gLvRFJHSgBxanXgOhPHMXcnn9bOfHIba99yNr73CyrTYb29z0lL1ZXaUj5hqzBqXVAipy/bWuvwVYUdIz9YTCTeSJG0C6OyCUZRqQxXoHyo9WgrHCCAajHvSGI1BaVgzVJ/XHsL9AddoSv+8VJFl8cyZsHr1mt5tWMFXkkqFYnl034XC+A9b7fk7k/tBN4heJU+yUjCkJ2MyAxpwbv7mWt1C4OnmtBRYlFYyIJKkPKbl2D7cD31nHhy+s3dFD5v+s6Ymbi59sJ7e1jXvPPCI/9Ax0Q+MjS1jqdbZONaDIsXDLt62flmgv0zImi9sB64SxsgIM5Xoo0x+GoqKDeP4a3EBw/LhQaemhvxY2x+Aa0+OnpYwS+/AzLf7JBjAmkwm8Xi9RKCbNR32DpAaJf33BMC1Oe0BLmLwlYm1CwO13guMf6O+camBsbAzy8/OJud/vJwZ8jI+PTzXwbchN6vwSvzxDFyvXxSLnpxGwO13w/MVL6O1yuAP+vPFjLLet0NDQQM6h8Hr6Z49frF2CzpvN3PwNZP4Xq02jxD1E/Njc4/GQcyiw+bCPJWdcgz9+3ULiN53g+L8OukixcPTT3EXq8MaPUNRPx2kExx8puMaM8XN3Rd19Q9Dy0gaWK+dyifu/+vOZKX6b3T5hvlQN9+utnfgzjv9UXTNvoXAVFH/NrPEjzUWf9XEbvO5wzImaX7WT+Glxio2SpBf/Ej8f3NuvLSr5+OcFGyp8C5RGP6fvEcofnZjXT0nSakXyzFzuFbxqxu3HCBMzNlKyjCJamn6DkqbfpaTa+ogk0VqFMqZGKGf2U4pMFVLqaM6GN34BUioXU4rslUIp14SC2cJ1u4M750QkGbMdz51em6WMEW+NQ7oQt+cgTaAkRrRUmrFMlJAdH6lixNo4snSrdwoD5vyzDwJ/AQvHNJea1Xie/xGEfgA5zX5WeH/3AwAAAABJRU5ErkJggg==" alt="Run...">
              <div class="start_texts">
                  <div class="start_text ">Run...</div>
              </div>
          </div>
      </div>
  </div>
  <div id="start_footer">
      <div class="footer_item"><img class="footer_item__img" src="data:image/png;base64,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" alt=""><span>Log Off</span></div><div class="footer_item"><img class="footer_item__img" src="data:image/png;base64,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" alt=""><span>Turn Off Computer</span></div>
  </div>
</div>

<style>
#start_menu {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    font-size: 11px;
    line-height: 14px;
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    background-color: rgb(66, 130, 214);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

#start_header {
    position: relative;
    align-self: flex-start;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    color: rgb(255, 255, 255);
    height: 54px;
    padding: 6px 5px 5px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: rgba(0, 0, 0, 0) linear-gradient(rgb(24, 104, 206) 0%, rgb(14, 96, 203) 12%, rgb(14, 96, 203) 20%, rgb(17, 100, 207) 32%, rgb(22, 103, 207) 33%, rgb(27, 108, 211) 47%, rgb(30, 112, 217) 54%, rgb(36, 118, 220) 60%, rgb(41, 122, 224) 65%, rgb(52, 130, 227) 77%, rgb(55, 134, 229) 79%, rgb(66, 142, 233) 90%, rgb(71, 145, 235) 100%) repeat scroll 0% 0%;
    overflow: hidden;
}

#start_header #user_icon {
    width: 42px;
    height: 42px;
    margin-right: 5px;
    border-radius: 3px;
    border: 2px solid rgba(222, 222, 222, 0.8);
}
#start_header #user_name {
    font-size: 14px;
    font-weight: 700;
    text-shadow: rgba(0, 0, 0, 0.7) 1px 1px;
    font-style: normal;
    font-family: Tahoma, inherit;
}

#start_body {
  width: 380px;
}
#start_body {
    display: flex;
    margin: 0px 2px;
    position: relative;
    border-top: 1px solid rgb(56, 93, 231);
    box-shadow: rgb(56, 93, 231) 0px 1px;
    background: white;
}

#start_body .orange-hr {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  display: block;
  height: 2px;
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(218, 136, 74) 50%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0%;
  border: 0px none;
}

#start_left {
    background-color: rgb(255, 255, 255);
    padding: 6px 5px 0px;
    width: 190px;
    display: flex;
    flex-direction: column;
}

.start_item_splitter {
    height: 7.5px;
    background: rgba(0, 0, 0, 0) linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% padding-box content-box;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
}

#start_left .start_item:last-child {
  height: 24px;
  justify-content: center;
}

.start_item {
  padding: 1px;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  margin-bottom: 4px;
  color: black;
}

.start_item:hover {
    color: white !important;
    background-color: rgb(47, 113, 205);
}


.start_item .start_img {
    margin-right: 3px;
    width: 30px;
    height: 30px;
}

.start_item .start_text.start_text_main {
    font-weight: 700;
}


#start_right {
  background-color: rgb(203, 227, 255);
  border-left: 1px solid rgba(58, 58, 255, 0.37);
  padding: 6px 5px 5px;
  width: 190px;
  color: rgb(0, 19, 107);
  text-align: left;
}

#start_right .start_item {
    height: 26px;
    margin-bottom: 4px;
    line-height: 13px;
    color: rgb(0, 19, 107);
}
#start_right .start_item .start_img {
    height: 22px;
    width: 22px;
}

#start_footer {
    display: flex;
align-self: flex-end;
-moz-box-align: center;
align-items: center;
-moz-box-pack: end;
justify-content: flex-end;
color: rgb(255, 255, 255);
height: 36px;
width: 100%;
background: rgba(0, 0, 0, 0) linear-gradient(rgb(66, 130, 214) 0%, rgb(59, 133, 224) 3%, rgb(65, 138, 227) 5%, rgb(65, 138, 227) 17%, rgb(60, 135, 226) 21%, rgb(55, 134, 228) 26%, rgb(52, 130, 227) 29%, rgb(46, 126, 225) 39%, rgb(35, 116, 223) 49%, rgb(32, 114, 219) 57%, rgb(25, 110, 219) 62%, rgb(23, 107, 216) 72%, rgb(20, 104, 213) 75%, rgb(17, 101, 210) 83%, rgb(15, 97, 203) 88%) repeat scroll 0% 0%;
}

#start_footer .footer_item {
  padding: 3px;
  display: flex;
  margin-right: 10px;
  -moz-box-align: center;
  align-items: center;
}
.footer_item__img {
  border-radius: 3px;
  margin-right: 2px;
  width: 22px;
  height: 22px;
}
.footer_item:hover {
  background-color: rgba(60, 80, 210, 0.5);
}
</style>