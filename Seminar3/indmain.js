// Задача 3: Написать функцию, которая принимает 
// имя пользователя при ее вызове и выводит 
// сообщение с приветствием пользователя по имени.
// Проверить работоспособность функции.

// function printname() {

//     alert(`Привет, ${username}`);
// }
// let username = prompt('Введите имя');
// printname();

function sayHello(userName) {
    console.log(`Привет, ${userName}`);
}
const userName = prompt("Введите имя");
sayHello(userName);