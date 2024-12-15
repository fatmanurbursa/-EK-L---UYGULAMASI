const input=document.querySelector("#input");
const gonder=document.querySelector("#gonder");
const cekilis=document.querySelector("#cekilis");
const ul=document.querySelector("#ul");
const text=document.querySelector("#text");

gonder.addEventListener("click",function(e) {

if(input.value.trim()!==""){

const li=document.createElement("li");
const text=document.createTextNode(input.value);

li.appendChild(text);
ul.appendChild(li);
li.classList.add("list-group-item");
ul.classList.add("deneme");
e.preventDefault();
}else if(input.value.trim()===""){
    alert("Lütfen çekilişe katılacak isimleri sıra ile giriniz ve göndere basınız.")
}

});

cekilis.addEventListener("click",function(e) {

    $("#liste").hide("slow");

    var liElements=document.querySelectorAll("li");


let sayi=Math.round(Math.random()*liElements.length);

let kazanan=ul.children[sayi].textContent.toUpperCase();

text.innerHTML = "KAZANAN : "+kazanan;

alert("KAZANAN : "+kazanan);


console.log(liElements.length);
console.log(kazanan);
console.log(sayi)





});