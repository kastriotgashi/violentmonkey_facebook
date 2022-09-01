// ==UserScript==
// @name        Copy Faceboook User Name on Click
// @namespace   Facebook
// @match       https://violentmonkey.github.io/guide/creating-a-userscript/
// @match           https://facebook.com/*
// @match           https://*.facebook.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 8/31/2022, 10:49:53 AM
// ==/UserScript==

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;   
    
    navigator.clipboard.writeText(text)
}, false);