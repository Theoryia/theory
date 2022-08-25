import { queryTitleSize } from "./client/mainPage.mjs";

export function prepareListeners(){
    const dropdown = 
    window.addEventListener('resize', queryTitleSize);
    
}


