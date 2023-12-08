# SV_Sprites
This repo is for a showdown plugin/script for showdown which adds replacement models for missing gen 9 pokemon on showdown using gif's from https://drive.google.com/drive/folders/1hj-Wbkm6Qq3HPyqVu35BhID1zUQF93j4 credit to adamsb0303 for them.

here is the plugin in script form
```
// ==UserScript==
// @name         zuki's extra sv models for showdown script
// @version      1
// @description  a
// @match        https://replay.pokemonshowdown.com/*
// @match        https://play.pokemonshowdown.com/*
// @grant        none
// ==/UserScript==


var interval = 0.3;
//apend "https://play.pokemonshowdown.com/sprites/gen5/" to the name of the mon you want to exclude
const excudedmons = ["https://play.pokemonshowdown.com/sprites/gen5/terapagos.png","https://play.pokemonshowdown.com/sprites/gen5/ironcrown.png","https://play.pokemonshowdown.com/sprites/gen5/ragingbolt.png","https://play.pokemonshowdown.com/sprites/gen5/archaludon.png","https://play.pokemonshowdown.com/sprites/gen5/MissingNo.png", "https://play.pokemonshowdown.com/sprites/gen5/sinistcha.png", "https://play.pokemonshowdown.com/sprites/gen5/sinistcha-masterpiece.png", "https://play.pokemonshowdown.com/sprites/gen5/ogerpon-tealtera.png", "https://play.pokemonshowdown.com/sprites/gen5/ogerpon.png", "https://play.pokemonshowdown.com/sprites/gen5/ogerpon-cornerstone.png", "https://play.pokemonshowdown.com/sprites/gen5/ogerpon-cornerstonetera.png", "https://play.pokemonshowdown.com/sprites/gen5/ogerpon-wellspring.png", "https://play.pokemonshowdown.com/sprites/gen5/ogerpon-wellspringtera.png", "https://play.pokemonshowdown.com/sprites/gen5/ogerpon-hearthflame.png", "https://play.pokemonshowdown.com/sprites/gen5/ogerpon-hearthflametera.png"];

function imgReplace() {
    var images = document.getElementsByTagName('img'),
        len = images.length, img, i;
    for (i = 0; i < len; i += 1) {
        img = images[i];
        if (img.src.includes('https://play.pokemonshowdown.com/sprites/gen5') && !img.src.includes('-back') && !img.src.includes('substitute') && !excudedmons.includes(img.src))
        {
            img.src = img.src.replace('https://play.pokemonshowdown.com/sprites/gen5/', 'https://raw.githubusercontent.com//zooki2006/SV_Sprites/main/padded/').replace('.png', '.gif');
            img.src = img.src.replace('https://play.pokemonshowdown.com/sprites/gen5-shiny/', 'https://raw.githubusercontent.com//zooki2006/SV_Sprites/main/padded/').replace('.png', '-s.gif');
      }
    }
}

setInterval(imgReplace, interval * 1000);
```
