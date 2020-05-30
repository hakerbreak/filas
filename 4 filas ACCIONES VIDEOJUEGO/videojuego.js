//creado por Angel Raga
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

 function ejecutaraccion() {
   if(fila.longitud()==0){
    alert('ya se ejecuto la accion')
  }else { 
  do{
    alert('Se ejecuto'+fila.peek());
    fila.extraer();
  }while(fila.longitud()!=0)
  }
  alert('Accion ejecutada con exito')
  $('#botones').css('visibility','visible')
 };

 $('#puerta').click(function(){
    $('#1').html('<mark>Esta es la Primera animacion, te mostraremos el proceso de la fila de ABRIR UNA PUERTA:<mark/>')
    $('#2').html('Se creara una fila de acciones por ejecutar')
    fila.insertar(' camina hacia la puerta')
    $('#3').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' sube la mano')
    $('#4').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' agarra la manilla')
    $('#5').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' gira la manilla')
    $('#6').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' jala la puerta')
    $('#7').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' camina para pasar la puerta')
    $('#8').html('se ha añadido una accion '+fila.imprimir())
    $('#9').html('La cola de acciones quedo asi:')
    $('#10').html(fila.imprimir())
    $('#mostrar').css('visibility','visible')
    $('#mostrar2').css('visibility','hidden')
    $('#mostrar3').css('visibility','hidden')
    $('#botones').css('visibility','hidden')
 })

$('#ejecutarpuerta').click(function(){
  ejecutaraccion();
})

$('#llaves').click(function(){
  $('#1').html('<mark>Esta es la Segunda animacion, te mostraremos el proceso de la fila de AGARRAR UNAS LLAVES:<mark/>')
  $('#2').html('Se creara una fila de acciones por ejecutar')
    fila.insertar(' camina hacia las llaves')
    $('#3').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' baja la mano')
    $('#4').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' agarra la llave')
    $('#5').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' sube la mano')
    $('#6').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' camina')
    $('#7').html('se ha añadido una accion '+fila.imprimir())
    $('#9').html('La cola de acciones quedo asi:')
    $('#10').html(fila.imprimir())
    $('#mostrar2').css('visibility','visible')
    $('#mostrar').css('visibility','hidden')
    $('#mostrar3').css('visibility','hidden')
    $('#botones').css('visibility','hidden')
})

$('#ejecutarllaves').click(function(){
  ejecutaraccion();
})

$('#saltar').click(function(){
   $('#1').html('<mark>Esta es la Tercera animacion, te mostraremos el proceso de la fila de SALTAR:<mark/>')
  $('#2').html('Se creara una fila de acciones por ejecutar')
  fila.insertar(' se agacha')
    $('#3').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' estira las piernas')
    $('#4').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' estas en el aire')
    $('#5').html('se ha añadido una accion '+fila.imprimir())
    fila.insertar(' caes')
    $('#6').html('se ha añadido una accion '+fila.imprimir())
    $('#9').html('La cola de acciones quedo asi:')
    $('#10').html(fila.imprimir())
    $('#mostrar3').css('visibility','visible')
    $('#mostrar2').css('visibility','hidden')
    $('#mostrar').css('visibility','hidden')
    $('#botones').css('visibility','hidden')
})

$('#ejecutarsaltar').click(function(){
  ejecutaraccion();
})

//Fila de instrucciones de un videojuego
//eres un peluche,  pero un peluche chido, eres un TED
//te enseñaremos la logica de las instrucciones en el mundo virtual
//con el principio basico de siempre ejecutar una cosa a la vez
//la computacion literal se mueve a la velocidad de la luz, no pareciera
//pero es asi
//mostraremos tres ejemplos de acciones de un videojuego
//1ra animacion: ABRIR UNA PUERTA, primero caminamos,etc...
//2da animacion: AGARRAR UNAS LLAVES, primero te acercas, las agarras y luego te vas
//3ra animacion: SALTAR, primero agarras energia agachandote, luego estiras las piernas, luego estas en el aire
//y por ultimo caes.

