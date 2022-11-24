import { contactHandles, contactListeners } from "./contactPrepareListeners.mjs"
import { init } from "./main.mjs"

export function contactInit(){
    // window.close('../app/index.html')
    // window.open('../app/contact.html')
    contactHandles()
    contactListeners()
    init()
    
    console.log(`contact`);
    
}



export function buttonClick(para){
    const button = document.querySelector('#submitButton')
    button.style.background = "#222629"
    button.style.color = "#61892f"
    button.style.border = "thin solid #61892f"
    error()
    setTimeout(() => {
        button.style.color = "black"
        button.style.border = "0px solid white" 
        button.style.background = "#61892f"
        
        
        }, 100)
}  



window.addEventListener('load', contactInit())