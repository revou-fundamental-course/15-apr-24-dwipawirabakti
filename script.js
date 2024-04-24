function convertTemperature() {
  const inputTemperature = parseFloat(document.getElementById("num").value);

  const unit = document.getElementById("unit").value;
  console.log(unit);

  let convertedTemperature;

  if (unit == "Celcius") {
    // Convert to fahrenheit

    convertedTemperature = (inputTemperature * 9) / 5 + 32;
    console.log(convertedTemperature);
    document.getElementById(
      "result"
    ).textContent = `${inputTemperature} degrees Celcius = ${convertedTemperature} degrees fahrenheit.`;
  } else if (unit === "Fahrenheit") {
    // Convert to Celcius
    convertedTemperature = ((inputTemperature - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).textContent = `${inputTemperature} degreess  fahrenheit = ${convertedTemperature} degrees Celcius.`;
  } else {
    document.getElementById("result").textContent =
      "Please Select a valid unit.";
  }
}
