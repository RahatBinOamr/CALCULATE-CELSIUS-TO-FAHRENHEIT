function calculate (){
    const inputField = document.getElementById('input-field')
    const celsiusTem = inputField.value;
    const fahrenheitTem = (celsiusTem * 9/5) + 32;
    const displayResult = document.getElementById('result')
    displayResult.innerHTML = `Your Temperature is ${fahrenheitTem}<span>&#176;</span> Fahrenheit `;
}