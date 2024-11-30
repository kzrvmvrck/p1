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

let login = prompt('Enter login');
let password;
// login === "Admin" || login === "admin" ? password = prompt('Enter password') :
//     login === 0  ? alert("Canceled") :
//         login !== "admin" || login !== "Admin" ? alert("I dont know who are you!") :
//             password === 0 && password === "" ? alert("Canceled") : alert("Welcome");

if (login === null) {
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
}

