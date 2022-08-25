let isLess;
let width;

export function mainPageRequisits(){
    //getStartWidth();
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

export function queryTitleSize() {
    document.querySelector('title');
    width = window.innerWidth;
    if (width <= 1100 && isLess != true){
        console.log("change less");
        isLess = true;
        console.log(isLess);
        shrinkTitle()
//screen size check,
    } else if (width > 1100 && isLess != false) {
        console.log(`${isLess} prev`)
        console.log("change more");
        isLess = false;
        console.log(isLess);
        closeNav();
        regenerateTitle();
    } else {
        return;
    }
    
}

let title = document.querySelector('#title')
function shrinkTitle(){
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
}

function regenerateTitle(){
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
}


// function shrinkTitle(){
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