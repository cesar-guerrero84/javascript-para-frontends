// en javascript hay dos formas de elegir un elemento y modificarlo esta el queryselector y el getelementbyid con estos metodos podemos modificar el documento, su contenido y sus estilos. veamos como hacerlo

//notas : el query selector siempre afectara solo al primero elemento que encuentre con esa clase o id incluso si hay otras clases o ids con el mismo nombre solo se vera afectado el primero que encuentre en el documento html para seleccionar uno en especifico se debe usar el queryselectorAll

var z = document.querySelector(".todo"); // aqui estamos eligiendo la clase todo del documento html guardandolo en una variable z

z.style.color = "blue"; // aqui elegimos la variable z y con style.color designamos un nuevo color en el estilo de la clase todo de la variable z

var a = document.querySelector("#primero"); // con # elegimos el id primero del documento html y lo guardamos en una variable a

a.style.color = "red"; // aqui cambiamos de nuevo el color con color.style del id primero guardado en la variable a reasigandole el color rojo

var e = document.querySelector(".tercero p"); // muy similar a css podemos elegir elementos dentro de una clase en este caso elegimos la clase .tercero y su elemento p guardandolo en un var e

e.style.color = "green"; // aqui elegimos el tercer div con la clase tercero y su elemento p y le reasignamos el color verde con .style.color

var f = document.querySelector('h1[class="titulo"]'); // aqui elegimos que los elementos h1 con la clase titulo sean guardados dentro de la variable f

f.style.border = "1px solid #000"; // aqui asignamos un borde al primer h1 con la clase titulo que encuentro js en el documento

var s = document.querySelectorAll("#subtitulos")[1]; // aqui usamos el query selectorall para elegir el subtitulo en la posicion 1 gracias a las [] afectando solo el segundo id subtitulo que encuentre en el documento ya que en programacion se empieza desde cero siendo el 1 y 1 siendo el dos etc.

s.style.color = "gold"; //aqui cambiamos el color del id subtitulos guardado en la var s