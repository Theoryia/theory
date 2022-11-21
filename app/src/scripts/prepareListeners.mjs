import { queryTitleSize } from "./mainPage.mjs";
import { buttonClick } from "./mainPage.mjs";
const el = {}

export function prepareHandles(){
    el.submitButton = document.querySelector("#submitButton");

}

export function prepareListeners(){
    window.addEventListener('resize', queryTitleSize);
    el.submitButton.addEventListener('click', buttonClick(submitButton));
    
}


