


//Step 142: concat() method

function concatFunc() {
    var str1 = 'This is the first half, ',
        str2 = 'and this is the second half',
        str3 = '.';
    document.getElementById('concat').innerHTML = str1.concat(str2, str3)
}

//Step 144: slice() method

function sliceFunc() {
    var str1 = 'This is my Boomstick!';
    document.getElementById('slice').innerHTML = str1.slice(11, 21);
}

//Step 145: toUpperCase() and search() methods

function upperAndSearch() {
    var str = 'That rug really tied the room together.'
    document.getElementById('upper').innerHTML = str.toUpperCase();
    document.getElementById('search').innerHTML = str.search('rug');
}

//Step 147: toString() method

function numToStr() {
    var x = 23 * 2;
    document.getElementById('numToStr').innerHTML = x.toString();
}

//Step 149: toPrecision() method

function toPrec() {
    var x = 123.2342342134;
    document.getElementById('toPrec').innerHTML = x.toPrecision(6);
}

//Step 150: toFixed() and valueOf() methods

function fixed_and_value() {
    var x = 143.52344,
        y = 0/0;
    document.getElementById('fixed_and_value1').innerHTML = x.toFixed(3)
    document.getElementById('fixed_and_value2').innerHTML = y.valueOf();
}

