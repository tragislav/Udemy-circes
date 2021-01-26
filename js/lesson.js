"use strict";

const p = document.querySelector('h3');
console.log(p);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/script.js");