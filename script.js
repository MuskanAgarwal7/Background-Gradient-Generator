let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let copyCode = document.querySelector(".copy-code");

const handleBtn1 = () => {
  let randomColor1 = `#${Math.random().toString(16).slice(2, 8)}`;

  btn1.innerText = randomColor1;
  btn1.style.backgroundColor = randomColor1;
  document.body.style.backgroundImage = `linear-gradient(
    to right,
    ${randomColor1},
    #444
    )`;
  copyCode.innerText = document.body.style.backgroundImage;
};

const handleBtn2 = () => {
  let randomColor2 = `#${Math.random().toString(16).slice(2, 8)}`;

  btn2.innerText = randomColor2;
  btn2.style.backgroundColor = randomColor2;
  document.body.style.backgroundImage = `linear-gradient(
    to right,
    #444,
    ${randomColor2}
    )`;
  copyCode.innerText = document.body.style.backgroundImage;
};

const gradient = () => {};

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
// copyCode.addEventListener()
