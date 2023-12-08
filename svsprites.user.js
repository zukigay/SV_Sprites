// ==UserScript==
// @name         zuki's extra sv models for showdown script
// @version      1.1
// @description  a
// @match        https://replay.pokemonshowdown.com/*
// @match        https://play.pokemonshowdown.com/*
// @grant        none
// @author       zuki (https://github.com/zooki2006)
// @namespace    https://github.com/zooki2006/SV_Sprites
// @supportURL   https://github.com/zooki2006/SV_Sprites
// ==/UserScript==


var interval = 0.3;
const excudedmons = []
const userexcudemons = ["terapagos", "terapagostera", "ironcrown","MissingNo","ragingbolt","archaludon","sinistcha","sinistcha-masterpiece","ogerpon-wellspring","ogerpon-wellspringtera.png","ogerpon-tealtera","ogerpon","ogerpon-cornerstone","ogerpon-cornerstonetera","ogerpon-hearthflame","ogerpon-hearthflametera","ursaluna","ursaluna-bloodmoon","enamorus","enamorus-therian","ababo","scattervein","hemogoblin","cresceidon","goodra-hisui"]

for (let i = 0; i < userexcudemons.length; i++) {
  excudedmons.push("https://play.pokemonshowdown.com/sprites/gen5/" + userexcudemons[i] + ".png");
  excudedmons.push("https://play.pokemonshowdown.com/sprites/gen5-shiny/" + userexcudemons[i] + ".png");
}

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

