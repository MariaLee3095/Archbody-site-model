document.body.appendChild(document.getElementById("burgerBtn"));
document.body.appendChild(document.getElementById("navMobile"));

const toggleBtn = document.querySelectorAll(".theme-toggle");

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add("dark");
}

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

const burgerBtn = document.getElementById("burgerBtn");
const navMobile = document.getElementById("navMobile");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  navMobile.classList.toggle("active");
});

navMobile.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    burgerBtn.classList.remove("active");
    navMobile.classList.remove("active");
  });
});

let heightInput = document.getElementById("heightInput");
let weightInput = document.getElementById("weightInput");
let calculateButton = document.getElementById("calculateButton");
let messageText = document.getElementById("messageText");
let bmiValue = document.getElementById("bmiValue");
let bmiCategory = document.getElementById("bmiCategory");
let bmiText = document.getElementById("bmiText");
let bmiImage = document.getElementById("bmiImage");
let recommendationText = document.getElementById("recommendationText");

function calculateBmi() {
  let height = Number(heightInput.value);
  let weight = Number(weightInput.value);
  messageText.textContent = "";

  if (isNaN(height) || height <= 0) {
    messageText.textContent = "Введите корректный рост.";
    return;
  }
  if (isNaN(weight) || weight <= 0) {
    messageText.textContent = "Введите корректный вес.";
    return;
  }
  let meter = height / 100;
  let bmi = weight / (meter * meter);

  let category = "";
  let text = "";
  let image = "";
  let rec = "";

  if (bmi < 16) {
    category = "Выраженный недостаток массы.";
    text = "ИМТ сильно ниже нормы.";
    image = "1_1.webp";
    rec =
      "Выраженный дефицит массы тела несет серьезные риски для здоровья и требует обязательного обращения к терапевту или эндокринологу. Необходимо пройти комплексное медицинское обследование, чтобы исключить скрытые заболевания и безопасно скорректировать рацион. Не пытайтесь резко увеличивать порции еды самостоятельно, так как это может перегрузить организм — восстановление должно проходить строго под контролем врача.";
  } else if (bmi < 18.5) {
    category = "Недостаток массы.";
    text = "ИМТ немного ниже нормы.";
    image = "2_2.webp";
    rec =
      "Недостаток массы тела может приводить к снижению иммунитета, постоянной усталости и хрупкости костей. Для выявления причин недовеса рекомендуется проконсультироваться с врачом и сдать базовые анализы. Набирать вес следует плавно, увеличивая калорийность рациона за счет полезных жиров, белков и дробного питания.";
  } else if (bmi < 25) {
    category = "Идеальная масса тела.";
    text = "ИМТ находится в пределах нормы.";
    image = "3_3.webp";
    rec =
      "У вас здоровое соотношение веса и роста, которое важно поддерживать для снижения риска хронических заболеваний. Главная задача — сохранять баланс за счет разнообразного питания, качественного сна и регулярной физической активности. Фокусируйтесь не на изменении цифр на весах, а на укреплении мышц и поддержании высокого уровня энергии.";
  } else if (bmi < 30) {
    category = "Избыточная масса.";
    text = "ИМТ выше нормы.";
    image = "4_4.webp";
    rec =
      "Из-за избыточной массы тела увеличивается нагрузка на суставы и повышается риск сердечно-сосудистых заболеваний. Для снижения веса необходим плавный и безопасный дефицит калорий за счет сокращения быстрых углеводов и добавления в рацион большего количества клетчатки и белка. Сочетайте правильное питание с регулярными аэробными и силовыми нагрузками, чтобы запустить процесс жиросжигания и укрепить мышцы.";
  } else {
    category = "Ожирение.";
    text = "ИМТ значительно выше нормы.";
    image = "5_5.webp";
    rec =
      "Существенно повышены риски развития сахарного диабета, гипертонии и других сердечно-сосудистых патологий. Не откладывайте визит к терапевту и эндокринологу для комплексного обследования организма и выявления гормональных или метаболических причин набора веса. Процесс снижения веса должен быть плавным и проходить под контролем специалистов, также необходимо мягко скорректировать рацион и подобрать безопасный комплекс физических упражнений без вреда для суставов и сердца.";
  }

  bmiValue.textContent = "ИМТ: " + bmi.toFixed(1);
  bmiCategory.textContent = category;
  bmiText.textContent = text;

  bmiImage.src = "img/" + image;
  recommendationText.textContent = rec;
  bmiImage.alt = category;
}
calculateButton.addEventListener("click", calculateBmi);

let images = ["img/1.webp", "img/2.webp", "img/3.webp", "img/4.webp"];
let captions = [
  "Соблюдайте режим дня",
  "Не забывайте о физических упражнениях",
  "Обратите внимание на рацион",
  "Добавьте пешие прогулки",
];
let counter = [
  "Правильный режим дня держится на стабильном времени подъема и отказе от гаджетов за час до сна. Постарайтесь просыпаться в одно и то же время даже в выходные — это настроит ваши внутренние биологические часы, сделает засыпание легким, а утро — по-настоящему бодрым.",
  "Всего 10–15 минут разминки в день запустят метаболизм, прогонят сонливость и зарядят мозг энергией. Делайте легкую зарядку утром или пятиминутные перерывы на растяжку в течение дня, чтобы забыть про усталость и боль в спине!",
  "Основа правильного питания — это разнообразие, а не строгие запреты. Добавьте в каждый прием пищи больше овощей, зелени и белка, а также старайтесь меньше перекусывать на ходу, чтобы сохранить легкость и энергию до самого вечера!",
  "Прогуливайтесь каждый день по 30 минут, и работа вашего сердца нормализуется, лишние калории сгорят , а нервная система получит отличную разгрузку. Выходите на улицу в обеденный перерыв или перед сном, чтобы насытить организм кислородом и улучшить качество сна!",
];

let sliderImage = document.getElementById("sliderImage");
let slideCaption = document.getElementById("slideCaption");
let slideCounter = document.getElementById("slideCounter");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function showSlide() {
  sliderImage.src = images[currentIndex];
  sliderImage.alt = captions[currentIndex];

  slideCaption.textContent = captions[currentIndex];
  slideCounter.textContent = counter[currentIndex];
}
function showPreviousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showSlide();
}
function showNextSlide() {
  currentIndex++;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  showSlide();
}

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

let textEditor = document.getElementById("textEditor");

let leftButton = document.getElementById("leftButton");
let centerButton = document.getElementById("centerButton");
let rightButton = document.getElementById("rightButton");

let decreaseButton = document.getElementById("decreaseButton");
let increaseButton = document.getElementById("increaseButton");
let boldButton = document.getElementById("boldButton");
let clearButton = document.getElementById("clearButton");

let fontSizeValue = document.getElementById("fontSizeValue");
let messageText1 = document.getElementById("messageText1");

let fontFamilySelect = document.getElementById("fontFamilySelect");
let textColor = document.getElementById("textColor");
let backgroundColor = document.getElementById("backgroundColor");

let downloadButton = document.getElementById("downloadButton");

let fontSize = 18;
let isBold = false;

function alignLeft() {
  textEditor.style.textAlign = "left";
  messageText1.textContent = "Текст выровнен по левому краю";
  messageText1.style.color = "darkblue";
}
function alignCenter() {
  textEditor.style.textAlign = "center";
  messageText1.textContent = "Текст выровнен по центру";
  messageText1.style.color = "darkblue";
}
function alignRight() {
  textEditor.style.textAlign = "right";
  messageText1.textContent = "Текст выровнен по правому краю";
  messageText1.style.color = "darkblue";
}

function decreaseFontSize() {
  if (fontSize > 14) {
    fontSize -= 2;
    textEditor.style.fontSize = fontSize + "px";
    fontSizeValue.textContent = fontSize + "px";
    messageText1.textContent = "Размер шрифта уменьшен";
    messageText1.style.color = "darkblue";
  } else {
    messageText1.textContent = "Размер шрифта уже минимальный";
    messageText1.style.color = "red";
  }
}
function increaseFontSize() {
  if (fontSize < 32) {
    fontSize += 2;
    textEditor.style.fontSize = fontSize + "px";
    fontSizeValue.textContent = fontSize + "px";
    messageText1.textContent = "Размер шрифта увеличен";
    messageText1.style.color = "darkblue";
  } else {
    messageText1.textContent = "Размер шрифта уже максимальный";
    messageText1.style.color = "red";
  }
}
function toggleBold() {
  if (isBold == false) {
    textEditor.style.fontWeight = "bold";
    isBold = true;
    messageText1.textContent = "Жирный стиль включён";
    messageText1.style.color = "darkblue";
  } else {
    textEditor.style.fontWeight = "normal";
    isBold = false;
    messageText1.textContent = "Жирный стиль выключен";
    messageText1.style.color = "darkblue";
  }
}
function clearText() {
  textEditor.textContent = "";
  messageText1.textContent = "Текст очищен";
  messageText1.style.color = "darkblue";
}

function changeFontFamily() {
  let selectedFont = fontFamilySelect.value;

  document.execCommand("fontName", false, selectedFont);
  messageText1.textContent = "Шрифт изменён";
  messageText1.style.color = "darkblue";
}

function changeTextColor() {
  let selectedColor = textColor.value;

  document.execCommand("foreColor", false, selectedColor);
  messageText1.textContent = "Цвет текста изменён";
  messageText1.style.color = "darkblue";
}
function changeBackgroundColor() {
  let selectedColor = backgroundColor.value;

  document.execCommand("backColor", false, selectedColor);
  messageText1.textContent = "Цвет фона изменён";
  messageText1.style.color = "darkblue";
}
function downloadText() {
  try {
    if (textEditor.innerText.trim() === "") {
      messageText1.textContent = "Нельзя скачать пустой дневник!";
      messageText1.style.color = "red";
      return;
    }

    let innerHTMLContent = textEditor.innerHTML;
    let currentTextAlign = textEditor.style.textAlign || "left";
    let currentFontWeight = textEditor.style.fontWeight || "normal";

    let currentFontSizePt = fontSize + "pt";

    let htmlString = `
       <!DOCTYPE html>
      <html lang="ru">
      <head>
          <meta charset="utf-8">
          <title>Мой ЗОЖ-Дневник</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  line-height: 1.5;
                  color: #333333;
              }
          </style>
      </head>
      <body>
          <div style="font-size: ${currentFontSizePt}; text-align: ${currentTextAlign}; font-weight: ${currentFontWeight};">
              ${innerHTMLContent}
          </div>
      </body>
      </html>
    `;

    let mhtmlContent =
      "MIME-Version: 1.0\n" +
      'Content-Type: text/html; charset="utf-8"\n' +
      "Content-Transfer-Encoding: 7bit\n\n" +
      htmlString;

    let blob = new Blob([mhtmlContent], {
      type: "application/msword;charset=utf-8",
    });

    let link = document.createElement("a");
    link.download = "мой_дневник.doc";
    link.href = URL.createObjectURL(blob);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);
    messageText1.textContent = "Документ Word успешно скачан!";
  } catch (error) {
    messageText1.textContent = "Ошибка при скачивании: " + error.message;
    console.error(error);
  }
}

leftButton.addEventListener("click", alignLeft);
centerButton.addEventListener("click", alignCenter);
rightButton.addEventListener("click", alignRight);

decreaseButton.addEventListener("click", decreaseFontSize);
increaseButton.addEventListener("click", increaseFontSize);
boldButton.addEventListener("click", toggleBold);
clearButton.addEventListener("click", clearText);

fontFamilySelect.addEventListener("change", changeFontFamily);
textColor.addEventListener("input", changeTextColor);
backgroundColor.addEventListener("input", changeBackgroundColor);

downloadButton.addEventListener("click", downloadText);

const $ = (id) => document.getElementById(id);

const photoImage = $("photoImage");
const imageLoader = $("imageLoader");
const undoBtn = $("undoBtn");
const redoBtn = $("redoBtn");
const resetFiltersBtn = $("resetFiltersBtn");
const posterPreviewContainer = $("posterPreviewContainer");
const downloadPosterBtn = $("downloadPosterBtn");

const textInput = $("textInput");
const textOverlay = $("textOverlay");
const textFontSelect = $("textFontSelect");
const textColorInput = $("textColorInput");
const textSizeInput = $("textSizeInput");
const textSizeValue = $("textSizeValue");
const textOpacityInput = $("textOpacityInput");
const textOpacityValue = $("textOpacityValue");
const toggleTextOrientationBtn = $("toggleTextOrientationBtn");

const filterIds = [
  "brightness",
  "contrast",
  "blur",
  "saturation",
  "sepia",
  "hue",
  "invert",
  "noir",
  "thermal",
];

const filters = Object.fromEntries(
  filterIds.map((id) => [id, $(`${id}Input`)]),
);

const values = Object.fromEntries(filterIds.map((id) => [id, $(`${id}Value`)]));

let isVerticalText = false;
let isUserImageLoaded = false;
let isDragging = false;
let textXPercent = 50;
let textYPercent = 50;
let filterHistory = [];
let redoHistory = [];

const defaultWidth = photoImage.clientWidth;
const defaultHeight = photoImage.clientHeight;

const getState = () => filterIds.map((id) => filters[id].value);

const setState = (state) => {
  if (!state) return;

  filterIds.forEach((id, i) => {
    filters[id].value = state[i];
  });

  applyFilters();
};

function setButtonState(button, enabled) {
  button.disabled = !enabled;
  button.style.cursor = enabled ? "pointer" : "not-allowed";
  button.style.opacity = enabled ? "1" : "0.5";
}

function checkControlsActivity() {
  const hasFilterChanges = getState().some(
    (value, i) =>
      value !== ["100", "100", "0", "100", "0", "0", "0", "0", "0"][i],
  );

  const hasText = textInput.value.trim() !== "";
  const changed = hasFilterChanges || hasText;

  setButtonState(resetFiltersBtn, changed);
  setButtonState(downloadPosterBtn, isUserImageLoaded && changed);
  setButtonState(undoBtn, filterHistory.length > 0);
  setButtonState(redoBtn, redoHistory.length > 0);
}

function applyFilters() {
  const brightness = +filters.brightness.value;
  const contrast = +filters.contrast.value;
  const blur = +filters.blur.value;
  const saturation = +filters.saturation.value;
  const sepia = +filters.sepia.value;
  const hue = +filters.hue.value;
  const invert = +filters.invert.value;
  const noir = +filters.noir.value;
  const thermal = +filters.thermal.value;

  values.brightness.textContent = `${brightness}%`;
  values.contrast.textContent = `${contrast}%`;
  values.blur.textContent = `${blur}px`;
  values.saturation.textContent = `${saturation}%`;
  values.sepia.textContent = `${sepia}%`;
  values.hue.textContent = `${hue}deg`;
  values.invert.textContent = `${invert}%`;
  values.noir.textContent = `${noir}%`;
  values.thermal.textContent = `${thermal}%`;

  photoImage.style.filter = [
    `brightness(${brightness - noir * 0.2}%)`,
    `contrast(${contrast + noir * 0.8}%)`,
    `blur(${blur}px)`,
    `saturate(${saturation + thermal * 1.5}%)`,
    `sepia(${sepia}%)`,
    `hue-rotate(${hue + thermal * 1.8}deg)`,
    `invert(${invert}%)`,
    `grayscale(${noir}%)`,
  ].join(" ");

  checkControlsActivity();
}

function updateText() {
  textOverlay.textContent = textInput.value;
  textOverlay.style.color = textColorInput.value;
  textOverlay.style.fontSize = `${textSizeInput.value}px`;
  textOverlay.style.fontFamily = textFontSelect.value;
  textOverlay.style.opacity = textOpacityInput.value / 100;

  textSizeValue.textContent = `${textSizeInput.value}px`;
  textOpacityValue.textContent = `${textOpacityInput.value}%`;

  textOverlay.style.left = `${textXPercent}%`;
  textOverlay.style.top = `${textYPercent}%`;
  textOverlay.style.writingMode = isVerticalText
    ? "vertical-rl"
    : "horizontal-tb";
  textOverlay.style.textOrientation = isVerticalText ? "upright" : "mixed";
  textOverlay.style.transform = "translate(-50%, -50%)";

  toggleTextOrientationBtn.textContent = isVerticalText
    ? "Исходное положение"
    : "Вертикальный текст";

  checkControlsActivity();
}

function saveHistoryState() {
  const state = getState();

  if (
    filterHistory.length &&
    JSON.stringify(filterHistory.at(-1)) === JSON.stringify(state)
  ) {
    return;
  }

  filterHistory.push(state);
  redoHistory = [];

  updateHistoryButtons();
}

function undoAction() {
  if (!filterHistory.length) return;

  const currentState = getState();

  redoHistory.push(currentState);
  filterHistory.pop();

  const previousState = filterHistory.at(-1);

  setState(
    previousState || ["100", "100", "0", "100", "0", "0", "0", "0", "0"],
  );

  updateHistoryButtons();
}

function redoAction() {
  if (!redoHistory.length) return;

  const currentState = getState();

  filterHistory.push(currentState);

  const nextState = redoHistory.pop();

  setState(nextState);

  updateHistoryButtons();
}

function resetFilters() {
  filterIds.forEach((id, i) => {
    filters[id].value = ["100", "100", "0", "100", "0", "0", "0", "0", "0"][i];
  });

  filterHistory = [];
  redoHistory = [];
  applyFilters();
  updateText();
  updateHistoryButtons();
}

function loadImage(file) {
  const reader = new FileReader();

  reader.onload = ({ target }) => {
    photoImage.src = target.result;
    photoImage.style.cssText = "";
    photoImage.style.width = "100%";
    photoImage.style.height = "100%";
    photoImage.style.objectFit = "cover";

    posterPreviewContainer.style.width = `${defaultWidth}px`;
    posterPreviewContainer.style.height = `${defaultHeight}px`;

    filterIds.forEach((id, i) => {
      filters[id].value = ["100", "100", "0", "100", "0", "0", "0", "0", "0"][
        i
      ];
    });

    isUserImageLoaded = true;
    filterHistory = [];
    redoHistory = [];

    applyFilters();
    updateText();
  };

  reader.readAsDataURL(file);
}

undoBtn.addEventListener("click", undoAction);
redoBtn.addEventListener("click", redoAction);

function downloadPoster() {
  if (!isUserImageLoaded) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = defaultWidth;
  canvas.height = defaultHeight;

  ctx.imageSmoothingEnabled = true;
  ctx.filter = photoImage.style.filter || "none";

  const scale = Math.max(
    canvas.width / photoImage.naturalWidth,
    canvas.height / photoImage.naturalHeight,
  );

  const width = photoImage.naturalWidth * scale;
  const height = photoImage.naturalHeight * scale;

  ctx.drawImage(
    photoImage,
    (canvas.width - width) / 2,
    (canvas.height - height) / 2,
    width,
    height,
  );

  const text = textInput.value.trim();

  if (text) {
    ctx.save();

    const x = (textXPercent / 100) * canvas.width;
    const y = (textYPercent / 100) * canvas.height;
    const size = +textSizeInput.value;

    ctx.font = `bold ${size}px ${textFontSelect.value}`;
    ctx.fillStyle = textColorInput.value;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.globalAlpha = textOpacityInput.value / 100;

    ctx.shadowColor = "rgba(0,0,0,.8)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    if (isVerticalText) {
      const letters = [...text];
      const lineHeight = size * 1.1;
      const startY = y - ((letters.length - 1) * lineHeight) / 2;

      letters.forEach((letter, i) => {
        ctx.fillText(letter, x, startY + i * lineHeight);
      });
    } else {
      ctx.fillText(text, x, y);
    }

    ctx.restore();
  }

  const link = document.createElement("a");
  link.download = "my_poster.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

filterIds.forEach((id) => {
  filters[id].addEventListener("input", applyFilters);
  filters[id].addEventListener("change", saveHistoryState);
});

[
  textInput,
  textColorInput,
  textSizeInput,
  textOpacityInput,
  textFontSelect,
].forEach((input) => input.addEventListener("input", updateText));

textOverlay.addEventListener("mousedown", () => {
  isDragging = true;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const rect = posterPreviewContainer.getBoundingClientRect();

  textXPercent = Math.max(
    0,
    Math.min(100, ((e.clientX - rect.left) / rect.width) * 100),
  );

  textYPercent = Math.max(
    0,
    Math.min(100, ((e.clientY - rect.top) / rect.height) * 100),
  );

  updateText();
});

toggleTextOrientationBtn.addEventListener("click", () => {
  isVerticalText = !isVerticalText;
  updateText();
});

resetFiltersBtn.addEventListener("click", resetFilters);
undoBtn.addEventListener("click", undoAction);
downloadPosterBtn.addEventListener("click", downloadPoster);

imageLoader.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) loadImage(file);
});

applyFilters();
updateText();
checkControlsActivity();
