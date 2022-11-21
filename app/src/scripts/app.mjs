
import { mainPageRequisits } from "./mainPage.mjs";
import { onLoadWindowSize } from  "./mainPage.mjs";
const el = {}

function init() {

    console.log(`initialising`);
    prepareHandles();
    prepareListeners();
    // mainPageRequisits();
    onLoadWindowSize();
    
}

import { queryTitleSize } from "./mainPage.mjs";
import { buttonClick } from "./mainPage.mjs";


function prepareHandles(){
    el.submitButton = document.querySelector("#submitButton");

}

function prepareListeners(){
    window.addEventListener('resize', queryTitleSize);
    el.submitButton.addEventListener('click', buttonClick);
    
}




window.addEventListener('load', init())