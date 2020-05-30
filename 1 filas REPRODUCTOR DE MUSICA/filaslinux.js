/* ANGEL RAGA, ESTUDIANTE DE ESTRUCTURA DE DATOS I 

    EL MEJOR EJEMPLO QUE VERAS SOBRE LA IMPLEMENTACION DE FILAS EN UN REPRODUCTOR IMAGINARIO MUSICAL
    BUSQUE UN REFRESCO Y UNAS PALOMITAS PORQUE NECESITARA UN RATO PARA COMPRENDER LA COMPLEGIDAD QUE
    ESTE ALGORITMO CONLLEVA

    Y NO SOLO PUEDE SER UN CODIGO DE CONSOLA, NO SEÑOR, EL REPRODUCTOR TIENE QUE SER ESTETICO SI NO
    NO VA A NINGUN LADO

    ASI QUE APRECIA LA ESTETICA DEL MISMO
 */

$(document).ready(function() {
   alert("Hola, Soy jorge paso por aqui para echar un vistaso, no temas, me encargo de que todo funcione a la perfeccion, veamos, si! Jquery esta funcionando perfectamente, navega tranquilo");
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
};
peek() {
return this.elementos[0];
};
imprimir() {
return this.elementos;
};
}
const fila = new Fila();

//document.write("BIENVENIDO A TU MUSICA")

$('#empezar').click(function() { 
  if ($('#song').val().length == 0) {
    alert('Ingrese el nombre de la cancion, este recuadro no puede estar vacio');
    return false;
  }
  fila.insertar($('#song').val());
  console.log("se ha agregado una nueva cancion");
  $('#resultadosong').html('Estas escuchando Actualmente: '+' '+fila.peek()+'<br/>Artista Desconocido');
  $('#iniciarlista').html('Desea iniciar su lista de reproduccion?')
  $('#mostrar').css('visibility', 'visible')
});

//IMPRIMIR EN CONSOLA

console.log(fila.imprimir());
console.log(fila.peek());
console.log(fila.extraer());

//FUNCIONES DE BOTONES

$('#si').click(function() {
  $('#mostrar2').css('visibility', 'visible');
  $('#presione').html('Busca la siguiente cancion que deseas escuchar y presiona el boton Agregar, asi podras disfrutar nuestra Playlist')
})
$('#no').click(function() {
  alert('su lista de reproduccion se ha registrado con exito')
})

$('#agregar').click(function() {
   if ($('#songesc').val().length == 0) {
    alert('Ingrese el nombre de la cancion, este recuadro no puede estar vacio');
    return false;
  }
  fila.insertar($('#songesc').val());
  $('#mostrar3').css('visibility', 'visible')
  alert("se ha agregado una nueva cancion");
  //alert('Se ha agregado una nueva cancion'+' tienes actualmente,'+fila.longitud()+' canciones en tu lista de reproduccion');
  console.log("se ha agregado una nueva cancion");
  console.log(fila.imprimir());
  console.log(fila.peek());
})
$('#mostrarlr').click(function() {
  $('#mostrar4').css('visibility', 'visible')
  if (fila.longitud() === 0) {
    alert('No tienes ninguna cancion en la lista de reproduccion, puedes agregar alguna');
    return false;
  }
  alert("las canciones en la lista son:"+ " "+ fila.imprimir())
  //$('#lista').html(fila.imprimir());
})
$('#borrarsong').click(function() {
  if(fila.longitud() === 0){
    alert('No tienes ninguna cancion en la lista de reproduccion, puedes agregar alguna');
    return false;
  }
  alert('se eliminara: '+fila.peek())
  console.log(fila.extraer());
  alert('cancion eliminada con exito');
});

$('#querola').click(function() {
  if(fila.longitud() === 0){
    alert('No tienes ninguna cancion en la lista de reproduccion, puedes agregar alguna');
    return false;
  }
  $('#r').html('Estas escuchando actualmente:'+' '+fila.peek())
})
$('#siguiente').click(function() {
  if(fila.longitud() <= 1){
    alert('Necesitas tener mas de una cancion para reproducir la siguiente');
    return false;
  }
  console.log(fila.extraer())
  alert("Empezaste a escuchar: "+fila.peek())
})
$('#playlist').click(function() {
  console.log(fila.longitud())
  alert("tienes actualmente: "+fila.longitud())
})
//CODIGO RECICLADO DE CUANDO SE FUE LA LUZ

/*
do{
  r=prompt("desea iniciar su lista de reproduccion?")
  if(r==="si"){
    break
  } else if (r==="no") { 
    break
  }
}while(true);
do{
if(r=== "si"){
  fila.insertar(prompt("ingrese el nombre de su cancion"));
  loop=prompt("desea ingresar otra cancion?")
}else {
  alert("lista de reproduccion finalizada, a su orden");
}
}while(loop==="si")
fila.extraer();
document.write("<br/>lista de reproduccion exitosa, las canciones en la lista son:"+ " "+ fila.imprimir())
document.write("<br/> tienes"+ " " + fila.longitud()+ " " + " canciones en tu lista de reproduccion")
if (fila.longitud >= 1){ 
document.write("<br/>en 5 minutos (1 minuto real) empezara la cancion: "+fila.peek());
};
console.log(fila.imprimir());
console.log(fila.longitud());
*/

