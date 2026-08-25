const convertbutton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

    function convertValues(){
        
        const inputCurrencyValue = document.querySelector(".input-currency").value;
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
        const currencyValueconverted = document.querySelector(".currency-value");

        const dolarToday = 5.2;
        const euroToday = 7.2; 
        const libraToday = 8.2;

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
convertbutton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);