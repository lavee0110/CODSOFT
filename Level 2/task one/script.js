
let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = '';


for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('button text is', buttonText);
        if(buttonText == '*'){
            screenValue += buttonText;
            display.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            display.value = screenValue;
        }
        else if(buttonText == '='){
            display.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            display.value = screenValue;
        }
    })
}




// function addToDisplay(value) {
//     const display = document.getElementById('display');
//     display.textContent += value;
// }

// function clearDisplay() {
//     const display = document.getElementById('display');
//     display.textContext = '';
// }

// let string = "";
// let buttons = document.querySelectorAll('.button');
//  Array.from(buttons).forEach((button) => {
//     if(e.target.innerHTML == '='){
//         string = eval(string);
//         document.querySelector('display').value = string;
//     }
//     else {
//         console.log(e.target)
//         string = string + e.target.innerHTML;
//         document.querySelector('display').value = string;
//     }

//  }) 
// let display = document.getElementById('display');

// function addToDisplay(value) {
//   display.value += value;
// }

// function clearDisplay() {
//   display.value = '';
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = 'Error';
//   }
// }
// Selecting elements

