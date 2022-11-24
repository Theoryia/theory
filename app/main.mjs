import { mainHandles } from "./mainPrepareListeners.mjs";
import { mainListeners } from "./mainPrepareListeners.mjs";
import { onLoadWindowSize } from "./mainPage.mjs";




export function init() {
  console.log(`home`);
  mainHandles()
  mainListeners()
  // mainPageRequisits();
  onLoadWindowSize();
}

window.addEventListener("load", init());

