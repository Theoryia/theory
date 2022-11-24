import { queryTitleSize } from "./mainPage.mjs";
import { contactInit } from "./contact.mjs"

const mel = {};

export function mainHandles() {
  mel.submitButton = document.querySelector("#submitButton");
  mel.worklink = document.querySelector("#work");
  mel.contactlink = document.querySelector(".contactlink");
  mel.worklink = document.querySelector("#work");
}

export function mainListeners() {
  // mel.contactlink.addEventListener("click", contactInit)
  window.addEventListener("resize", queryTitleSize);
}