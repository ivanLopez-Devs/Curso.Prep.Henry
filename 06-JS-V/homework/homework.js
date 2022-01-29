// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  
  // class Usuario {
  //   constructor(opciones) {
  //     this.usuario = opciones.usuario;
  //     this.nombre = opciones.nombre;
  //     this.email = opciones.email;
  //     this.password = opciones.password;
  //   }
  //   saludar() {
  //     return "Hola, mi nombre es" + " " + this.nombre;
  //   }
  // }


  // return Usuario;
  
  class Usuario{                // claramente vemos una clase ES6 que tiene un function constructor que recibe
    constructor(opciones){      // el objeto opciones, el cual tiene las propiedades "usuario, nombre, mail,pasword".
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }
    saludar() {
      return "Hola, mi nombre es" + " " + this.nombre; 
    }
  }

  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:

  Constructor.prototype.saludar = function() {
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  String.prototype.reverse = function() {
    var invertida = "";                   // crear una variable auxiliar para colocar el string invertido.
    for(var i = this.length; i > 0; i--) {   // este for va de atras para adelante, tener en cuenta que
      invertida = invertida + this[i-1];     // length me da el largo del string, ej: "toni" = 4, pero 
    }                                        // i comienza en 0, t=0 o=1 n=2 i=3, entonces this debe iniciar
    return invertida;                        // en i = 3, para ello se pone [i-1];
  }
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }

    detalle(){
     return {
      Nombre :this.nombre,
      Apellido: this.Apellido,
      Edad: this.edad,
      Domicilio: this.domicilio,
      }
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada

  var nuevaPersona1 = new Persona(nombre, apellido, edad, dir);
  return nuevaPersona1;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"

  Persona.prototype.datos = function(){
    return this.nombre+ ", " +this.edad+" años";
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
