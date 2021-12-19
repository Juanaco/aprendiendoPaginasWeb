/*alert('Hola Mundo!');*/

var nombre = "Juan Imhoff";
var altura = 193
var concatenacion = nombre + " " + altura

/*document.write(concatenacion);*/
/*


    if(altura >= 190){
        datos.innerHTML += `
        <h1>Sos alto</h1>
        `;
    }else{
        datos.innerHTML += `
        <h1>Sos no tan alto</h1>
        `;
    }

    for(var i = 2000; i<=2020; i++){
        datos.innerHTML += "<h2>Estamos en el año: " + i;
    }*/

function MuestraMiNombre(nombre, altura){
    var misDatos= `
    <h1>Soy la caja de datos</h1> 
    <h2>Mi nombre es: ${nombre}</h2>  
    <h3>Mido: ${altura} cm</h3> 
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML =MuestraMiNombre("Juan Imhoff", 190);
}

imprimir();

var nombres = ["victor", "antonio", "joaquin"];

document.write(<h1>Listado de nombres</h1>);

/*for(i = 0; i<nombres.length; i++){

    document.write(nombres[i] + '<br>');
}*/

nombres.forEach(function(nombre)){
    document.write(nombre + '<br>')
}