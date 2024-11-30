// let name = prompt("What is your name?", "Unnamed");
// let secondName = prompt("What is your second name?", "Unnamed");
// let age = Number(prompt("What is your age?", 10));
//
//
// age < 3 ? alert(`${name + " " + secondName} You are small`) :
//     age < 18 ? alert(`${name + " " + secondName} You are young`) :
//         age < 55 ? alert(`Great age. Welcome, ${name + " " + secondName}!`) :
//             age < 100 ? alert("Maybe you old?...") : alert("Hwo are you? Monster");
//
//
// let jackHasCar = false;
// jackHasCar ||= "Jack have not Car";
// alert(jackHasCar);

/*let login = prompt('Enter login');
let password;*/
// login === "Admin" || login === "admin" ? password = prompt('Enter password') :
//     login === 0  ? alert("Canceled") :
//         login !== "admin" || login !== "Admin" ? alert("I dont know who are you!") :
//             password === 0 && password === "" ? alert("Canceled") : alert("Welcome");

/*if (login === null) {
    alert("canceled");
} else if (login !== null && login !== "admin") {
    alert("I dont know who are you");
} else if (login === "admin") {
    password = prompt('Enter password');
    if (password === null) {
        alert("canceled");
    }else if (password !== "boss" && password !== null) {
        alert("Incorrect password");
    } else if (password === "boss") {
          alert("Welcome!");
        }
}*/

// Перепешите код используя операторы нулевого присваивания и слияния
/*let num1 = 10,
    num2 = 20,
    result;*/

/*if (result === null || result === undefined) {
    if (num1 !== null && num1 !== undefined) {
        result = num1;
    } else {
        result = num2;
    }
}*/

// Ответ


/*alert(result ??= num1 ?? num2);

// Циклы. Какое последнее значение выведен данный цикл

let i = 3;

while (i) {
    alert(i--);
} // Ответ 1 (Решено с 1 попытки) Когда i станет равно 0 (false) цикл прекратится*/

// При помощи цикла for выведите четные значения от 2 до 10

/*
for (i = 0; i <= 10; i++) {
    if (i % 2 === 0 && i !== 0) {
        alert(i);
    }
}
*/

//  Замените цикл for на while

/*
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}
*/

/*
let number = 0;
while (number < 3) {
    alert( `number ${number}!` );
    number++;
}*/
/* Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл
другое число – попросить ввести ещё раз, и так далее. Цикл должен спрашивать число пока
либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых
строк в этой задаче необязательно.*/

/*let triger = true;

while (triger) {
    let answer = prompt("Select number over 100:  ");
    if (answer < 100 || answer === null) {
        continue;
    } else {
        triger = false;
    }
}*/
// Более рациональное решение
/*let num;
do {
    num = prompt("Enter number over 100:  ", 0);
} while(num <= 100 && num);*/

// Вывести простые числа

// let n = prompt('Enter number range: ', 5);
//
// for (let verifiableNumber = 2; verifiableNumber <= n; verifiableNumber++) {
//     for (let divider = 2;  divider <= verifiableNumber; divider++) {
//         if(verifiableNumber % divider === 0) {
//             if (verifiableNumber === divider) {
//                 alert(`Simple number ${verifiableNumber}`);
//             } else {
//                 break;
//             }
//         }
//     }
// }

//      Решение через указатель (не сам додумался)

/*let n = prompt("Enter numbers range: ", 10);

nextIteration:
for (let verifiableNumber = 2; verifiableNumber <= n; verifiableNumber++) {
    for (let divider = 2; divider < verifiableNumber; divider++) {
        if (verifiableNumber % divider === 0) continue nextIteration;
    }
    alert(verifiableNumber);
}*/


