/*Diseñe una estructura de datos de tipo Fila con los métodos de inserción y extracción y otros que considere oportunos, que permita almacenar información referente a:
Filas

Cola de reproducción musical
Cola en banco.
Fila de animaciones por ejecutar.
Instrucciones de un vídeo juego.
*/
$(document).ready(function() {
   alert("Jquery esta funcionando perfectamente, navega tranquilo");
 });
 
class Fila {
  constructor() {
    this.elementos = [];
  };
  insertar(elemento){
    this.elementos.push(elemento);
  };
  extraer() {
    const primero = this.elementos[0];
    this.elementos.splice(0, 1);
    return primero;
    alert('ha avanzado una persona')
  };
  longitud() {
    return this.elementos.length;
  }
  peek() {
    return this.elementos[0];
  }
  imprimir() {
    return this.elementos;
  }
}

const fila = new Fila();


//una cola de banco que te pregunte si quieres ingresar a hacer la cola, listo
//pueden haber varias colas, algunas mas rapidas que otras listo
//(rapida, 4s por persona, express, 5s por persona, regular, 7 segundos por person, lenta, 10s por persona)
//si respondes si, esta te asignara una cola random, y  un numero random, del 1 al 15, ya  listo
//que este numero determina cuantas personas hay contandote a ti en la cola, listo
//el proceso sera rapido debido a lo eficiente que es la cola en este banco,
//cuando sea tu turno, se te pedira devuelvas el ticket.

var rc='';
function aleatorio(inferior,superior){
       var res = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
      return res;
}
$('#empezar').click(function(){

	R = aleatorio(1,4)
	if (R===1){
		rc='Cola Rapida'
	}
	else if(R===2) {
		rc='Cola Express'
	}
	else if(R===3) {
		rc='Cola Regular'
	}
	else if(R===4){
		rc='Çola Lenta'
	}
	console.log(rc)
	if (rc==='Cola Rapida') {
	f = aleatorio(1,9)
	$('#p1').html('estas en la cola rapida')
	$('#p2').html('Las personas avanzan aproximadamente cada 4s')
	do{
		fila.insertar("persona")

	}while(fila.longitud()!= f)
}else if(rc==='Cola Express') {
	f = aleatorio(1,9)
		$('#p1').html('estas en la cola express')
		$('#p2').html('Las personas avanzan aproximadamente cada 5s')
	do{
		fila.insertar("persona")

	}while(fila.longitud()!= f)
}else if(rc==='Cola Regular') {
	f = aleatorio(1,9)
		$('#p1').html('estas en la cola regular')
		$('#p2').html('Las personas avanzan aproximadamente cada 7s')
	do{
		fila.insertar("persona")

	}while(fila.longitud()!= f)
}else if(rc==='Cola Lenta') {
	f = aleatorio(1,9)
		$('#p1').html('estas en la cola lenta')
		$('#p2').html('Las personas avanzan aproximadamente cada 9s')
	do{
		fila.insertar("persona")

	}while(fila.longitud()!= f)
};
	$('#si').css('visibility','hidden')
	fila.insertar('tu')
	$('#p3').html('en la cola, estas de numero:'+fila.longitud())
	$('#mostrar2').css('visibility','visible')
	$('#mostrar4').css('visibility','visible')
	$('#verfila').click(function(){
		if(fila.longitud()==0){
			alert('ya has pasado, no hay fila')
		}else{ 
		alert(fila.imprimir())
		}
	});
})






$('#skere').click(function() {
	var pasaste = false;
	function imprimirtaquilla () { 
	$('#haspasado').html('Estas en taquilla, listo para cobrar o hablar con nuestros ejecutivos, esperamos hayas disfrutado tu estancia en el banco')
};
 if(rc==='Cola Rapida'){
 	var empezarfun = setInterval(sacar4s, 4000);

	function sacar4s() {
	fila.extraer();
	alert('se ha ido una persona')
	};

	function parar4s() {
	clearInterval (empezarfun);
	};
 	do{
 		sacar4s();
 		if(fila.longitud()==1){
 			alert('estas apunto de pasar')
 		}
 	}while(fila.longitud()!=1)
 	fila.extraer();
 	alert('Es tu turno')
 	pasaste = true;
 	imprimirtaquilla();
 	parar4s();
 }
 if(rc==='Cola Express'){
 	var empezarfun2 = setInterval(sacar5s, 5000);

	function sacar5s() {
	fila.extraer();
	alert('se ha ido una persona')
	};

	function parar5s() {
	clearInterval (empezarfun2);
};
 	do{
 		sacar5s();
 		if(fila.longitud()==1){
 			alert('estas apunto de pasar')
 		}
 	}while(fila.longitud()!=1)
 	fila.extraer();
 	alert('Es tu turno')
 	pasaste = true;
 	imprimirtaquilla();
 	parar5s();
 }
 if(rc==='Cola Regular'){
 	var empezarfun3 = setInterval(sacar7s, 7000);

	function sacar7s() {
	fila.extraer();
	alert('se ha ido una persona')
	};

	function parar7s() {
	clearInterval (empezarfun3);
	};
 	do{
 		sacar7s();
 		if(fila.longitud()==1){
 			alert('estas apunto de pasar')
 		}
 	}while(fila.longitud()!=1)
 	fila.extraer();
 	alert('Es tu turno')
 	pasaste = true;
 	imprimirtaquilla();
 	parar7s();
 }
 if(rc==='Cola Lenta'){
 	var empezarfun4 = setInterval(sacar9s, 9000);

	function sacar9s() {
	fila.extraer();
	alert('se ha ido una persona')
	};

	function parar9s() {
	clearInterval (empezarfun4);
	};
 	do{
 		sacar9s();
 		if(fila.longitud()==1){
 			alert('estas apunto de pasar')
 		}
 	}while(fila.longitud()!=1)
 	fila.extraer();
 	alert('Es tu turno')
 	pasaste = true;
 	imprimirtaquilla();
 	parar9s();
 }
 if (pasaste = true){
 	$('#mostrar4').css('visibility','hidden')
 }



})


//fila.insertar('tu')
//$('#p3').html(fila.longitud())
//$('#p4').html(fila.imprimir())
//adelantar fila
