const kipas = document.querySelector(".kipas");
const onOffText = document.querySelector(".on_off_wrapper > span");
const onOffButton = document.querySelector(".on_off");
const onOffCircle = document.querySelector(".on_off>.on_off_circle");
const levels = document.querySelectorAll(".level_circle");

let state = {
  running: false,
  level: 1,
};

const on = () => {
  if (kipas.classList.contains("stop")) {
    kipas.classList.remove("stop");
  }
  [1, 2, 3]
    .filter((x) => x !== state.level)
    .map((y) => kipas.classList.remove(`level_${y}_animation`));
  kipas.classList.add(`level_${state.level}_animation`);
  onOffText.innerText = "On";
  onOffButton.classList.add("active");
  onOffCircle.classList.add("active");
};

const off = () => {
  kipas.classList.add("stop");
  kipas.classList.remove(`state_${state.level}_animation`);
  onOffText.innerText = "Off";
  onOffButton.classList.remove("active");
  onOffCircle.classList.remove("active");
};

function toggleOnOff() {
  !state.running ? on() : off();
  state.running = !state.running;
}

onOffButton.addEventListener("click", toggleOnOff);
levels.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    state.level = e.target.value;
    [0, 1, 2]
      .filter((x) => x !== state.level)
      .map((y) => {
        levels[y].classList.remove("active");
      });
    levels[state.level - 1].classList.add("active");
    if (!state.running) return;
    on();
  });
});
levels[state.level - 1].classList.add("active");
