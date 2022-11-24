import Swal from "/Website/node_modules/sweetalert2/src/sweetalert2.js";


export function error() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="">Why do I have this issue?</a>',
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



