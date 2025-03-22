let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let copyCode = document.querySelector(".copy-code");

let color1 = "#5c91e5"; // Initial color
let color2 = "#983fc6"; // Initial color

const generateRandomColor = () => {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;
};

const updateGradient = () => {
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  copyCode.innerText = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
};

const handleBtn1 = () => {
  color1 = generateRandomColor();

  btn1.innerText = color1;
  btn1.style.backgroundColor = color1;
  updateGradient();
};

const handleBtn2 = () => {
  color2 = generateRandomColor();

  btn2.innerText = color2;
  btn2.style.backgroundColor = color2;
  updateGradient();
};

copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(copyCode.innerText);
  alert("Copied to clipboard! 🎉");
});

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
