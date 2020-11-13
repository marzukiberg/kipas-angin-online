const kipas = document.querySelector(".kipas");
const onOffText = document.querySelector(".on_off_wrapper > span");
const onOffButton = document.querySelector(".on_off");
const onOffCircle = document.querySelector(".on_off>.on_off_circle");
const levels = document.querySelectorAll("#level");

let state = {
  running: false,
  level: 1,
};

function updateState() {
  if (!state.running) {
    kipas.classList.remove(`level_${state.level}_animation`);
    onOffText.innerText = "Off";
    onOffButton.classList.remove("active");
    onOffCircle.classList.remove("active");
    return;
  }
  [1, 2, 3]
    .filter((x) => x !== state.level)
    .forEach((y) => {
      kipas.classList.remove(`level_${y}_animation`);
    });
  kipas.classList.add(`level_${state.level}_animation`);
  onOffText.innerText = "On";
  onOffButton.classList.add("active");
  onOffCircle.classList.add("active");
}

function toggleOnOff() {
  state.running = !state.running;
  updateState();
}

window.addEventListener("load", updateState);
onOffButton.addEventListener("click", toggleOnOff);
levels.forEach((item) => {
  item.addEventListener("click", (e) => {
    state.level = e.target.value;
    updateState();
  });
});
