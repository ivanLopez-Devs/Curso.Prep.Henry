// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length -1]; 
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // var array1 = array.map((elemento) => elemento + 1)
  // return array1; (esta es una manera)
  // la otra explicada por A:

  var nuevoArray = [];

  for(var i = 0; i < array.length; i++ ){
    nuevoArray.push(array[i] + 1)
  }
  return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // la otra manera de hacerlo es con un for:
  // for (var i = 0; i < array.length; i++){
  // if (array[i] === elemento){
  //  return true;
  //}
  //return false;
  //}
  return palabras.join(" "); // join toma un array y devuelve un string;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // forma de resolver 1:
  //return array.includes(elemento); // include permite buscar si un elemento esta incluido en el array;
  // la otra forma segun A, para resolver es:

  for (var i = 0; i < array.length; i++){
    if(array[i]=== elemento)
    return true;
  }
 return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var suma = 0; // esta es una variable auxiliar donde vamos a ir sumando todos los elementos de "numeros" que recibamos por argumento.
  for (var i = 0; i < numeros.length; i++){
    suma = suma + numeros[i]; // aqui a suma la vamos modificando y quiero que sea igual a suma mas numeros [i]
  }
  return suma;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  //
  var suma = 0;
  var promedio = 0;
  for (var i = 0; i < resultadosTest.length; i++){
    suma = suma + resultadosTest[i]
  }

  promedio = suma / resultadosTest.length;

  return promedio;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  
  var mayor = 0; //variable auxiliar que inicia en 0.
  for (var index = 0; index < numeros.length; index ++){
     if(numeros[index] > mayor){  //si numeros i es mayor que mayor, entonces
       mayor = numeros[index]  // numeros i pasa a ser mayor y se sale del for y se retorna mayor.
     }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  var total = 1;                         // es importante que se coloque el numero 1, para multiplicar, ya que cero por cualquier num es cero.
  if (arguments.length < 1){            //  la palabra clave "arguments" permite acceder a los argumentos.
    return 0;
  }
  for(var i = 0; i < arguments.length; i++){
    total = total * arguments[i];
  }
   return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var mayorQue18 = 0;
  for(var i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 18){
      mayorQue18 = mayorQue18 + 1     // ver por que pone mas 1
    }
  }
  return mayorQue18;


}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  
  var Domingo = 1;
  var Lunes = 2;
  var Martes = 3;
  var Miercoles = 4;
  var Jueves = 5;
  var Viernes = 6;
  var Sabado = 7;
  
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  }
  return "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí


}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
