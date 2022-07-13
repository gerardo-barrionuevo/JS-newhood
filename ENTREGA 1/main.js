class Persona {
    constructor(nombreCompleto, pesoActual, pesoIdeal) {
      (this.nombreCompleto = nombreCompleto),
        (this.pesoActual = pesoActual),
        (this.pesoIdeal = pesoIdeal),
        this.KilosABajar;
    }
  
    imprimirNombre() {
      return `Persona: ${this.nombreCompleto}`;
    }
  
    obtenerKilosABajar() {
      return (this.KilosABajar = this.pesoActual - this.pesoIdeal);
    }
  }
  
  function crearPersona() {
    const nombreCompleto = prompt(
      "Bienvenidx a DietaClub! Cuál es tu nombre completo?"
    );
    const pesoActual = parseFloat(
      prompt(
        "Hola " +
          nombreCompleto +
          "!" +
          "\n" +
          "Por favor, ingresá tu peso actual"
      )
    );
    const pesoIdeal = parseFloat(
      prompt("Muy bien, cuál es el peso que querés alcanzar?")
    );
    return new Persona(nombreCompleto, pesoActual, pesoIdeal);
  }
  
  let persona1 = crearPersona();
  
  persona1.imprimirNombre();
  console.log("Función imprimirNombre ", persona1.imprimirNombre());
  alert(persona1.imprimirNombre());
  
  alert(
    "Te quedan " + persona1.obtenerKilosABajar().toFixed(2) + " kilos a bajar"
  );



let precioPlan = parseInt(prompt("Si va a presentar factura exenta de IVA, ingrese el precio del plan seleccionado y se indicará el precio final:"));
let DescuentoIva = 21;
function calcularPrecioConDescuento(precioPlan, DescuentoIva) {
  let descuento = (precioPlan * DescuentoIva) / 100; //calculo el descuento
  let precioConDescuento = precioPlan - descuento; //se lo aplico al precio
  return precioConDescuento; //retorno el precio con el descuento
}

let precioFinal = calcularPrecioConDescuento(precioPlan, DescuentoIva);

alert("El precio final del plan sería: $" + precioFinal);