//Generar una plataforma de aprendizaje con selección de temas. 

console.log("¡Bienvenido a la plataforma de aprendizaje para principiantes!");

// Lección #1
/*Saludar al usuario despues de pedirle su nombre, si no ingresa un nombre, saludarlo de manera genérica.*/
const nombreAlumno = prompt("Porfavor ingrese su nombre: ");

if (nombreAlumno) {
    const saludarAlumno = alert("¡Hola " + nombreAlumno + ", bienvenid@! 👋");
}
else {
    const saludarAlumnoGenerico = alert("¡Hola alumn@, bienvenid@! 👋");      //Si no ingresa un nombre, se saluda de manera genérica     
}
console.log(`¡Vamos a aprender juntos!`);

function mostrarMenu() {      //Se genera un menu de opciones para acceder a las lecciones
    const menu = `
    Seleccione una lección:
    1. Operaciones básicas
    2. Agrupar números pares e impares
    3. Calculadora con funciones matemáticas
    4. Tarjetas de estudio
    5. Salir
    `;
    return prompt(menu);
}

let continuar = true;
while (continuar) {
    const menu = mostrarMenu();
    switch (menu) {
        case "1":
            console.log("---Operaciones básicas---");
            operacionesBasicas();
            break;
        case "2":
            console.log("---Agrupar números pares e impares---");
            agruparNumeros();
            break;
        case "3":
            console.log("---Calculadora con funciones matemáticas---");
            operacionesMatematicas();
            break;
        case "4":
            console.log("---Tarjetas de estudio---");
            estudio();
            break;
        case "5":
            console.log("---Sesión finalizada---");
            continuar = false;
            break;
        default:
            alert("Opcion no valida ⚠️.");
            break;
    }
}

// Lección #2
/*Realizar un programa que solicite al usuario dos números y un operador (+, -, *, /) y luego realice la operación correspondiente. Usando if, else y switch*/
function operacionesBasicas() {
    console.log("En esta leccion se realizaran operaciones basicas.");
    console.log("Ingrese dos números y un operador (+, -, *, /) para realizar la operación correspondiente."); 
    let numeroUnoOperaciones = parseInt(prompt("Ingrese el primer numero"));
    if (isNaN(numeroUnoOperaciones)) {
        alert("Por favor, ingrese un número válido.");
        numeroUnoOperaciones = parseInt(prompt("Ingrese el primer numero"));

        if (isNaN(numeroUnoOperaciones)) {      // Evaluamos el segundo intento con IF/ELSE puro
            alert("Segundo intento fallido ⚠️. Se asignará 1 por defecto.");
            numeroUnoOperaciones = 1;
        }
    }
    console.log(`El primer numero es: ${numeroUnoOperaciones}`);

    let numeroDosOperaciones = parseInt(prompt("Ingrese el segundo numero"));
    if (isNaN(numeroDosOperaciones)) {
        alert("Por favor, ingrese un número válido.");
        numeroDosOperaciones = parseInt(prompt("Ingrese el segundo numero"));
    
        if (isNaN(numeroDosOperaciones)) {      // Evaluamos el segundo intento con IF/ELSE puro
            alert("Segundo intento fallido ⚠️. Se asignará 1 por defecto.");
            numeroDosOperaciones = 1;
        }
    }
    console.log(`El segundo numero es: ${numeroDosOperaciones}`);

    let resultadoOperaciones = 0;
    const operadorPermitidos = ["+", "-", "*", "/"];
    let operador = prompt("Ingrese el operador (+, -, *, /)");

    if (!operadorPermitidos.includes(operador)) {
    alert("Operador no permitido ⚠️.");
    operador = prompt("Ingrese el operador: +, -, *, /");
    }
    else {
        switch (operador) {      //Se utiliza el switch para realizar la operación segun el operador
            case "+":
                resultadoOperaciones = numeroUnoOperaciones + numeroDosOperaciones;
                break;
            case "-":
                resultadoOperaciones = numeroUnoOperaciones - numeroDosOperaciones;
                break;
            case "*":
                resultadoOperaciones = numeroUnoOperaciones * numeroDosOperaciones;
                break;
            case "/":
                if (numeroDosOperaciones === 0 || isNaN(numeroDosOperaciones)) {
                    alert("No se puede dividir entre cero ⛔.");
                    numeroDosOperaciones = parseInt(prompt("Por favor ingrese un número diferente a cero:"));
                    
                    if (numeroDosOperaciones === 0 || isNaN(numeroDosOperaciones)) {      // Si insiste en poner cero, le asignamos 1 por defecto para evitar el error matemático
                        alert("Operación inválida ⚠️. Se dividirá entre 1 por defecto.");
                        numeroDosOperaciones = 1;
                    }
                }
                resultadoOperaciones = numeroUnoOperaciones / numeroDosOperaciones;
                break;
        }
        alert("El resultado es: " + resultadoOperaciones);
    }

    console.log(`La operacion es: ${numeroUnoOperaciones} ${operador} ${numeroDosOperaciones}`);
    console.log(`El resultado es: ${resultadoOperaciones}`);
};


// Lección #3
/*Realizar un programa que solicite al usuario una lista de números y luego muestre la lista completa, los números pares y los números impares. Usando while y filter*/
function agruparNumeros() {
    console.log("En esta leccion se agruparan los numeros pares e impares.");
    console.log("Ingrese numeros para formar una lista de números para agrupar."); 
    const listaNumeros = [];
    while (true) {
        const elementoLista = prompt("Ingrese un número para la lista (o escriba 'salir' para terminar)");
        if (elementoLista.toLowerCase() === "salir") {
            break;
        }
        else if (elementoLista === null || isNaN(elementoLista)) {
            alert("Por favor, ingrese un número válido ⚠️.")
            continue;
        }
        else {
            listaNumeros.push(parseInt(elementoLista));
        }
    }
    console.log("La lista es: " + listaNumeros);

    console.log("Numeros pares")
    const pares = [];
    for (let i = 0; i < listaNumeros.length; i++) {      // Se utiliza un for para recorrer la lista y evaluar si el numero es par
        if (listaNumeros[i] % 2 === 0) {
            pares.push(listaNumeros[i]);
        }
    }
    console.log(`Los números pares encontrados son: ${pares}`);

    console.log("Numeros impares")
    const impares = listaNumeros.filter((num) => num % 2 !== 0)      // Se utiliza el filter para recorrer la lista y evaluar si el numero es impar
    console.log(`los numeros impares son: ${impares}`)
};


// Lección #4
/*Funciones que reciben parametros y que retornan un valor para cada operacion matematica*/
function operacionesMatematicas() {
    console.log("En esta leccion se realizaran operaciones matematicas.");
    console.log("Ingrese dos números (si la operación es de raíz cuadrada, solo ingrese un número) y un operador para realizar la operación correspondiente.");
    function sumar(numeroUnoCalculadora, numeroDosCalculadora) {
        return numeroUnoCalculadora + numeroDosCalculadora;
    }

    function restar(numeroUnoCalculadora, numeroDosCalculadora) {
        return numeroUnoCalculadora - numeroDosCalculadora;
    }

    function multiplicar(numeroUnoCalculadora, numeroDosCalculadora) {
        return numeroUnoCalculadora * numeroDosCalculadora;
    }

    function dividir(numeroUnoCalculadora, numeroDosCalculadora) {
        if (numeroDosCalculadora === 0) {
            alert("No se puede dividir entre cero ⛔.");
            return null;
        }
        return numeroUnoCalculadora / numeroDosCalculadora;
    }
    function elevar(numeroUnoCalculadora, numeroDosCalculadora) {
        return Math.pow(numeroUnoCalculadora, numeroDosCalculadora);
    }

    function raizCuadrada(numeroUnoCalculadora) {      //requiere solo un argumento
        if (numeroUnoCalculadora < 0) {
            alert("No se puede calcular la raíz cuadrada de un número negativo");
            return null;
        }
        return Math.sqrt(numeroUnoCalculadora);
    }

    function calcular(operadorCalculadora, numeroUnoCalculadora, numeroDosCalculadora) {      //Utiliza las otras funciones dentro de la funcion
        switch (operadorCalculadora) {
            case "+":
                return sumar(numeroUnoCalculadora, numeroDosCalculadora);
            case "-":
                return restar(numeroUnoCalculadora, numeroDosCalculadora);
            case "*":
                return multiplicar(numeroUnoCalculadora, numeroDosCalculadora);
            case "/":
                return dividir(numeroUnoCalculadora, numeroDosCalculadora);
            case "^":
                return elevar(numeroUnoCalculadora, numeroDosCalculadora);
            case "√":
                return raizCuadrada(numeroUnoCalculadora);
            default:
                alert("Operador no permitido ⚠️.");
                return null;
        }
    }

    function solicitarNumeros(operador) {
        let numeroUno;
        let numeroDos;
        if (operador === "√") {
        numeroUno = parseInt(prompt("Ingrese un número"));
            while (isNaN(numeroUno)) {
                alert("Por favor, ingrese un número válido.");
                numeroUno = parseInt(prompt("Ingrese un número"));
            }
            console.log(`El número es: ${numeroUno}`);
            return [numeroUno, null];
        }
        else {
        numeroUno = parseInt(prompt("Ingrese el primer número"));      //Se vuelve a reescribir el codigo para solicitar numeroUno, usar DRY para hacerlo mantenible añadiria complegidad innecesaria al codigo actual
        while (isNaN(numeroUno)) {
            alert("Por favor, ingrese un número válido.");
            numeroUno = parseInt(prompt("Ingrese el primer número"));
        }
        console.log(`El primer número es: ${numeroUno}`);
        
        numeroDos = parseInt(prompt("Ingrese el segundo número"));
        while (isNaN(numeroDos)) {
            alert("Por favor, ingrese un número válido ⚠️.");
            numeroDos = parseInt(prompt("Ingrese el segundo número"));
        }
        console.log(`El segundo número es: ${numeroDos}`);
        return [numeroUno, numeroDos];
        }
    };

    const operadorPermitidos = ["+", "-", "*", "/", "^", "√"];
    function solicitarOperador() {
        let operador = prompt("Ingrese el operador: +, -, *, /, ^, √");
        while(!operadorPermitidos.includes(operador)) {
            alert("Operador no permitido ⚠️.");
            operador = prompt("Ingrese el operador: +, -, *, /, ^, √");
        }
        return operador;
    };

    const operadorCalculadora = solicitarOperador();
    const [numeroUnoCalculadora, numeroDosCalculadora] = solicitarNumeros(operadorCalculadora)
    const resultadoCalculadora = calcular(operadorCalculadora, numeroUnoCalculadora, numeroDosCalculadora);
    if (resultadoCalculadora !== null){ 
        if (operadorCalculadora === "√") {
        console.log(`El resultado de ${operadorCalculadora} ${numeroUnoCalculadora} es: ${resultadoCalculadora}`);
        }
        else{
            console.log(`El resultado de ${numeroUnoCalculadora} ${operadorCalculadora} ${numeroDosCalculadora} es: ${resultadoCalculadora}`);
        }
    };
};


// Lección #5
/*Ordenar datos como objetos que contengan un metodo y recorrerlos con forEach*/
function estudio() {
    console.log("Se presentan 3 tarjetas de estudio, una de cada lección.");

const estudioLecciones = {
    basicas: [
        {
            titulo: "Estructuras Condicionales",
            explicacion: "En la Lección 2 usamos 'if' y 'switch' para evaluar el operador.",
            mostrar: function() {
                console.log(`--- ${this.titulo.toUpperCase()} ---\n${this.explicacion}`);
            }
        },
        {
            titulo: "Validación de Datos",
            explicacion: "Usamos isNaN() para asegurarnos de que el usuario no ingrese texto.",
            mostrar: function() {
                console.log(`--- ${this.titulo.toUpperCase()} ---\n${this.explicacion}`);
            }
        }
    ],
    agrupar: [
        {
            titulo: "Uso de % para obtener diferencias",
            explicacion: "En la Lección 3 usamos % para obtener la diferencia entre dos números y asi separar pares e impares.",
            mostrar: function() {
                console.log(`--- ${this.titulo.toUpperCase()} ---\n${this.explicacion}`);
            }
        },
        {
            titulo: "Filtrado de Arreglos con filter",
            explicacion: "En la Lección 3 usamos .filter() para separar impares.",
            mostrar: function() {
                console.log(`--- ${this.titulo.toUpperCase()} ---\n${this.explicacion}`);
            }
        },
        {
            titulo: "Recorrido de Arreglos con for",
            explicacion: "En la Lección 3 usamos for para recorrer un arreglo.",
            mostrar: function() {
                console.log(`--- ${this.titulo.toUpperCase()} ---\n${this.explicacion}`);
            }
        },
        {
            titulo: "Creacion de listas",
            explicacion: "En la Lección 3 usamos .push() para añadir elementos a lista.",
            mostrar: function() {
                console.log(`--- ${this.titulo.toUpperCase()} ---\n${this.explicacion}`);
            }
        }
    ],
    funciones: [
        {
            titulo: "Modularización",
            explicacion: "En la Lección 4 aislamos la lógica matemática en funciones independientes.",
            mostrar: function() {
                console.log(`--- ${this.titulo.toUpperCase()} ---\n${this.explicacion}`);
            }
        }
    ]
};

    const maximoBasicas = estudioLecciones.basicas.length;
    const indiceAzarBasicas = Math.floor(Math.random() * maximoBasicas);     //Uso de .floor y Math.random para generar un índice aleatorio dentro de la longitud de estudioLecciones.

    const maximoAgrupar = estudioLecciones.agrupar.length;
    const indiceAzarAgrupar = Math.floor(Math.random() * maximoAgrupar);

    // No se crea un indiceAzar para funciones ya que solo existe una tarjeta en estudioLecciones.funciones

    const tarjetaBasica = estudioLecciones.basicas[indiceAzarBasicas]; //Se utiliza el indiceAzar para acceder a una tarjeta aleatoria
    const tarjetaAgrupar = estudioLecciones.agrupar[indiceAzarAgrupar];
    const tarjetaFunciones = estudioLecciones.funciones[0]; // Se utiliza 0 para acceder si solo existe una tarjeta

    const tusTresTarjetas = [tarjetaBasica, tarjetaAgrupar, tarjetaFunciones];

    tusTresTarjetas.forEach((tarjeta) => {tarjeta.mostrar();
        console.log("-----------------------------------------");
});
    alert("Presione ACEPTAR cuando termine de revisar sus tarjetas en la consola para volver al menú.");

};



