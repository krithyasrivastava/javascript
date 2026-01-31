let value = prompt("enter value");
let key = prompt("get key");
localStorage.setItem(key,value);
console.log(localStorage.getItem(key))
