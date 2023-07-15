const main = document.querySelector(".main");
const ball1 = document.querySelector(".ball1");
const ball2 = document.querySelector(".ball2");
const ball3 = document.querySelector(".ball3");
const ball4 = document.querySelector(".ball4");
const ball5 = document.querySelector(".ball5");
const ball6 = document.querySelector(".ball6");
const ball7 = document.querySelector(".ball7");
const ball8 = document.querySelector(".ball8");
const ball9 = document.querySelector(".ball9");

const esferasLista = [];
// var bolaSale  = document.createElement("div");
// bolaSale.innerText="55"; 
// bolaSale.className = "ballSale";
// console.log(bolaSale)
// let leftrigth = Math,floor(Math.random()*2);
// let rigth = leftrigth?true:false;
// let updown = Math,floor(Math.random()*2);
// let up = updown?true:false;

window.addEventListener('load', function() {
  contBolas=0;
  
    ball1.innerHTML=Math.floor(Math.random()*75);
    ball2.innerHTML=Math.floor(Math.random()*75);
    ball3.innerHTML=Math.floor(Math.random()*75);
    ball4.innerHTML=Math.floor(Math.random()*75);
    ball5.innerHTML=Math.floor(Math.random()*75);
    ball6.innerHTML=Math.floor(Math.random()*75);
    ball7.innerHTML=Math.floor(Math.random()*75);
    ball8.innerHTML=Math.floor(Math.random()*75);
    ball9.innerHTML=Math.floor(Math.random()*75);

    //**************************************************************************************** */
    var body = document.getElementById("cajaTabla")

    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < 15; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
   var cont=0;
   var nro=i+1;
      for (var j = 0; j < 5; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        if(cont!=0){nro=nro+15}
        var textoCelda = document.createTextNode(nro);
        celda.appendChild(textoCelda);
        celda.style.textAlign = "center";
        celda.style.color = "white";
        hilera.appendChild(celda);
        cont++;
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
    tabla.setAttribute("border-color", "white");
    tabla.setAttribute("width", "100%");
    tabla.setAttribute("height", "100%");

    tblBody.setAttribute("font-size", "40%");
    tblBody.setAttribute("color", "red");

   

   //**************************************************************************************** */

});

function sacarBola(){
    var c = 0;
    btnSacarBola.disabled=true;
    btnSacarBola.style.background="red";
  const id =  setInterval(() => {
    ball1.innerHTML=Math.floor(Math.random()*75);
    ball2.innerHTML=Math.floor(Math.random()*75);
    ball3.innerHTML=Math.floor(Math.random()*75);
    ball4.innerHTML=Math.floor(Math.random()*75);
    ball5.innerHTML=Math.floor(Math.random()*75);
    ball6.innerHTML=Math.floor(Math.random()*75);
    ball7.innerHTML=Math.floor(Math.random()*75);
    ball8.innerHTML=Math.floor(Math.random()*75);
    ball9.innerHTML=Math.floor(Math.random()*75);
    c++
   
    if(c==48){
       
        clearInterval(id);
        pararJugada()
        mostrarBola()
    }
    }, 100);
    const audio = new Audio("mp3s/bolas-de-bingo.mp3");
     audio.play();
}

function repetidos(n){
  var nroRepe = esferasLista.includes(n);
  console.log(n)
  console.log(nroRepe)
  if (nroRepe==false){
    esferasLista .push(n);
    return nroRepe;
  }else{
    return nroRepe;
  }
 
}


function mostrarBola(){

do{
  var hallado=false;
    var n = Math.floor(Math.random()*75) 
      hallado=repetidos(n);
      if(n==0){hallado=true}
}while(hallado==true)
console.log(esferasLista)


  
  var celdas = document.getElementsByTagName("td");
 
  // for (var i = 0; i < 15; i++) { 
    for (var j = 0; j < celdas.length; j++) {
      
      var nro = celdas[j].innerHTML;
      
       if(n===Number(nro)){
        
        celdas[j].style.color = "red";  
      }                      
    }
  // }
  cantarNumero(n);
  var bolaSale  = document.createElement("div");
  bolaSale.className = "ballSale";
  bolaSale.textContent=n; 
  bolaSale.setAttribute("id", "ballSale"); 
  document.getElementById("bolaSalientes").appendChild(bolaSale);
  

$(".ballSale").animate({
  marginTop: '+=40%'
},1000)

$(".ballSale").animate({
  marginLeft: '+=75%'
},1000)

setTimeout(() => {
  bolaSale.classList.remove("ballSale");
  bolaSale.classList.add("bolaFija");
  bolaSale.style.top=0;
  bolaSale.style.left=10;
  btnSacarBola.style.background="green";
  btnSacarBola.disabled=false;
  const nroFijo=document.createElement("div")
  nroFijo.textContent=n;
  nroFijo.setAttribute("class","bolaFija2")
  document.getElementById("listaSalida").appendChild(nroFijo);
  
  
}, 3000);


}

function pararJugada(){    
    ball1.innerHTML=Math.floor(Math.random()*75);
    ball2.innerHTML=Math.floor(Math.random()*75);
    ball3.innerHTML=Math.floor(Math.random()*75);
    ball4.innerHTML=Math.floor(Math.random()*75);
    ball5.innerHTML=Math.floor(Math.random()*75);
    ball6.innerHTML=Math.floor(Math.random()*75);
    ball7.innerHTML=Math.floor(Math.random()*75);
    ball8.innerHTML=Math.floor(Math.random()*75);
    ball9.innerHTML=Math.floor(Math.random()*75);
    
}

function  cantarNumero(n){
  if(n>= 1 && n<=15){
    const audio = new Audio("mp3s/b" + n + ".aac");
    audio.play();
  }
  if(n>= 16 && n<=30){
    const audio = new Audio("mp3s/i" + n + ".aac");
    audio.play();
  }
  if(n>= 31 && n<=45){
    const audio = new Audio("mp3s/n" + n + ".mp3");
    audio.play();
  }
  if(n>= 46 && n<=60){
    const audio = new Audio("mp3s/g" + n + ".mp3");
    audio.play();
  }
  if(n>= 61 && n<=75){
    const audio = new Audio("mp3s/o" + n + ".mp3");
    audio.play();
  }
 
  
  
}