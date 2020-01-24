
//alert()

// Step 93: typeof Assignent

function type2() {
  var x = typeof "Deckard";
  document.getElementById('type').innerHTML = x;
}

//Step 96 NaN
function willItBlend() {
    var x = 0/0;
    document.getElementById('nan').innerHTML = x;
}

function willItBlend2() {
    var x = isNaN ("five"), y = isNaN (5);
    document.getElementById('nan2').innerHTML = x + " | " + y;
}

//Step 99: infinity assignment
function inf() {
    var x = 3E340, y = -3E340;
    document.getElementById('inf').innerHTML = x + " | " + y;
}

//Step 101: Booleans
function bool() {
    var x = (34 > 23), y = (23>26);
    document.getElementById('bool').innerHTML = x + " | " + y;
}

//Step 103: console.log
function log() {
    console.log(23*3.111/(4%3)**3);
}

//Step 105: Type coercion
function coercion() {
    document.getElementById('coercion').innerHTML = (5 + "oh" + "3!!")
}

//Step 106: display false in the console
function console_bool() {
    console.log(true == false);
}

//Step 108: == operator
function is_equal() {
    document.getElementById('is_equal').innerHTML = (3 * 4 == 11);
}

function is_equal2() {
    document.getElementById('is_equal2').innerHTML = (3 * 4 == 12);
}

//Step 110: === operator
function compare() {
    document.getElementById('compare').innerHTML = ("99 bottles of beer" === "99 bottles of beer");
    document.getElementById('compare2').innerHTML = ("99 bottles of beer" === 98);
    document.getElementById('compare3').innerHTML = ("99 bottles of beer" === 99 + "bottles of beer");
    document.getElementById('compare4').innerHTML = ("99 bottles of beer" === "99 bottles of hopped cider");
}

//Step 112: AND/OR operators
function and_or() {
    document.getElementById('and_or').innerHTML = (3 + 3 == 6 && 3 * 4 == 12);
    document.getElementById('and_or2').innerHTML = (2 + 3 == 5 && 2 * 1 == 1);
    document.getElementById('and_or3').innerHTML = ("a" == "a" || "b"=="a");
    document.getElementById('and_or4').innerHTML = (3 > 6 || 5 > 14);
}

//Step 114: Not operator
function not() {
    document.getElementById('not').innerHTML = !(2+2 == 3) + " | " + !(2 + 2 == 4);
}