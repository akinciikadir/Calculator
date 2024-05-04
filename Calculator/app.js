const display = document.getElementById("display");

function appendToDisplay(input){

    display.value += input;

}

function clearDisplay(){
    display.value="";
}

function deleteToDisplay(){
     
    display.value = display.value.slice(0, -1);

}

function calculate(){

    display.value=eval(display.value);

}