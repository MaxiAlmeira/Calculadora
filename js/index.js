var n = 0;
var cantDigitos = 0;
var first = 0;
var puntoPermitido = 1;
var displaySave ='';
var numero1 = 0;
var numero2 = 0;
var operando = '';
var operandoAnterior = '';
var solve = 0;

  function displayNumber(n){
    if (resultado.textContent == '0' & n=='0') {

    }else if (cantDigitos < 8 & first == 0) {
      resultado.innerHTML = '';
      resultado.textContent = resultado.textContent + n;
      first = 1;
      cantDigitos = cantDigitos + 1;
    }else if (cantDigitos < 8 & first == 1) {
      resultado.textContent = resultado.textContent + n;
      cantDigitos = cantDigitos + 1;
    }else if (cantDigitos < 8 & first == 2 ){
      resultado.textContent = resultado.textContent + n;
      puntoPermitido = 0;
      first = 1 ;
    }
  }

function guardarNumero(){

  if (solve==0 & numero1==0) {
    numero1 = parseFloat(displaySave);
    resultado.textContent = numero1;
    numero1=0;
  }else if (numero1 == 0 & solve==1) {
    numero1 = parseFloat(displaySave);
    operandoAnterior = operando;
    console.log(numero1);
  }else if (numero2 == 0 & solve==1){
    numero2 = parseFloat(displaySave);
    if (operando=='') {
      operandoAnterior = operando;
    } else {
      resolver(numero1,numero2);
      operandoAnterior=operando;
    }
  }
}

function resolver (n1, n2){
  var res = 0;
  switch (operandoAnterior) {
    case '+':
      res = numero1 + numero2;
      break;
    case '-':
      res = numero1 - numero2;
      break;
    case '/':
      res = numero1 / numero2;
      break;
    case '*':
      res = numero1 * numero2;
      break;
  }
  //falta acomodar los decimales a 8 por las dudas que tenga mas el resutlado
  numero1 = res;
  resultadoAnterior.textContent = resultadoAnterior.textContent + 'Resultado anterior: '+res+'\n';
  numero2 = 0;
  if (operando == '=') {
  resultado.innerHTML = numero1;
  }
  limpiar();
}

function limpiar(){
  resultado.innerHTML = '0';
  cantDigitos = 0;
  first = 0;
}

//DEFINIMOS TODAS LAS VARIABLES DE LA CALCULADORA
  var cero = document.getElementById('0');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var punto = document.getElementById('punto');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var mult = document.getElementById('por');
  var dividido = document.getElementById('dividido');
  var raiz = document.getElementById('raiz');
  var igual = document.getElementById('igual');
  var sign = document.getElementById('sign');
  var on = document.getElementById('on');
  var resultado = document.getElementById('display');
  var resultadoAnterior = document.getElementById('nota');
//CAPTAMOS LOS NUMEROS

 cero.addEventListener('click',function(){
    n='0';
    displayNumber(n);

},true)
  uno.addEventListener('click',function(){
    n='1';
    displayNumber(n);

},true)
  dos.addEventListener('click',function(){
    n='2';
    displayNumber(n);

},true)
  tres.addEventListener('click',function(){
    n='3';
    displayNumber(n);

},true)
  cuatro.addEventListener('click',function(){
    n='4';
    displayNumber(n);

},true)
  cinco.addEventListener('click',function(){
    n='5';
    displayNumber(n);

},true)
  seis.addEventListener('click',function(){
    n='6';
    displayNumber(n);

},true)
siete.addEventListener('click',function(){
    n='7';
    displayNumber(n);

},true)
ocho.addEventListener('click',function(){
    n='8';
    displayNumber(n);

},true)
nueve.addEventListener('click',function(){
    n='9';
    displayNumber(n);

},true)

//CAPTAMOS EL PUNTO
punto.addEventListener('click',function(){
  if (puntoPermitido==1) {
    n='.'
    displayNumber(n);
    first=2;
  }
})

//CAPTAMOS LOS SIGNOS OPERACIONALES
suma.addEventListener('click',function(){
  operando = '+';
  solve=1;
  displaySave = resultado.textContent;
  limpiar();
  guardarNumero();
})

resta.addEventListener('click',function(){
  operando = '-';
  solve=1;
  displaySave = resultado.textContent;
  limpiar();
  guardarNumero();
})

dividido.addEventListener('click',function(){
  operando = '/';
  solve=1;
  displaySave = resultado.textContent;
  limpiar();
  guardarNumero();
})

mult.addEventListener('click',function(){
  operando = '*';
  solve=1;
  displaySave = resultado.textContent;
  limpiar();
  guardarNumero();
})

igual.addEventListener('click',function(){
  operando = '=';
  operacionIgual();
})

function operacionIgual (){
  numero2 = parseFloat(resultado.textContent);
  resolver(numero1,numero2);
  operandoAnterior = operando;
  resultado.innerHTML=numero1;
  console.log(numero1);
}
