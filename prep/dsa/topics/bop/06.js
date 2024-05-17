//  6. Convert temperature from Celsius to Fahrenheit and vice versa, based on user input.

function celsiusToFahrenheit(celsius){
    return (celsius*9)/5 + 32;
}
function fahrenheitToCelsius(fahrenheit){
    ((fahrenheit-32)*5) / 9;
}

const temperature = parseFloat(prompt("Enter the temperature value: "));
const conversionType = prompt(
    "Convert to Fahrenheit(F) of Celsius(C) ? "
).toUpperCase();

if(conversionType === "F"){
    const fahrenheit = celsiusToFahrenheit(temperature);
    console.log(`${temperature}°C is equal to ${fahrenheit}°F`);
} else if (conversionType === "C"){
    const celsius = fahrenheitToCelsius(temperature);
    console.log(`${temperature}°F is equal to ${celsius}°C`);
} else {
    console.log("Invalid conversion type. Please enter 'F' or 'C'. ");
}