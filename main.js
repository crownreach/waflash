if(/Mobi/i.test(window.navigator.userAgent)){function scrollToSubject(){try{window.scrollTo({top:100,left:0,behavior:"smooth"})}catch(e){}}scrollToSubject(),window.addEventListener("orientationchange",(function(){setTimeout(scrollToSubject,100)}))}else document.getElementById("canvas").focus();document.getElementById("canvas").addEventListener("keydown",(function(e){e.preventDefault(),e.stopPropagation()})),document.getElementById("canvas").addEventListener("click",(function(){document.getElementById("canvas").focus()})),document.addEventListener("mousedown",function(){const e=document.getElementById("canvas");let t=!1;return function(n){return n.target==e?t||(e.focus(),t=!0):t&&(t=!1),!0}}());import{createWaflash as e}from"https://cdn.jsdelivr.net/gh/crownreach/waflash@main/waflash-player.min.js";e(gameConfig.swfUrl,window.wafOptions||{});