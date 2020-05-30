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

 $('#filaanimos').click(function(){
  alert('Ahora cada vez que presiones sobre un estado de animo este se añadira a tu fila de emociones del dia')
  $('#astronauta1').click(function() {
    fila.insertar('Astronauta')
  })
  $('#batman1').click(function() {
    fila.insertar('Batman')
  })
  $('#constructor1').click(function() {
    fila.insertar('Contructor')
  })
  $('#superman1').click(function() {
    fila.insertar('Superman')
  })
  $('#promedio1').click(function() {
    fila.insertar('Hombre promedio')
  })
  $('#spyderman1').click(function() {
    fila.insertar('Spyderman')
  })
  $('#deadpool1').click(function() {
    fila.insertar('Deadpool')
  })
  $('#elonmusk1').click(function() {
    fila.insertar('Fachero')
  })
  $('#thor1').click(function() {
    fila.insertar('Dios del trueno')
  })
  //alert(fila.imprimir())
 })

 $('#filaanimosver').click(function(){
  if(fila.longitud()==0){
    alert('hoy no tienes ningun estado de animo agregado')
  }else{
    alert(fila.imprimir())
  }
  $('#alerta').html('Recuerda que esta app te permite monitorizar tus estados de animos del dia, y asi tengas mas control sobre ellos')
 })

 $('#filaanimosborrar').click(function(){
  alert('se borrara el primer estado de animo que hayas agregado a la fila')
  if(fila.longitud()==0){
    alert('No tienes alguna fila de animos del dia')
  }else{
    alert('se borrara '+fila.peek())
    fila.extraer()
    alert('borrada con exito')
  }
 })
/*
 $('#batman1').click(function(){
  $('#batman').css('visibility','visible')
 })
  $('#superman1').click(function(){
  $('#superman').css('visibility','visible')
 })
   $('#constructor1').click(function(){
  $('#constructor').css('visibility','visible')
 })
   $('#deadpool1').click(function(){
  $('#deadpool').css('visibility','visible')
 })
   $('#spyderman1').click(function(){
  $('#spyderman').css('visibility','visible')
 })
   $('#promedio1').click(function(){
  $('#promedio').css('visibility','visible')
 })
$('#elonmusk1').click(function(){
  $('#elonmusk').css('visibility','visible')
 })
$('#deadpool1').click(function(){
  $('#deadpool').css('visibility','visible')
 })
$('#thor1').click(function(){
  $('#thor').css('visibility','visible')
 })
$('#astronauta1').click(function(){
  $('#astronauta').css('visibility','visible')
 })

*/
//habran varios botones de como te sientes hoy
//si seleccionas uno se muestra tu personalidad
//si seleccionas otro este cambia la personalidad,
//si seleccionas muchos se mostrara la fila de como te sientes hoy
//y se van a ir eliminando cada vez que pasen