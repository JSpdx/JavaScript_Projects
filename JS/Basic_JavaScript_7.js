


//Step 130: Global variables

x = 14

function addx() {
    var y = 4;
    //console.log( x + y + z )
    document.getElementById('addx').innerHTML = x + y;
}

//Step 133: getHours method
function beerOrCoffee() {
    if (new Date().getHours() < 17) {
        document.getElementById('beer30').innerHTML = "You need Coffee. Let it flow through you"}
    else {document.getElementById('beer30').innerHTML = 'It\'s 5:00 somewhere. And that somewhere is here. Crack open a cold one!'}
}

//Step 134: IF statement
function greaterThan() {
    if (4 < x) {
        document.getElementById('greaterThan').innerHTML = "4 is less than global variable x"}
    else {document.getElementById('greaterThan').innerHTML = '4 is greater than global variable x' }
}


//Step 136: If and Else Statement
function pastryChecker() {
    var hasPastry = document.getElementById('pastryInput').value;
    if (hasPastry.includes('pastry') == true) {
        document.getElementById('pastryOutput').innerHTML = "What a delicious sentence"}
    else {document.getElementById('pastryOutput').innerHTML = "That was a crumby answer"}
}

//Step 137: ELIF
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}