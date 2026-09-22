// exchange rate api
const api = "https://api.exchangerate-api.com/v4/latest/USD";

const searchBox = document.querySelector(".searchBox");
const fromCurrency = document.querySelector(".from");
const toCurrency = document.querySelector(".to");
const convert = document.querySelector(".convert");
const reset = document.querySelector(".reset");
const finalAmount = document.querySelector("#finalAmount");
const finalValue = document.querySelector(".finalValue");
let resultFrom;
let resultTo;
let searchValue;

// async function dataCurrency() {
//   try {
//     let response = await fetch(`${api}`);
//     let data = await response.json();
//     console.log(data.rates);
//   } catch (err) {
//     console.log(err);
//   }
// }

// dataCurrency();

fromCurrency.addEventListener("change", (e) => {
  resultFrom = e.target.value;
});

toCurrency.addEventListener("change", (e) => {
  resultTo = e.target.value;
  console.log(resultTo);
});

searchBox.addEventListener("input", (e) => {
  searchValue = e.target.value;
});

convert.addEventListener("click", async (e) => {
  try {
    let response = await fetch(`${api}`);
    let currency = await response.json();
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.textContent = ((toRate/fromRate) *searchValue).toFixed(2);
  } catch (err) {
    console.log(err);
  }
});

reset.addEventListener("click", (e) => {
    window.location.reload();
    finalValue.textContent = "";
})