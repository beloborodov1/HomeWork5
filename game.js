var val = prompt ('Enter range, number from:');
var val2 = prompt ('Number to:');

min = parseInt(val)
max = parseInt(val2)

var rand = min + Math.random() * (max + 1 - min);
rand = Math.floor(rand);

// while (true){
// var val3 = prompt ('What number did I choose?');
// if (val3.replace (/\d/g, '').length || val.replace (/\d/g, '').length || val2.replace (/\d/g, '').length){
// alert ('Pls input numbers only');
//     break}

// if (rand == val3) {
//     alert('You win!!! I chose the number '+ rand);
//     break}

// else if (val3=== null){
//     break}

// else alert('You lose')}

for (;;){
    var val3 = prompt ('What number did I choose?');
if (val3.replace (/\d/g, '').length || val.replace (/\d/g, '').length || val2.replace (/\d/g, '').length){
alert ('Pls input numbers only');
    break}

if (rand == val3) {
    alert('You win!!! I chose the number '+ rand);
    break}

else if (val3=== null){
    break}

else alert('You lose')
}