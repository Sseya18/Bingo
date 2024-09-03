function agregar(){
    let numero=document.querySelector('input').value;
    evaluar(numero);
  }
function evaluar(numero){
    let pantalla=document.querySelector('.numeros')
    pantalla.innerHTML=pantalla.innerHTML+'<span>'+numero+'</span>';
    let elementos=document.querySelectorAll("td");
    let contador=0;
    elementos.forEach(element => {
        if (element.textContent===numero) {
            contador=contador+1;
            element.style.background="grey";
        }
    })
    let info=document.querySelector('.info');
    info.innerHTML="Hay "+contador+" coincidencias";
    ;
  }
function quitar(){
    let numero=document.querySelector('input').value;
    let pantalla=document.querySelector('.numeros');
    let elementoAEliminar='<span>'+numero+'</span>';
    let elementos=document.querySelectorAll("td");
    pantalla.innerHTML= pantalla.innerHTML.replace(elementoAEliminar, '');
    elementos.forEach(element => {
        if (element.textContent===numero) {
            element.style.background="transparent";
        }
    })
}
function borrar(){
    let pantalla=document.querySelector('.numeros');
    pantalla.innerHTML="";
    let elementos=document.querySelectorAll("td");
    elementos.forEach(element => {
        element.style.background="transparent";
    })

}
function nuevo() {
    const nombre = document.querySelector(".acartilla input[type='text']").value;
    const datos = document.querySelectorAll(".acartilla input[type='number']");
    const cartillas = document.querySelector(".cartillas");

    // Crear el contenedor de la nueva cartilla
    const nuevaCartilla = document.createElement("div");
    nuevaCartilla.className = "cart";
    
    // Crear y agregar el título con el nombre de la cartilla
    const titulo = document.createElement("h3");
    titulo.textContent = nombre;
    nuevaCartilla.appendChild(titulo);

    // Crear la tabla de la nueva cartilla
    const nuevaTabla = document.createElement("table");
    
    // Agregar las filas y celdas con los datos de entrada
    let nuevaFila;
    datos.forEach((input, index) => {
        if (index % 5 === 0) { // Cada 5 elementos, crear una nueva fila
            nuevaFila = document.createElement("tr");
            nuevaTabla.appendChild(nuevaFila);
        }
        const nuevaCelda = document.createElement("td");
        nuevaCelda.textContent = input.value; // Asigna el valor al texto de la celda
        nuevaFila.appendChild(nuevaCelda); // Agrega la celda a la fila
    });
    
    // Agregar la tabla al contenedor de la nueva cartilla
    nuevaCartilla.appendChild(nuevaTabla);
    
    // Agregar la nueva cartilla al contenedor principal de cartillas
    cartillas.appendChild(nuevaCartilla);
    
    // Limpiar los inputs después de agregar
    document.querySelector(".acartilla input[type='text']").value = '';
    datos.forEach(input => input.value = '');
}
