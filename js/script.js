"use strict";
// function createSentence(words, punctuation) {
// 	const sentence = words.join(" ");
// 	return sentence + punctuation;
// }
// const words = ["Hi,", "my", "name", "is", "Brando"];
// const punctuation = "!";
// const sentence = createSentence(words, punctuation);
// console.log(sentence);
// const x = 10;
// const y = 5;

// // Додавання
// console.log(x + y); // 15

// // Віднімання
// console.log(x - y); // 5

// // Множення
// console.log(x * y); // 50

// // Ділення
// console.log(x / y); // 2

// // Остача від ділення
// console.log(x % y); // 0

// // Додавання із заміною (також є для всіх інших операторів)
// let value = 5;

// // Аналогічно запису value = value + 10;
// value += 5;
// console.log(value); // 15

//Вывести числа от 4 до 400 в консоль;
// let number = "";
// for ( let i = 4; i<=400; i++){
// 	number = number + i + " ";
// }
// console.log(number);
// let number = 4;
// let str = "";
// while(number < 401) {
// 	str +=number + " ";
// 	number++;
// }
// console.log(str);
//*Вывести числа в последовательности: 4 7 10 13 с помощью цикла
// let number = "";
// for (let i=4; i<=13; i=i+3){
// 	number = number + i + " ";
// }
// console.log(number);

//Цикл while
// let number = 4;
// let str = "";
// while(number <= 13) {
// 	str +=number + " ";
// 	number = number + 3;
// }
// console.log(str);

// Вывести числа 654 653 652 до нуля
// let number = "";
// for ( let i = 654; i>=0; i=i-1){
// 	number = number + i + " ";
// }
// console.log(number);
//Цикл while
let number = 654;
let str ="";
while(number>=0){
	str +=number + " ";
	number = number - 1;
}
console.log(str);
