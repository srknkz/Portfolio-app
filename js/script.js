// *Поочередная замена текста*

// Массив с фразами
const phrases = ["buy IT goods", "in dreams junior frontend developer", "football lover", "Arsenal FC"];

// Дотягиваюсь к фразе на странице
let phrase = document.querySelector(".phrase");

// Начальный индекс для перебора
let phrasesStart = 0;

// Длина массива
let phrasesCount = phrases.length - 1;

// сетИнтервал, в которой меняем через smoothly фразу каждые 2 секунды
setInterval( function () {
    smoothly(phrase, "textContent", phrases[phrasesStart]);
    // phrase.textContent = phrases[phrasesStart];
    if(phrasesStart == phrasesCount) {
        phrasesStart = 0;
    } else {
        phrasesStart++;
    };
}, 2000);

let num = 1.36666;
let fixedNum = Number(num.toFixed(2));

// *Плавный переход по секциям*

const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
// Для всех линков делаем эвентлистнер и навешиваем логику по клику
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const targetOffsetTop = targetSection.offsetTop;

    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth',
    });
  });
});

// *Плановное изменение фона на активной секции*

function setActiveSection() {
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const screenMiddle = scrollTop + (windowHeight / 2);

  sections.forEach((section) => {
    const offsetTop = section.offsetTop;
    const height = section.offsetHeight;

    if (screenMiddle >= offsetTop && screenMiddle < offsetTop + height) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', setActiveSection);

// *Появление / скрытие кнопки "наверх"*

const btnUp = document.querySelector('.btn-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    btnUp.style.display = 'block';
  } else {
    btnUp.style.display = 'none';
  }
});

// *Скролл наверх при нажатии на кнопку*

btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// *Загрузка резюме по нажатию на кнопку*

// Дотягиваемся до кнопки
const downloadBtn = document.getElementById('cv');
// Слушатель на кнопке при клике вызывает функцию
downloadBtn.addEventListener('click', () => {
  // Создаем элемент anchor
  const link = document.createElement('a');
  // Указываем href для anchor'a
  link.href = '../files/Profile.pdf';
  // Загрузка файла
  link.download = 'Profile.pdf';
  // appendChild добавляет в конце кнопки #cv элемент link
  document.body.appendChild(link);
  // Вызываем клик по кнопке
  link.click();
  // Удаляем элемент
  document.body.removeChild(link);
})