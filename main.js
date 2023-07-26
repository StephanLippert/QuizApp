console.clear();

// Lightmode / Darkmode
// const htmlBody = document.querySelector('[data-js="body"]');
// const htmlMain = document.querySelectorAll("section");
// const darkButton = document.querySelector('[data-js="darkButton"]');
// const htmlCards = document.querySelectorAll('[data-js="card"]');

// Lightmode / Darkmode

// darkmodeToggleButton.addEventListener("click", () => {
//   console.log([darkButton]);
//   darkmodeToggleButton.firstElementChild.classList.toggle(
//     "flipDarkmodeSwitcher"
//   );
//   const htmlCollection = htmlBodyTag.children;
//   for (let item of htmlCollection) {
//     item.classList.toggle("lightmode");
//   }
//   [...htmlSections].forEach((section) => section.classList.toggle("lightmode"));
// });

let element = document.body;
element.classList.toggle("darkModeBody");
