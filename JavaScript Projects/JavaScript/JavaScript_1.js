


//Step 204: switch statements

function switchFunc() {
    var fighter_output,
        input = document.getElementById('userChoice').value,
        fighter = input.toUpperCase(),
        message = ' Round 1...<br>Fight!!!';
    switch(fighter) {
        case 'DHALSIM':
            fighter_output = "Yoga Flame! <br>" + message;
        break;
        case 'E. HONDA':
            fighter_output = 'Taste my hundred hand slap!<br>' + message;
        break;
        case 'GUILE':
            fighter_output = 'Sonic BOOM!!<br>' + message;
        break;
        case 'CHUN LI':
            fighter_output = 'You\'ll never deflect my Spinning Bird Kick<br>' + message;
        default:
            fighter_output = 'I didn\'t get that. Try again'
    }
    document.getElementById('switchFunc').innerHTML = fighter_output;
}

//Step 213: getElementsByClassName()

function className2() {
    var x = document.getElementsByClassName('dif');
    for (i = 1; i < 100; i += 2) {
    x[i].innerHTML = 'Every other paragraph has changed';}
}

//Step 215-216
function canvas1() {
    var c = document.getElementById('canvas1');
    var ctx = c.getContext("2d");
    var grd = ctx.createRadialGradient(75,50,5,90,60,100);
    grd.addColorStop(0, "purple");
    grd.addColorStop(1, 'black');
    ctx.fillStyle = grd;
    ctx.fillRect(10,10,150,80);
}

//Step 217
function linGrad() {
    var c = document.getElementById('linGrad');
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 170, 0)
    grd.addColorStop(0, 'pink');
    grd.addColorStop(1, 'purple');
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}

