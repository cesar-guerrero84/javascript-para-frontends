// los eventos de mouse son aquellos que cuando por ejemplo movemos el raton o damos click suceda algo segun lo programado con el evento elegido

// onclick (el evento de presionar click con el mouse)

// el onclick se suele usar en el html por ejemplo en una etiqueta button se definiria asi onclick="funcionDeJs()" entonces cada vez que des click en ese button se ejecutara la funcion de js a la que este ligada el documento html como tambien se pueden usar selectores y usarlos en js.

var evento1 = document.querySelector(".boton1"); // aqui creamos una variable que guarda la clase boton1 del html

//la siguiente funcion coje la var evento1 que guarda el elemento html y le agrega una funcion llamada addeventlistener que es propia de javascript para agregar eventos y activa el evento click que es lo mismo que onclick al estar en js directo puedes saltarte el on lo mismo pasa con los demas eventos, y luego ejecuta una funcion anonima que activa un alert con un texto

evento1.addEventListener("click",function(){alert("si funciona el evento click")});

// onmouseover (el evento que se activa cada vez que pasas el mouse encima del objeto designado)

// la siguiente funcion ejecuta un alert con un texto cada vez que pones el mouse encima del boton que esta invocando esta funcion

function encima(){
    alert("el raton esta encima del boton , el evento onmouseover funciona");
};

// onmouseout (el evento que es lo contrario a mouseover una vez retirado el mouse del objeto designado se activa una funcion)

// la siguiente funcion ejecuta un alert cada vez que el mouse se aleja del objeto donde este siendo invocado en html

function fuera(){
    alert("el mouse esta afuera , el evento onmouseout funciona");
};