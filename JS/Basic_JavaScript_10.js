


//Step 174: While Loop
function Call_Loop() {
    var x = 99;
    var str = ''
    
    while (x > 0) {
        str += "<br>" + x +" bottles of beer on the wall, " + x +" bottles of beer, <br>" +"Take one down, pass it around, " + (x - 1) + " bottles of beer on the wall <br>";
        x--;
    }
    document.getElementById('Loop').innerHTML = str
}
        
//Step 175: String Length Property
function len() {
    var str = "You win some you lose some"
    document.getElementById('len').innerHTML = str.length
}

//Step 176: For Loop
function for_Loop() {
    var instruments = ['bass harmonica', 'contrabassoon', 'oboe', 'english horn', 'glockenspiel', 'arp 2600'],
        display = '',
        i;
    for (i = 0; i < instruments.length; i++) {
        display += instruments[i] +"<br><br>";
    } 
    document.getElementById('list_of_instruments').innerHTML = display
}

//Step 182: Arrays
function array_Function() {
    var numLst = [];
    numLst[0] = 123123;
    numLst[1] = 2.35423455;
    numLst[2] = 6.2342;
    numLst[3] = 234;
    document.getElementById('Array').innerHTML = numLst[2];
}

//Step 190: Constant keyword
function constant_function() {
    const pizza = {topping:'mushroom', sauce:'marinara', style:'deep dish', extra:'cheese'}
    document.getElementById('Constant').innerHTML = pizza.topping
}

//Step 192: let keyword
function letFunc() {
    var x = 23;
    { let x = 421
    document.getElementById('letfunc1').innerHTML = 'x = ' + x; 
        }
    document.getElementById('letFunc2').innerHTML = 'x = ' + x;
}

//Step 195: return statement
function returnFunc(x, y) {
    var z = x * y;
    return z
}
var xyz = returnFunc(32, 4.6)
document.getElementById('returnFunc').innerHTML = xyz;

//Step 197: Object with method

//creating the object.
let dice = {
    color: "clear turquoise",
    sides: 12,
    numberOfDice: 2,
    //creating a method
    roll : function() {
        var result = [];
        for (i = 0; i < dice.numberOfDice; i++) {
            result += Math.floor(Math.random() * dice.sides) + " &nbsp; &nbsp;  ";
        }
        return result;
    }
}

//function to call the method
function diceRoll() {
    document.getElementById('diceRoll').innerHTML = dice.roll();
}

//Step 199: Break and continue
function breakAndCont() {
    var display = '';
    for (i = 0; i < 20; i++) {
        if (i < 10) {continue; }
        display += i + '<br>' 
        if ( i > 14) {break; }
    }
    document.getElementById('breakAndCont').innerHTML = display

}