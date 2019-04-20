var cantDigitos = 0;
var first = 0;
var puntoPermitido = 1;
var borrarDisplay = 0;
var operando = " ";
var operandoAnterior = "";
var numero1 = 0;
var numero2 = 0;
var numeroFinal = 0;
var cuenta = 1;
var borrarDisplay = 0;
var n = "";
var id= "";

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

//CREAMOS LA FUNCION QUE NOS PERMITE GUARDAR LOS NUMEROS INGRESADOS
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

//CREAMOS LA FUNCION QUE NOS PERMITE RESOLVER LA ECUACION CON LOS DOS NUMEROS INGRESADOS
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
    cantDigitos = 0;
    first = 0;
    puntoPermitido = 1;
  }

  //Creamos la funcion que reinicia la calculadora
  function reset(){
    cantDigitos = 0;
    first = 0;
    puntoPermitido = 1;
    borrarDisplay = 0;
    operando = " ";
    operandoAnterior = "";
    numero1 = 0;
    numero2 = 0;
    numeroFinal = 0;
    cuenta = 1;
    borrarDisplay = 0;
    limpiar();
  }

  //Creamos la funcion que deja la pantalla en blanco cuando se esta haciendo una operacion
  function enProceso(){
    resultado.innerHTML = " ";
    borrarDisplay = 1;
    cantDigitos = 0;
    puntoPermitido = 1;
  }

  //CAPTAMOS LOS NUMEROS
   cero.addEventListener('click',function(){
      n='0';
      if (resultado.textContent == " ") {
        limpiar();
      }else if (borrarDisplay==1 && operando != "=") {
        limpiar();
      } else if (borrarDisplay ==1 && operando == "=") {
        reset();
      }
      displayNumber(n);
      id = "0";

  },true)
    uno.addEventListener('click',function(){
      n='1';
      if (resultado.textContent == " ") {
        limpiar();
      }else if (borrarDisplay==1 && operando != "=") {
        limpiar();
      } else if (borrarDisplay ==1 && operando == "=") {
        reset();
      }
      displayNumber(n);
      id = "1";
  },true)
  dos.addEventListener('click',function(){
    n='2';
    if (resultado.textContent == " ") {
      limpiar();
    }else if (borrarDisplay==1 && operando != "=") {
      limpiar();
    } else if (borrarDisplay ==1 && operando == "=") {
      reset();
    }
    displayNumber(n);
    id = "2";
  },true)
  tres.addEventListener('click',function(){
    n='3';
    if (resultado.textContent == " ") {
      limpiar();
    }else if (borrarDisplay==1 && operando != "=") {
      limpiar();
    } else if (borrarDisplay ==1 && operando == "=") {
      reset();
    }
    displayNumber(n);
    id = "3";
      },true)
  cuatro.addEventListener('click',function(){
    n='4';
    if (resultado.textContent == " ") {
      limpiar();
    }else if (borrarDisplay==1 && operando != "=") {
      limpiar();
    } else if (borrarDisplay ==1 && operando == "=") {
      reset();
    }
    displayNumber(n);
    id = "4";
  },true)
  cinco.addEventListener('click',function(){
    n='5';
    if (resultado.textContent == " ") {
      limpiar()
    }else if (borrarDisplay==1 && operando != "=") {
      limpiar();
    } else if (borrarDisplay ==1 && operando == "=") {
      reset();
    }
    displayNumber(n);
    id = "5";
  },true)
  seis.addEventListener('click',function(){
    n='6';
    if (resultado.textContent == " ") {
      limpiar()
    }else if (borrarDisplay==1 && operando != "=") {
      limpiar();
    } else if (borrarDisplay ==1 && operando == "=") {
      reset();
    }
    displayNumber(n);
    id = "6";
  },true)
  siete.addEventListener('click',function(){
    n='7';
    if (resultado.textContent == " ") {
      limpiar()
    }else if (borrarDisplay==1 && operando != "=") {
      limpiar();
    } else if (borrarDisplay ==1 && operando == "=") {
      reset();
    }
    displayNumber(n);
    id = "7";
  },true)
  ocho.addEventListener('click',function(){
    n='8';
    if (resultado.textContent == " ") {
      limpiar()
    }else if (borrarDisplay==1 && operando != "=") {
      limpiar();
    } else if (borrarDisplay ==1 && operando == "=") {
      reset();
    }
    displayNumber(n);
    id = "8";
  },true)
  nueve.addEventListener('click',function(){
    n='9';
    if (resultado.textContent == " ") {
      limpiar()
    }else if (borrarDisplay==1 && operando != "=") {
      limpiar();
    } else if (borrarDisplay ==1 && operando == "=") {
      reset();
    }
    displayNumber(n);
    id = "9";
  },true)

  //CAPTAMOS EL PUNTO
  punto.addEventListener('click',function(){
    if (puntoPermitido==1) {
      n='.'
      first=2;
      displayNumber(n);
    }
    id="punto";
  })


  //CAPTAMOS LOS SIGNOS OPERACIONALES
  igual.addEventListener('click',function(){
    id="igual";
    if (cuenta==1) {
      displaySave = resultado.textContent;
      numero1 = parseFloat(displaySave);
      borrarDisplay = 1;
    } else if (cuenta ==2){
      displaySave = resultado.textContent;
      numero2 = parseFloat(displaySave);
      resolver();
    }
    cuenta = 3;
    operando = "=";
  })

  suma.addEventListener('click',function(){
    displaySave = resultado.textContent;
    operando = "+";
    guardarNumero();
    id="mas";
  })

  resta.addEventListener('click',function(){
    displaySave = resultado.textContent;
    operando = "-";
    guardarNumero();
    id="menos";
  })

  dividido.addEventListener('click',function(){
    id="dividido";
    displaySave = resultado.textContent;
    operando = "/";
    guardarNumero();
    id="dividido";
  })

  mult.addEventListener('click',function(){
    displaySave = resultado.textContent;
    operando = "*";
    guardarNumero();
    id="por";
  })

//CREAMOS LA FUNCION QUE PERMITE REINICIAR LA CALCULADORA
on.addEventListener("click", function(){
  reset();
  resultadoAnterior.textContent = "";
  id = "on";
})

//CREAMOS LA FUNCION QUE NOS PERMITE CAMBIAR DE SIGNO AL NUMERO INGRESADO
sign.addEventListener("click",function(){
  id ="sign";
  if (cuenta == 1 || cuenta == 3) {
    if (resultado.textContent != 0 && resultado.textContent != " " ) {
      var numeroAcambiar;
      numeroAcambiar = parseFloat(resultado.textContent);
      numero1 = (-1)*numeroAcambiar;
      resultado.textContent = numero1;
      borrarDisplay = 0;
    }
  } else if (cuenta == 2) {
    if (resultado.textContent != 0 && resultado.textContent != " " ) {
      var numeroAcambiar;
      numeroAcambiar = parseFloat(resultado.textContent);
      numero2 = (-1)*numeroAcambiar;
      resultado.textContent = numero2;
      borrarDisplay = 0;
    }
  }

})


//FUNCION QUE CAMBIA ESTILOS DE LOS BOTONES
function reducirTamaño(){
  document.getElementById(id).style = "transform: scale(0.95,0.95);"
}

function volverTamaño () {
  document.getElementById(id).style = "transform: scale(1,1);"
}

//Aplicamos las funciones cuando se clickea el numero y cuando se saca el mouse del numero

cero.onclick = reducirTamaño;
cero.onmouseout = volverTamaño;

uno.onclick = reducirTamaño;
uno.onmouseout = volverTamaño;

dos.onclick = reducirTamaño;
dos.onmouseout = volverTamaño;

tres.onclick = reducirTamaño;
tres.onmouseout = volverTamaño;

cuatro.onclick = reducirTamaño;
cuatro.onmouseout = volverTamaño;

cinco.onclick = reducirTamaño;
cinco.onmouseout = volverTamaño;

seis.onclick = reducirTamaño;
seis.onmouseout = volverTamaño;

siete.onclick = reducirTamaño;
siete.onmouseout = volverTamaño;

ocho.onclick = reducirTamaño;
ocho.onmouseout = volverTamaño;

nueve.onclick = reducirTamaño;
nueve.onmouseout = volverTamaño;

punto.onclick = reducirTamaño;
punto.onmouseout = volverTamaño;

suma.onclick = reducirTamaño;
suma.onmouseout = volverTamaño;

resta.onclick = reducirTamaño;
resta.onmouseout = volverTamaño;

mult.onclick = reducirTamaño;
mult.onmouseout = volverTamaño;

dividido.onclick = reducirTamaño;
dividido.onmouseout = volverTamaño;

on.onclick = reducirTamaño;
on.onmouseout = volverTamaño;

sign.onclick = reducirTamaño;
sign.onmouseout = volverTamaño;

igual.onclick = reducirTamaño;
igual.onmouseout = volverTamaño;
