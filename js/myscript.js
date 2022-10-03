//alert("Hello JS");
//console.log("ceria!!!");
/*
var table = "Normal Table";
let chair = "One chair";
console.log(table);
console.log(chair);

let a= true;
let b= new Boolean(true);
console.log(a);
console.log(b);
*/
/*
let name2 = "John";
let surname = "Doe";
let quest = `How are you ${name2}, ${surname}?`;
console.log(quest);

let op_a = 2;
let op_b = 4;
let sum = op_a + op_b;
let rest = op_a - op_b;
let mult = op_a * op_b;
let division = op_a / op_b;
let exp= op_a ** op_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);
console.log(exp);
*/
/*
let boolean=true;
let Objboolean=new Boolean(true);
console.log(typeof(boolean));
console.log(typeof(Objboolean));

let testNull=null;
console.log(typeof(testNull));

let testUndef;
console.log(testUndef);
*/
/*
var arr1 = [];
var arr2 = new Array(3);
var arr3 = new Array(3, 5);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr3[1]);
console.log(arr4[4]);
arr4.unshift("dfg");
console.log(arr4);
*/
/*
var arr4 = new Array(3, 5, "Sevilla", true, arr4);
for(var i=arr4.length; i>=0; i--){
    console.log(arr4[i]);
}
arr4.forEach(function(element){
    console.log(`hola ->${element}`);
});
*/
/*
let aux = -3;
if(aux > 0){
    console.log("positivo");
}else{
    console.log("negativo");
}

var DNI_REGEX = /^(\d{8})([A-Z])$/;
let dni="12345678K";
if(dni.match(DNI_REGEX)){
    console.log("dni crrecto")
}else{
    console.log("dni incorrecto")
}

console.log(8=="8");
console.log(8==="8");

console.log(8!=8);
console.log(8!="8");
console.log(8!==8);
console.log(8!=="8");
console.log("test"=="test");
console.log("test"==='test');
console.log("test"=="Test");
*/
/*
var i =1;
while(i<10){
    console.log(`number = ${i}`)
    i++
}
*/
/*
let today = new Date()
let octubre1 = new Date(2022, 9, 1)
if(today>octubre1){
    console.log("antes")
}else{
    console.log("despues")
}
*/
/*
function myFirstFuntion(){
    console.log("Hola")
}
function mySecondFuntion(){
    console.log("Raton")
}
*/
/*
var div = document.getElementById("my_div");
div.classList.add("my_class");
console.log(div);
*/

var div= document.getElementsByTagName("div")
console.log(div)
var Sdiv=document.querySelector("#my_Sdiv")
console.log(Sdiv)

function $(selector){
    return document.querySelector(selector)
}
console.log($("#my_Tdiv"))

/*
var numbers = [1,2,3,4];
var n_elevator_2 = numbers.map((n) => { console.log(n); return n*n });
console.log(n_elevator_2);
*/
/*
let numbers = [[1,1],[2,2],[3,3],[4,4]];
let itself = numbers.map(([x,y]) => x*y);
console.log(itself);
*/
$("#boton").addEventListener("click",function(){
    var input = document.createElement("input");
    input.setAttribute("type","email");
    $("#form").appendChild(input);
    myAlert("Add new email");
    console.log(input);
});

function myAlert(msg){
    var div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML = msg
    var close = document.createElement("span")
    close.classList.add("close")
    close.innerHTML = "X"
    div.appendChild(close)
    $("body").insertBefore(div,$("body").firstChild);
}

function blind_close(){
    let elements = document.querySelectorAll(".close")
    for(var i=elements.length-1;i>=0;i--){
        let el = elements[i]
        el.addEventListener("click", function(){
            this.parentNode.style.display = "none"
        })
    }
}