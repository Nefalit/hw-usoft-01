const clearLogBtn = document.querySelector('[data-action="clear"]');
const logList = document.querySelector(".log-list");
const bodyAll = document.querySelector("body");
const h1Massage = document.querySelector(".hi_massage");
let keypressCounter = 1;

document.addEventListener("keydown", logMessage);
document.addEventListener("keydown", changeBg);
clearLogBtn.addEventListener("click", reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML("afterbegin", markup);

  if (type === "keydown") {
    incrementKeypressCounter();
  }
}
function changeBg(event) {
  if (event.ctrlKey && event.code === "KeyY") {
    bodyAll.style.backgroundColor = "rgb(153, 225, 120)";
    h1Massage.style.color = "rgb(228, 224, 3)";
    h1Massage.textContent = "Героям Слава!!!";
  } else if (event.ctrlKey && event.code === "KeyB") {
    bodyAll.style.backgroundColor = "rgb(241, 183, 132)";
    h1Massage.style.color = "cornflowerblue";
    h1Massage.textContent = "Слава Україні!!!";
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = "";
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}
