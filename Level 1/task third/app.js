function convertTemperature() {
    // Get input value and selected unit
    let temperatureInput = document.getElementById("temperature").value.trim();
    let select = document.getElementById("select").value;
    
    // Validate input is a number
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }
    
    // Convert temperature
    let temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let resultSelect;
    
    if (select === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        resultSelect = "Fahrenheit";
    } else if (select === "fahrenheit") {
        convertedTemperature = (temperature - 32) * 5/9;
        resultSelect = "Celsius";
    }
    
    // Display result
    document.getElementById("results").innerHTML = `${temperature} ${select.charAt(0).toUpperCase() + select.slice(1)} is ${convertedTemperature.toFixed(2)} ${resultSelect}.`;
}