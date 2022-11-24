import Swal from "../../node_modules/sweetalert2/src/sweetalert2.js";

export function sendMail(){
  const emailParamenters = {
    name: document.getElementById("name").value , 
    email: document.getElementById("email").value ,
    message: document.getElementById("message").value,
  };

  if(emailParamenters.name == "" || emailParamenters.email == "" || emailParamenters.message == ""){
    errorInvalid("Empty Fields")
    return;
  }

  if(validateEmail(emailParamenters.email)==false){
    errorInvalid("Invalid Email")
    return;
  }

  

  
const SERVICE_ID = "service_we4kscj";
const TEMPLATE_ID = "template_btogbrf";
const PUBLIC_KEY = "8Wi2vzZLqF6hjQg2E";

emailjs.send(SERVICE_ID,TEMPLATE_ID,emailParamenters,PUBLIC_KEY)
.then(
  res =>{
    clearFields(success)
 })
 .catch((err) => error(err))
}



export function error(err) {
  const statusCode = err.status
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `Something went wrong! Error: ${(statusCode)}`,
  });
}

export function errorInvalid(reason) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: reason,
  });
}

export function success() {
  Swal.fire({
    icon: "success",
    title: "Message Sent",
    text: "Thank you for contacting me",
    timer: 2000
  });
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function clearFields(result){
    document.getElementById("name").value ="" 
    document.getElementById("email").value =""
    document.getElementById("message").value =""
    result();
}