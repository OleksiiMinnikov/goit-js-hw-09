!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");function r(){var t=function(){for(var t="0123456789ABCDEF",e="#",n=0;n<6;n++)e+=t[Math.floor(16*Math.random())];return e}();document.body.style.backgroundColor=t}e.addEventListener("click",(function(){t=setInterval(r,1e3)})),n.addEventListener("click",(function(){clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.2fb0bf05.js.map
