// GMAIL
const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");
const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

// маленькие ошибки не видит
gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerHTML = " NOT OK";
    gmailResult.style.color = "red";
  }
};

// BLOCK

const block = document.querySelector(".child_block");
let position = 0;
const left = () => {
  if (position < 448) {
    position++;
    block.style.left = position + "px";
    requestAnimationFrame(left);
  }
};
left();
