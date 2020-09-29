// en javascript hay dos formas de elegir un elemento y modificarlo esta el queryselector y el getelement con estos metodos podemos modificar el documento, su contenido y sus estilos. veamos como hacerlo y sus variables y distintas formas de usarlo

//notas : siempre se afectara solo al primer elemento que se encuentre con una clase o id incluso si hay otras clases o ids con el mismo nombre solo se vera afectado el primero que encuentre en el documento html para seleccionar uno en especifico se deben usar metodos especiales y seleccionando su posicion con []

// querySelector

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

// getElement

var k = document.getElementById("cuarto"); // aqui usamos getelementbyid para obtener el id del h1 cuarto del documento html

k.style.color= "pink"; // aqui tomamos el h1 con el id cuarto y le cambiamos el color a rosado con el .style.color

var m = document.getElementsByClassName("parrafos")[2]; // aqui estamos usando getelementsbyclassname que es para escojer varios elementos con una clase al igual que el queryselectorall debe ser designado la posicion para afectar un parrafo en especifo en este caso el de la posicion 2

m.style.border = "2px solid #000"; // aqui tomamos la clase parrafos de la posicion 2 guardada en la variable m y le agregamos un border

var ñ = document.getElementsByTagName("p")[2]; // aqui usamos el getelementsbytagname que funciona para seleccionar un tag html por ejemplo un h1 un h2 un img etc en este caso un p de la posicion 2

ñ.style.padding = "50px"; // aqui tomamos la var ñ que contiene el p de la posicion 2 y le agregamos padding de 50px

ñ.innerHTML = "cambie el texto gracias al metodo innerHTML"; // el inner html es un metodo de js para acceder a un elemento html y modificarlo en este caso modificamos el p de la posicion 2