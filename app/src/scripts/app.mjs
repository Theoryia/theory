import { prepareListeners } from "./prepareListeners.mjs"
import { mainPageRequisits } from "./mainPage.mjs";
import { onLoadWindowSize } from  "./mainPage.mjs";
function init() {

    console.log(`initialising`);
    prepareListeners();
    mainPageRequisits();
    onLoadWindowSize();
    
}

window.addEventListener('load', init())