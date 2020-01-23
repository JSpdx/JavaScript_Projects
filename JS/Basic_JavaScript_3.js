

//Math assignment: step 69

function twelveByFour() {
    var answer = 12/4;
    document.getElementById("math").innerHTML = "12 / 4 = "  + answer;
}

//Subtraction assignment: step 71

function subtract() {
    var answer = 2923479823459 - 30234792347;
    document.getElementById('subtract').innerHTML = "2923479823459 - 30234792347 = " + answer; 
}

//mult and div: Step 73

function multiply() {
    var answer = 234 * 74592374;
    document.getElementById('multiply').innerHTML = answer;
}

function divide() {
    var answer = 2.343 / 5.62220011;
    document.getElementById('divide').innerHTML = answer;
}

// multiple operations: Step 75
function trianglearea(a,b) {
    var answer = (a*b)/2
    document.getElementById('tri').innerHTML = "If the base of a triangle is 5 and the height is 8, then the area = " + answer;
}

//modulus assignment: Step 77
function modulus() {
    var answer = 30.222 % 12.4;
    document.getElementById('modulus').innerHTML = answer;
}

//negation assignment: Step 79
function negative() {
    var x = 34;
    document.getElementById('negative').innerHTML = "This number\'s negative: " + -x;
}

// increment decrement assignment: Step 81

function increment_decrement() {
    var x = 3, y = 4;
    x++, y--;
    document.getElementById('inc').innerHTML = "Now x= "+x + " and y = " + y;
}

//random number assignment: Step 83
// Nothing on the .js page for this assignment

//Math object method assignment: Step 84
function max(a,b,c,d) {
    x = Math.max(a,b,c,d);
    document.getElementById('max').innerHTML = x;
}

