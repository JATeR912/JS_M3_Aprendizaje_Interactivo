# Plataforma de Aprendizaje Interactivo para Principiantes 🚀

Bienvenid@ a la **Plataforma de Aprendizaje Interactivo**, una aplicación de consola diseñada para ayudar a estudiantes principiantes a repasar y consolidar los conceptos fundamentales de la programación en JavaScript de manera dinámica y estructurada.

---

## 📝 Descripción del Proyecto

El proyecto consiste en un entorno de estudio modularizado que interactúa con el usuario a través de ventanas emergentes (`prompt` y `alert`) y muestra los resultados directamente en la consola del navegador. La aplicación está organizada en base a las cinco primeras lecciones del módulo de fundamentos:

**Lección 1 (Introducción):** Interacción inicial mediante un saludo personalizado o genérico según el ingreso del usuario.
**Lección 2 (Operaciones Básicas):** Ejecución de cálculos aritméticos simples controlados mediante estructuras condicionales (`if`, `else`) y sentencias de selección (`switch`), incluyendo validaciones para evitar la división por cero.
**Lección 3 (Arreglos y Ciclos):** Recolección dinámica de datos en una lista usando bucles de repetición (`while`). Clasifica la información de forma mixta: los números pares mediante un ciclo tradicional (`for`) y los números impares aplicando métodos funcionales eficientes (`.filter()`).
**Lección 4 (Funciones y Modularización):** Una calculadora avanzada compuesta por funciones independientes que reciben parámetros y retornan valores. Permite realizar operaciones complejas como potencias (`Math.pow`) y raíces cuadradas (`Math.sqrt`) optimizadas mediante la reutilización de código.
**Lección 5 (Objetos y Métodos):** Un banco de datos estructurado mediante un arreglo de objetos. Cada objeto cuenta con sus propias propiedades y un método interno que utiliza el operador de contexto `this` para formatear y presentar tarjetas de estudio de forma aleatoria a través de un recorrido con el iterador `.forEach()`.


## 🕹️ Estructura y Funcionamiento del Menú Principal

El corazón de la aplicación está controlado por un **bucle iterativo continuo (`while`)** y una **sentencia de selección múltiple (`switch`)**. Esta combinación permite que el programa no se cierre tras ejecutar una acción, sino que mantenga al usuario dentro de un ciclo de aprendizaje activo hasta que decida finalizarlo de forma explícita (opcion 5 - salir).

Al interactuar con el menú, el sistema procesa las siguientes opciones:

1.  **Opción 1 (Operaciones Básicas):** Redirige a la leccion 2.
2.  **Opción 2 (Agrupar números pares e impares):** Redirige a la leccion 3.
3.  **Opción 3 (Calculadora con funciones matemáticas):** Redirige a la leccion 4.
4.  **Opción 4 (Tarjetas de estudio):** Redirige a la leccion 5.
5.  **Opción 5 (Salir):** Modifica el estado de la variable de control del bucle (`continuar = false`), rompiendo el ciclo y permitiendo una finalización limpia de la aplicación.


---

## 🛠️ Instalación

Este proyecto **no requiere de ninguna instalación previa** ni dependencias complejas. Está construido con JavaScript puro (Vanilla JS), por lo que es completamente portable y se puede ejecutar de forma directa en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, entre otros).

---

## 💻 Modo de Uso

Para garantizar una experiencia fluida y poder visualizar el contenido interactivo junto con las respuestas del sistema, se sugiere seguir estos pasos:

1.  **Abrir el archivo:** Ejecuta el archivo `index.html` (o el nombre de tu archivo principal) en tu navegador preferido.
2.  **Primer contacto:** Ingresa tu nombre en la ventana emergente para recibir el saludo de la plataforma.
3.  **Configuración de la Consola (Recomendado):** Al aparecer el menú principal en pantalla, se recomienda seleccionar inicialmente la **Opción 5 (Salir)**. Esto liberará la interfaz del navegador.
4.  **Abrir Herramientas de Desarrollo:** Presiona la tecla **F12** (o haz clic derecho en cualquier parte de la pantalla y selecciona *Inspeccionar*), luego dirígete a la pestaña **Consola** (Console).
5.  **Reiniciar la Experiencia:** Con la consola ya abierta a un costado de tu pantalla, **reinicia la página (F5)**. Ahora podrás interactuar con los menús emergentes y observar al mismo tiempo cómo se imprimen los datos, los flujos y las tarjetas de estudio de manera limpia en tiempo real en la consola.

---

Este proyecto fue desarrollado siguiendo las especificaciones técnicas y requerimientos prácticos solicitados para la evaluación del Módulo 3