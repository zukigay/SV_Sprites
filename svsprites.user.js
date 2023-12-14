// ==UserScript==
// @name         zuki's extra sv models for showdown script
// @version      1.4
// @description  a
// @match        https://replay.pokemonshowdown.com/*
// @match        https://play.pokemonshowdown.com/*
// @grant        none
// @author       zuki (https://github.com/zooki2006)
// @namespace    https://github.com/zooki2006/SV_Sprites
// @supportURL   https://github.com/zooki2006/SV_Sprites
// @license         GPL-2.0
// ==/UserScript==


var interval = 0.3;
const includedmons = []
const cleanincludedmons = ["annihilape","annihilape-s","arboliva","arboliva-s","arctibax","arctibax-s","armarouge","armarouge-s","baxcalibur","baxcalibur-s","bellibolt","bellibolt-s","bombirdier","bombirdier-s","brambleghast","brambleghast-s","bramblin","bramblin-s","brutebonnet","brutebonnet-s","capsakid","capsakid-s","ceruledge","ceruledge-s","cetitan","cetitan-s","cetoddle","cetoddle-s","charcadet","charcadet-s","chienpao","chienpao-s","chiyu","chiyu-s","clodsire","clodsire-s","crocalor","crocalor-s","cyclizar","cyclizar-s","dachsbun","dachsbun-s","dolliv","dolliv-s","dondozo","dondozo-s","dudunsparce","dudunsparce-s","dudunsparce-threesegment","dudunsparce-threesegment-s","espathra","espathra-s","farigiraf","farigiraf-s","fidough","fidough-s","files","finizen","finizen-s","flamigo","flamigo-s","flittle","flittle-s","floragato","floragato-s","fluttermane","fluttermane-s","frigibax","frigibax-s","fuecoco","fuecoco-s","garganacl","garganacl-s","gholdengo","gholdengo-s","gimmighoul","gimmighoul-roaming","gimmighoul-roaming-s","gimmighoul-s","glimmet","glimmet-s","glimmora","glimmora-s","grafaiai","grafaiai-s","greattusk","greattusk-s","greavard","greavard-s","houndstone","houndstone-s","ironbundle","ironbundle-s","ironhands","ironhands-s","ironjugulis","ironjugulis-s","ironleaves","ironleaves-s","ironmoth","ironmoth-s","ironthorns","ironthorns-s","irontreads","irontreads-s","ironvaliant","ironvaliant-s","kilowattrel","kilowattrel-s","kingambit","kingambit-s","klawf","klawf-s","koraidon","koraidon-s","lechonk","lechonk-s","lokix","lokix-s","mabosstiff","mabosstiff-s","maschiff","maschiff-s","maushold-four","maushold-four-s","maushold","maushold-s","meowscarada","meowscarada-s","miraidon","miraidon-s","nacli","nacli-s","naclstack","naclstack-s","new_spinner","nymble","nymble-s","oinkologne-f","oinkologne-f-s","oinkologne","oinkologne-s","orthworm","orthworm-s","palafin","palafin-hero","palafin-hero-s","palafin-s","pawmi","pawmi-s","pawmo","pawmo-s","pawmot","pawmot-s","quaquaval","quaquaval-s","quaxly","quaxly-s","quaxwell","quaxwell-s","rabsca","rabsca-s","rellor","rellor-s","revavroom","revavroom-s","roaringmoon","roaringmoon-s","sandyshocks","sandyshocks-s","scovillain","scovillain-s","screamtail","screamtail-s","shroodle","shroodle-s","skeledirge","skeledirge-s","slitherwing","slitherwing-s","smoliv","smoliv-s","spidops","spidops-s","sprigatito","sprigatito-s","squawkabilly-blue","squawkabilly-blue-s","squawkabilly","squawkabilly-s","squawkabilly-white","squawkabilly-white-s","squawkabilly-yellow","squawkabilly-yellow-s","tadbulb","tadbulb-s","tandemaus","tandemaus-s","tarountula","tarountula-s","tatsugiri-droopy","tatsugiri-droopy-s","tatsugiri","tatsugiri-s","tatsugiri-stretchy","tatsugiri-stretchy-s","tauros-paldeaaqua","tauros-paldeaaqua-s","tauros-paldeablaze","tauros-paldeablaze-s","tauros-paldeacombat","tauros-paldeacombat-s","tinglu","tinglu-s","tinkatink","tinkatink-s","tinkaton","tinkaton-s","tinkatuff","tinkatuff-s","toedscool","toedscool-s","toedscruel","toedscruel-s","varoom","varoom-s","veluza","veluza-s","walkingwake","walkingwake-s","wattrel","wattrel-s","wiglett","wiglett-s","wo-chien","wo-chien-s","wooper-paldea","wooper-paldea-s","wugtrio","wugtrio-s"]


for (let i = 0; i < cleanincludedmons.length; i++) {
  includedmons.push("https://play.pokemonshowdown.com/sprites/gen5/" + cleanincludedmons[i] + ".png");
  includedmons.push("https://play.pokemonshowdown.com/sprites/gen5-shiny/" + cleanincludedmons[i] + ".png");
}

function imgReplace() {
    var images = document.getElementsByTagName('img'),
        len = images.length, img, i;
    for (i = 0; i < len; i += 1) {
        img = images[i];
        if (img.src.includes('https://play.pokemonshowdown.com/sprites/gen5') && !img.src.includes('-back') && !img.src.includes('substitute') && includedmons.includes(img.src))
        {
            img.src = img.src.replace('https://play.pokemonshowdown.com/sprites/gen5/', 'https://raw.githubusercontent.com//zooki2006/SV_Sprites/main/paddedmax/').replace('.png', '.gif');
            img.src = img.src.replace('https://play.pokemonshowdown.com/sprites/gen5-shiny/', 'https://raw.githubusercontent.com//zooki2006/SV_Sprites/main/paddedmax/').replace('.png', '-s.gif');
      }
    }
}

setInterval(imgReplace, interval * 1000);

