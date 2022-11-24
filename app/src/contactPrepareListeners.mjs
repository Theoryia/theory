import { queryTitleSize } from "./mainPage.mjs";
import { buttonClick } from "./contact.mjs";
const cel = {};

export function contactHandles() {
  cel.submitButton = document.querySelector("#submitButton");
  console.log(document.querySelector("#submitButton"));
}

export function contactListeners() {
  window.addEventListener("resize", queryTitleSize);
  cel.submitButton.addEventListener("click", buttonClick);
}
