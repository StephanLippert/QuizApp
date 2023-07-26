//Question-part
const questionElement = document.querySelector('[data-js="questionMessage"]');
const amountLeft = document.querySelector('[data-js="amountLeftQuestion"]');
const maxLength = questionElement.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

questionElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - questionElement.value.length);
});

//
//Answer-part
// const answerElement = document.querySelector('[data-js="questionMessage"]');
// const amountLeft = document.querySelector('[data-js="amountLeftQuestion"]');
// const maxLength = answerElement.getAttribute("maxlength");

// const updateAmountLeft = (value) => {
//   amountLeft.innerText = value;
// };

// updateAmountLeft(maxLength);

// questionElement.addEventListener("input", () => {
//   updateAmountLeft(maxLength - questionElement.value.length);
// });
