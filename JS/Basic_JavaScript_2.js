
//changing color with button assignmnet//
function turnRed() {
  var str = "Because they're red!! (I'm so sorry)"
  var strRed = str.fontcolor("red");
  document.getElementById("button").innerHTML = strRed;
} 

//Concatenating variable assignment//

function coolFunctionBro() {
    var sentence = "This sentence"
    sentence += " was made by"
    sentence += " concatenating strings"
    document.getElementById("concatenate").innerHTML = sentence;
}

//write my own function assignment//

function embiggen() {
    var str = "BIGGER TEXT"
    big = str.fontsize(22);
    document.getElementById("grow").innerHTML = big;


}
