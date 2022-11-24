import { contactHandles, contactListeners } from "./contactPrepareListeners.mjs"
import { error, success} from "./email.mjs"
import { onLoadWindowSize } from "./mainPage.mjs"

export function contactInit(){
    
    contactHandles()
    contactListeners()
    onLoadWindowSize()
    console.log(`contact`);
    contactHandles()
    contactListeners()
}



export function buttonClick(para){
    const button = document.querySelector('#submitButton')
    button.style.background = "#222629"
    button.style.color = "#61892f"
    button.style.border = "thin solid #61892f"
    setTimeout(() => {success()}, 200)
    setTimeout(() => {
        button.style.color = "black"
        button.style.border = "0px solid white" 
        button.style.background = "#61892f"
        
        
        }, 50)
}  



window.addEventListener('load', contactInit())