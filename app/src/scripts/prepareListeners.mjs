import { queryTitleSize } from "./mainPage.mjs";

export function prepareListeners(){
    const dropdown = 
    window.addEventListener('resize', queryTitleSize);
    
}


