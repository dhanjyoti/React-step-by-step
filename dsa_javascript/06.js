// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Get user input for temperature and conversion type
  const temperature = parseFloat(prompt("Enter the temperature value:"));
  const conversionType = prompt("Convert to Fahrenheit (F) or Celsius (C)?").toUpperCase();

  if (conversionType === "F") {
    const fahrenheit = celsiusToFahrenheit(temperature);
    console.log(`${temperature}°C is equal to ${fahrenheit}°F`);
  } else if (conversionType === "C") {
    const celsius = fahrenheitToCelsius(temperature);
    console.log(`${temperature}°F is equal to ${celsius}°C`);
  } else {
    console.log("Invalid conversion type. Please enter 'F' or 'C'.");
  }