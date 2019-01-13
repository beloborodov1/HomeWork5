var num = prompt ('Введите число кратное которому будут выводиться числа');
var quantity = prompt ('сколько таких чисел должно быть?');

num = parseInt(num);
quantity = parseInt(quantity);

// for (i = num, b = 0; b < quantity ;i = i+num, b++){
//      console.log(i);
//     }
i = num;
b = 0;
while (b < quantity){
     console.log(i);
     i = i+num
     b++
     
}