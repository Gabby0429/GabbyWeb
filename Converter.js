document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("convertBtn").addEventListener("click", convertTemperature);

    document.getElementById("clearBtn").addEventListener("click", clearValues);

    document.getElementById("ConvertBtn").addEventListener("click", convert);

    document.getElementById("ClearBtn").addEventListener("click", clearValues);

    
    clearValues();
});

function convertTemperature() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);

    if (!isNaN(celsius)) {
        document.getElementById("fahrenheitInput").value = (celsius * 9/5) + 32;
    } else if (!isNaN(fahrenheit)) {
        document.getElementById("celsiusInput").value = (fahrenheit - 32) * 5/9;
    }
}

function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var unit = document.getElementById("unit").value;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    if (unit === "meter") {
        var feetValue = inputValue * 3.28084;
        document.getElementById("result").innerHTML = inputValue + " meters is equal to " + feetValue.toFixed(2) + " feet.";
    } else {
        var meterValue = inputValue * 0.3048;
        document.getElementById("result").innerHTML = inputValue + " feet is equal to " + meterValue.toFixed(2) + " meters.";
    }
}

function clearValues() {
    document.getElementById("inputValue").value = "";
    document.getElementById("result").innerHTML = ""; 
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
    
}



