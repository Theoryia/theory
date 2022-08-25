import { prepareListeners } from "./src/prepareListeners.mjs"
import { mainPageRequisits } from "./mainPage.mjs";

function init() {

    console.log(`initialising`);
    prepareListeners();
    mainPageRequisits();
    
    
}

window.addEventListener('load', init())