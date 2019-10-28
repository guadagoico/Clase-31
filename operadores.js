/** EJERCICIO 27 **/
let numero1 = 5;
let numero2 = 6;

console.log("sumo 5 + 6 y da:", numero1 + numero2)
console.log("resto 5 -6 y da:", numero1 - numero2)
console.log("multiplico 5 * 6 y da:", numero1 * numero2)
console.log("divido 5 / 6 y da:", numero1 / numero2)
console.log("El resto de  5 % 6 y da:", numero1 % numero2)


/** EJERCICIO 28 **/

let numero= 9;

console.log("La tabla del 9:" + " " + numero * 1, numero * 2, numero * 3, numero * 4, numero * 5, numero * 6, numero * 7, numero * 8, numero * 9, numero * 10);


/** EJERCICIO 29 **/

let cuadrado= 10;

console.log("El perimetro del cuadrado es:" + " " + cuadrado*4);


/** EJERCICIO 30 **/

let lado=5;
console.log("El area del cuadrado es:"  + " " + lado*2 );


/** EJERCICIO 31 **/

let lado1=5;

let lado2=10;

let lado3=20;

console.log("El perimetro del triangulo es:", + lado1 + lado2 + lado3 );


/** EJERCICIO 32 **/

let altura=10;
let base=4;

console.log("El perímetro es:" + " " + altura + base + " " + "y el área es:" + " " + altura*base);


/**EJERCICIO 33 **/

let cantidadDePersonas =100
cantidadDePersonas +=5
console.log("Cantidad de Personas:" + " " + cantidadDePersonas);

cantidadDePersonas -=3
console.log("Cantidad de personas:" + " " + cantidadDePersonas);

cantidadDePersonas *=2;
console.log("Cantidad de personas:" + " " + cantidadDePersonas);

/**EJERCICIOS 34 */
let ingresos =1000;
let ganancias =600;
let impuestos =500;

console.log("Objetivo de ingresos: true o false", ingresos >= 800); 
console.log("Objetivo de impuestos: true o false", ingresos <= 400); 
console.log("Bono de ganancias: true o false", ingresos == 400); 


/**EJERCICIO 35*/
let numeroDeCliente=143245
let numeroDeClienteIngresado=143245;

console.log("El número ingresado por el cliente es correcto:", (numeroDeCliente == numeroDeClienteIngresado))
console.log("El cliente ingresó un número de cliente válido:", (numeroDeCliente === numeroDeClienteIngresado))

/**EJERCICIO 36*/
let numero11= 10;
let numero22= 20;

console.log("La variable numero1 y numero2 tienen el mismo valor:", numero11 != numero22);
console.log("La variables numero1 y numero2 son distintas:", numero11 !== numero22);

/**EJERCICIO 37*/
let promedioParaAprobar= 6;
let promedioDelAlumno= 4;

console.log("El alumno tiene un promedio mayor o igual que el requerido:", promedioDelAlumno >= promedioParaAprobar)
console.log("Al alumno le faltaron", (promedioParaAprobar - promedioDelAlumno), "para aprobar");