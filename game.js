var value = prompt ('Введите с какого числа выбирать');
var value2 = prompt ('Введите до которого числа выбирать');

min = parseInt(value)
max = parseInt(value2)

var noVictory = true;
while (noVictory){
var value3 = prompt ('Как думаешь какое число я выбрал?');
var rand = min + Math.random() * (max + 1 - min);
rand = Math.floor(rand);

if (rand == value3) {
    alert('Да я таки выбрал '+ rand);
    noVictory = false}

else if (value3=== null){
    noVictory = false}

else alert(' Неа, я выбрал '+rand)}