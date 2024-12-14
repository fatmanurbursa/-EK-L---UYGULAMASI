const input=document.querySelector("#input");
const gonder=document.querySelector("#gonder");
const cekilis=document.querySelector("#cekilis");
const ul=document.querySelector("#ul");
const text=document.querySelector("#text");

gonder.addEventListener("click",function(e) {

if(input.value!==" "){

const li=document.createElement("li");
const text=document.createTextNode(input.value);
li.appendChild(text);
ul.appendChild(li);
e.preventDefault();
}

});

cekilis.addEventListener("click",function(e) {

    var liElements=document.querySelectorAll("li");


let sayi=Math.round(Math.random()*liElements.length);

let kazanan=ul.children[sayi].textContent.toUpperCase();

text.innerHTML = "KAZANAN : "+kazanan;

alert("KAZANAN : "+kazanan);


console.log(liElements.length);
console.log(kazanan);
console.log(sayi)





});