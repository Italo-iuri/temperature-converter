
// triggering onclick events and putting them into functions

document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

// Creating the functions that received the onclick event

function tempConvert(){
    var fahrenheit = document.getElementById('fahrenheit').value;
    var celsius = document.getElementById('celsius').value;

// Checking if the value is a number and applying the functions

    if(isNaN(fahrenheit) || isNaN(celsius)){
        window.alert('Por favor, digite um número!')
        return
    } else if (fahrenheit === ''){
        fahrenheit = (parseFloat(celsius)* 1.8) + 32;
    } else if (celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    }

// Turning the values into floats
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
}

// Function to clear the values

function clearForm(){
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
}



