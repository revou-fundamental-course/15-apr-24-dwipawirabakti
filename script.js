function convertTemperature() {
  const inputTemperature = parseFloat(document.getElementById("num").value);
  const unit = document.getElementById("unit").value;

  let convertedTemperature;

  if (unit == "celcius") {
    // Convert to fahrenheit

    convertedTemperature = (inputTemperature * 9) / 5 + 32;
    Document.getElementById("result").textContent =
      "${inputTemperature} degrees Celcius = ${convertedTemperature} degrees fahrenheit.";
  }
  else if(unit === 'Fahrenheit') {
    // Convert to Celcius
    convertedTemperature = (inputTemperature - 32 ) * 5/9;
    document.getElementById("result").textContent = "${inputTemperature} degreess  fahrenheit = ${convertedTemperature} degrees Celcius.";
  } else {
    document.getElementById("result").textContent = 'Please Select a valid unit.';
  }
  }
}
