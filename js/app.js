var n = 0;
var cantDigitos = 0;
var first = 0;
var puntoPermitido = 1;
var displaySave ='';
var numero1 = 0;
var numero2 = 0;
var operando = '';
var operandoAnterior = '';
var borrarDisplay = 0;
var numeroFinal = 0;
var cuenta = 1;

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
      if (resultado.textContent = "") {
        limpiar()
      }else if (borrarDisplay==1 && operando != "=") {
        limpiar();
      } else if (borrarDisplay ==1 && operando == "=") {
        reset();
      }
      displayNumber(n);

  },true)
    uno.addEventListener('click',function(){
      n='1';
      if (resultado.textContent = " ") {
        limpiar()
      }else if (borrarDisplay==1 && operando != "=") {
        limpiar();
      } else if (borrarDisplay ==1 && operando == "=") {
        reset();
      }
      displayNumber(n);

  },true)
    dos.addEventListener('click',function(){
      n='2';
      if (resultado.textContent = "") {
        limpiar()
      }else if (borrarDisplay==1 && operando != "=") {
        limpiar();
      } else if (borrarDisplay ==1 && operando == "=") {
        reset();
      }
      displayNumber(n);

  },true)
    tres.addEventListener('click',function(){
      n='3';
      if (resultado.textContent = "") {
        limpiar()
      }else if (borrarDisplay==1 && operando != "=") {
        limpiar();
      } else if (borrarDisplay ==1 && operando == "=") {
        reset();
      }
      displayNumber(n);

  },true)
    cuatro.addEventListener('click',function(){
      n='4';
      if (resultado.textContent = "") {
        limpiar()
      }else if (borrarDisplay==1 && operando != "=") {
        limpiar();
      } else if (borrarDisplay ==1 && operando == "=") {
        reset();
      }
      displayNumber(n);

  },true)
    cinco.addEventListener('click',function(){
      n='5';
      if (resultado.textContent = "") {
        limpiar()
      }else if (borrarDisplay==1 && operando != "=") {
        limpiar();
      } else if (borrarDisplay ==1 && operando == "=") {
        reset();
      }
      displayNumber(n);

  },true)
    seis.addEventListener('click',function(){
      n='6';
      if (resultado.textContent = "") {
        limpiar()
      }else if (borrarDisplay==1 && operando != "=") {
        limpiar();
      } else if (borrarDisplay ==1 && operando == "=") {
        reset();
      }
      displayNumber(n);

  },true)
  siete.addEventListener('click',function(){
      n='7';
      if (resultado.textContent = "") {
        limpiar()
      }else if (borrarDisplay==1 && operando != "=") {
        limpiar();
      } else if (borrarDisplay ==1 && operando == "=") {
        reset();
      }
      displayNumber(n);

  },true)
  ocho.addEventListener('click',function(){
      n='8';
      if (resultado.textContent = "") {
        limpiar()

      }else if (borrarDisplay==1) {
        if (operando != "=") {
          limpiar();
          console.log(hola);
        }
      } else if (borrarDisplay ==1) {
        if (operando == "=") {
          reset();
        }
      }
      displayNumber(n);

  },true)
  nueve.addEventListener('click',function(){
      n='9';
      if (resultado.textContent = "") {
        limpiar()

      }else if (borrarDisplay==1 && operando != "=") {
        limpiar();
      } else if (borrarDisplay ==1 && operando == "=") {
        reset();
      }
      displayNumber(n);

  },true)

  //CAPTAMOS EL PUNTO
  punto.addEventListener('click',function(){
    if (puntoPermitido==1) {
      n='.'
      first=2;
      displayNumber(n);
    }
  })

//LA SIGUIENTE FUNCION NOS PERMITE ESCRIBIR EL NUMERO EN LA PANTALLA
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
//first es una variable que nos indica que si el display esta en cero tenemos que borrar ese cero para ingresar los nuevos numeros
//puntoPermitido: cuando es 1 nos permite poner el punto, significa que nunca se ha usado. Cuando es 0 significa que ya se uso y no se puede volver a usar

//CAPTAMOS LOS SIGNOS OPERACIONALES
igual.addEventListener('click',function(){

})

suma.addEventListener('click',function(){
  displaySave = resultado.textContent;
  operando = "+";
  guardarNumero();
})

resta.addEventListener('click',function(){
  displaySave = resultado.textContent;
  operando = "-";
  guardarNumero();
})

dividido.addEventListener('click',function(){
  displaySave = resultado.textContent;
  operando = "/";
  guardarNumero();
})

mult.addEventListener('click',function(){
  displaySave = resultado.textContent;
  operando = "*";
  guardarNumero();
})

function resolver (n1, n2){
  var numeroFinal = 0;
  switch (operandoAnterior) {
    case '+':
      numeroFinal = numero1 + numero2;
      break;
    case '-':
      numeroFinal = numero1 - numero2;
      break;
    case '/':
      numeroFinal = numero1 / numero2;
      break;
    case '*':
      numeroFinal = numero1 * numero2;
      break;
  }
  resultado.textContent = numeroFinal;
  numero1 = numeroFinal;
  numero2 = 0;
  resultadoAnterior.textContent = resultadoAnterior.textContent + 'Resultado anterior: '+numeroFinal+'\n';
  borrarDisplay = 1;
}


//Creamos la funcion que limpia el display y lo deja en 0
function limpiar(){
  resultado.innerHTML = "0";
  borrarDisplay = 0;
}

//Creamos la funcion que reinicia la calculadora
function reset(){
  cuenta = 1;
  numero1 = 0;
  numero2 = 0;
  numeroFinal = 0;
  limpiar();
}

//Creamos la funcion que deja la pantalla en blanco cuando se esta haciendo una operacion
function enProceso(){
  resultado.innerHTML = "";
  borrarDisplay = 1;
}

//Creamos la funcion que guarda nuestros numeros ingresados

function guardarNumero(){
  if (cuenta==1) {
    numero1 = parseFloat(displaySave);
    operandoAnterior = operando;
    cuenta = 2;
    enProceso();
  } else if (cuenta==2) {
    numero2 = parseFloat(displaySave);
    resolver (numero1 , numero2);
    operandoAnterior = operando;
    enProceso();
  }else if (cuenta==3){
    operandoAnterior = operando;
    enProceso();
    cuenta =2 ;
  }
}
