
const currencySelect = document.querySelector(".currency-select");
const inputCurrency = document.querySelector(".input-currency");

    async function convertValues(){
        
        const inputCurrencyValue = document.querySelector(".input-currency").value;
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
        const currencyValueconverted = document.querySelector(".currency-value");

         const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL").then(response => response.json());
         const dolarToday = data.USDBRL.high;
         const euroToday = data.EURBRL.high;
         const libraToday = data.GBPBRL.high;

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);

        if(currencySelect.value === "Dolar"){
             currencyValueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
         }).format(inputCurrencyValue / dolarToday);
        }

        if(currencySelect.value === "Euro"){
             currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
         }).format(inputCurrencyValue / euroToday);
      }

         if(currencySelect.value === "Libra"){
             currencyValueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
         }).format(inputCurrencyValue / libraToday);
      }
 }




function changeCurrency(){
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

    if(currencySelect.value === "Dolar"){
        currencyName.innerHTML = "Dolar";
         currencyImg.src = "./assets/estados-unidos.png";
    }

      if(currencySelect.value === "Euro"){
         currencyName.innerHTML = "Euro";
         currencyImg.src = "./assets/euro.png";
      }

      if(currencySelect.value === "Libra"){
         currencyName.innerHTML = "Libra";
         currencyImg.src = "./assets/Libra.png";
      }

      convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
inputCurrency.addEventListener("input", convertValues);