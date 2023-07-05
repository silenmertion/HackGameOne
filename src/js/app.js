const loaderBtn = document.querySelector("#loader-btn");

loaderBtn.addEventListener("click", () => {
  document.querySelector(".loader").classList.add("none");
});

// Dialog

function setText(name, stateText, content) {
  const dialogState = document.querySelector(".dialog-state");
  const dialogName = document.querySelector(".dialog-name");
  const dialogContent = document.querySelector(".dialog-content");

  dialogName.innerHTML = name;
  dialogState.innerHTML = stateText;
  dialogContent.innerHTML = content;
}

const btnOne = document.querySelector(".button-one");
const btnTwo = document.querySelector(".button-two");
const btnThree = document.querySelector(".button-three");
const btnFour = document.querySelector(".button-four");
const btnFive = document.querySelector(".button-five");
const btnSix = document.querySelector(".button-six");
const btnSeven = document.querySelector(".button-seven");
const btnEight = document.querySelector(".button-eight");
const btnNine = document.querySelector(".button-nine");
const testWrapper = document.querySelector(".test-wrapper");
const psyhoBtn = document.querySelector(".counterPsyho");

// Первая Кнопка
btnOne.addEventListener("click", () => {
  setText(
    "Хади",
    "Состояние: Заебалась конкретно",
    "Да могу. Вообщем слушай. (Начала записывать 3 часовое Гс).<br> Скинула. Ты понял?"
  );

  btnOne.classList.add("none");
  btnTwo.classList.add("block");
});

// Вторая кнопка

btnTwo.addEventListener("click", () => {
  setText(
    "Имран",
    "Состояние: Нервничает",
    "Да спасибо что обьяснила. Хорошо что на этот раз    нас 5, а не как в прошлый раз 2 человека на всю команду. Мы же из-за этого тогда проиграли. Надеюсь теперь мы доберемся хотя бы до 2-го этапа."
  );

  btnTwo.classList.add("none");
  btnThree.classList.add("block");
});

// Третья  кнопка

btnThree.addEventListener("click", () => {
  setText(
    "Хади",
    "Состояние: Немного злая",
    "Не переживай. На этот раз мы пройдем."
  );

  btnThree.classList.add("none");
  btnFour.classList.add("block");
});

// Четвертая  кнопка

btnFour.addEventListener("click", () => {
  setText("Имран", "Состояние: Очень сильно нервничает", "Наедюсь.");

  btnFour.classList.add("none");
  btnFive.classList.add("block");
  testWrapper.classList.add("flex");
});

// Пятая  кнопка

btnFive.addEventListener("click", () => {
  setText(
    "Хади",
    "Состояние: За###ь разговаривать",
    "Я думаю нет смысла мусолить одну и ту же тему. Удачи"
  );

  btnFive.classList.add("none");
  btnSix.classList.add("block");
  testWrapper.classList.add("none");
});

// Шестая  кнопка

btnSix.addEventListener("click", () => {
  setText("Имран", "Состояние: За###ся разговаривать", "И тебе");

  btnSix.classList.add("none");
  btnSeven.classList.add("block");
});

// Седьмая  кнопка

btnSeven.addEventListener("click", () => {
  document.querySelector(".dialog").classList.add("none");

  btnSeven.classList.add("none");
  document.querySelector(".wrapper").classList.add("flex");
});

// Psyho Btn
let counter = 0;

psyhoBtn.addEventListener("click", () => {
  counter += 1;

  if (counter == 10) {
    psyhoBtn.classList.add("none");
    changeUrl();
    console.log(
      "Пароль от следующей главы: Код Будущего. Дай команде Winx выиграть!;"
    );
  }
});

function changeUrl() {
  let url = window.location.href;

  const hashtag = "#воин+зайди+в+консоль";

  window.location.href = url + hashtag;
}

const form = document.querySelector("form");
const input = document.querySelector("#input");
const btn = document.querySelector("#btnGame");
const wrapper = document.querySelector(".wrapper");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nextWrapper = document.querySelector(".next-wrap");

  if (input.value.trim() === "Код Будущего. Дай команде Winx выиграть!") {
    wrapper.classList.add("none");
    nextWrapper.classList.add("flex");
  } else {
    alert("Ты серьезно хочешь пройти?");
  }
});
