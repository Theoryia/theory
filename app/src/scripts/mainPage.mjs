// import { query } from "express";
let title = document.querySelector('.title')
let isLess;
let width;

export function mainPageRequisits(){
    //getStartWidth();
}

export function buttonClick(para){
    const button = document.querySelector('#submitButton')
    button.style.background = "#222629"
    button.style.color = "#61892f"
    button.style.border = "thin solid #61892f"
    
    setTimeout(() => {
        button.style.color = "black"
        button.style.border = "0px solid white" 
        button.style.background = "#61892f"
        
        
        }, 100)
}   

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    return;
  }

  function queryPage(condition){ 
    const url = window.location.toString();
    console.log(url)
    console.log(url.includes("index"))
        if (url.includes("index") == true){
            console.log("index")
            changeHomeTitle(condition) //TODO change name of file
        }else if (url.includes("contact") == true) {
            console.log("contact")
            changeContactTitle(condition)
        }
    }

export function onLoadWindowSize(){
    document.querySelector('title');
    width = window.innerWidth;
    if (width <= 1100 && isLess != true){
        queryPage("setShrink")  
    }else{
        title.style.color="#61892F"
    }
}

export function queryTitleSize() {
    document.querySelector('title');
    width = window.innerWidth;
    if (width <= 1100 && isLess != true){ //TODO on refresh a bug occurs where it will regen and shrink (add && clause to see if already small?)
        console.log("change less");
        isLess = true;
        console.log(isLess);
        closeNav()
        queryPage("shrink")
//screen size check,
    } else if (width > 1100 && isLess != false) {
        console.log(`${isLess} prev`)
        console.log("change more");
        isLess = false;
        console.log(isLess);
        closeNav();
        queryPage("regen")
    } else {
        return;
    }
    
}

function changeHomeTitle(condition){
    if(condition == "shrink"){
        setTimeout(() => {title.textContent = "tHeo kindeR"}, 100)
        setTimeout(() => {title.textContent = "tHeo kinde_"}, 200)
        setTimeout(() => {title.textContent = "tHe_ kinde"}, 300)
        setTimeout(() => {title.textContent = "tHe kind_"}, 400)
        setTimeout(() => {title.textContent = "tHe kind"}, 500)
        setTimeout(() => {title.textContent = "tH_ kin_"}, 600)
        setTimeout(() => {title.textContent = "tH kin"}, 700)
        setTimeout(() => {title.textContent = "tH ki_"}, 800)
        setTimeout(() => {title.textContent = "t_ ki"}, 900)
        setTimeout(() => {title.textContent = "t k_"}, 1000)
        setTimeout(() => {title.textContent = "t k"}, 1100)
    }else if (condition == "regen"){
        setTimeout(() => {title.textContent = "t k"}, 100)
        setTimeout(() => {title.textContent = "t k_"}, 200)
        setTimeout(() => {title.textContent = "t_ ki"}, 300)
        setTimeout(() => {title.textContent = "tH ki_"}, 400)
        setTimeout(() => {title.textContent = "tH kin"}, 500)
        setTimeout(() => {title.textContent = "tH_ kin_"}, 600)
        setTimeout(() => {title.textContent = "tHe kind"}, 700)
        setTimeout(() => {title.textContent = "tHe kind_"}, 800)
        setTimeout(() => {title.textContent = "tHe_ kinde"}, 900)
        setTimeout(() => {title.textContent = "tHeo kinde_"}, 1000)
        setTimeout(() => {title.textContent = "tHeo kindeR"}, 1100)
    }else if (condition == "setRegen"){
        title.textContent = "tHeo kindeR"
    }else if (condition == "setShrink"){
        title.textContent = "t k"
        title.style.color="#61892F"
    }
    
}

function changeContactTitle(condition){
    if(condition == "shrink"){
        setTimeout(() => {title.textContent = "contAct Me"}, 0)
        setTimeout(() => {title.textContent = "cont_ct Me"}, 100)
        setTimeout(() => {title.textContent = "contct Me"}, 200)
        setTimeout(() => {title.textContent = "cont_t Me"}, 300)
        setTimeout(() => {title.textContent = "contt Me"}, 400)
        setTimeout(() => {title.textContent = "cont_ Me"}, 500)
        setTimeout(() => {title.textContent = "cont. Me"}, 600)

    }else if (condition == "regen"){
        setTimeout(() => {title.textContent = "cont. Me"}, 0)
        setTimeout(() => {title.textContent = "cont_ Me"}, 100)
        setTimeout(() => {title.textContent = "contt Me"}, 200)
        setTimeout(() => {title.textContent = "cont_t Me"}, 300)
        setTimeout(() => {title.textContent = "contct Me"}, 400)
        setTimeout(() => {title.textContent = "cont_ct Me"}, 500)
        setTimeout(() => {title.textContent = "contAct Me"}, 600)
    }else if (condition == "setRegen"){
        title.textContent = "contAct Me"
    }else if (condition == "setShrink"){
        title.textContent = "cont. Me"
        title.style.color="#61892F"
    }    
}


// function shrinkHomeTitle(){
//     let i;
//     console.log(title.textContent);
//     toArray(title.textContent);
//     console.log(arr)
//     while(arr.length>2){
//         for(i=0; i<arr.length; i++){
//             if(arr[i] == ' '){
//                 console.log(`space at ${i}`)
//                 console.log(`${arr} hmmmm?`)
//                 liquidateLetters(arr, i);
            
//         }
       
//     }
//  } // for(let j=0;j<2;j++){
        
//     // }     //setTimeout(() => {  }, 5000);
// }  

// function liquidateLetters(array, location){
//     if(location-1 != 't'){
//         array.splice(location-1,1,"_");
//         title.textContent = array.join("");
//         array.splice(location-1,1);
//         title.textContent = array.join("");
//         console.log("Changing");
//     }else{
//         console.log("Not Changing");
//     }
//     if(location-1 != 'k'){
//         array.splice(location-1,1,"_");
//         title.textContent = array.join("");
//         array.splice(location-1,1);
//         title.textContent = array.join("");
//     }else{

//     }
//     console.log(`new array ${array}`)
//     return array;
// }


// array.splice(location-1,1,"_");
// title.textContent = array.join("");
// array.splice(array.length-1,1,"_");
// title.textContent = array.join("");