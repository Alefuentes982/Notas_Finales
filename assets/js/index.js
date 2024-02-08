// NOTAS HTML
// Solicitar notas de HTML y convertilas en numeros
var nota1HTML = +prompt("Ingresa la primera nota de HTML:");
var nota2HTML = +prompt("Ingresa la segunda nota de HTML:");
var nota3HTML = +prompt("Ingresa la tercera nota de HTML:");

// Seleccionamos la etiqueta por ID
var HTML1 = document.getElementById("HTML1");
var HTML2 = document.getElementById("HTML2");
var HTML3 = document.getElementById("HTML3");
var HTMLPromedio = document.getElementById("HTMLPromedio");

// Asignamos el valor
HTML1.innerHTML = nota1HTML;
HTML2.innerHTML = nota2HTML;
HTML3.innerHTML = nota3HTML;
HTMLPromedio.innerHTML = ((nota1HTML + nota2HTML + nota3HTML) / 3).toFixed(2);

// NOTAS CSS
// Solicitar notas de CSS y convertilas en numeros
var nota1CSS = +prompt("Ingresa la primera nota de CSS:");
var nota2CSS = +prompt("Ingresa la segunda nota de CSS:");
var nota3CSS = +prompt("Ingresa la tercera nota de CSS:");

// Seleccionamos la etiqueta por ID
var CSS1 = document.getElementById("CSS1");
var CSS2 = document.getElementById("CSS2");
var CSS3 = document.getElementById("CSS3");
var CSSPromedio = document.getElementById("CSSPromedio");

// Asignamos el valor
CSS1.innerHTML = nota1CSS;
CSS2.innerHTML = nota2CSS;
CSS3.innerHTML = nota3CSS;
CSSPromedio.innerHTML = ((nota1CSS + nota2CSS + nota3CSS) / 3).toFixed(2);

// NOTAS JAVASCRIPT
// Solicitar notas de JAVASCRIPT y convertilas en numeros
var nota1JAVASCRIPT = +prompt("Ingresa la primera nota de JAVASCRIPT:");
var nota2JAVASCRIPT = +prompt("Ingresa la segunda nota de JAVASCRIPT:");
var nota3JAVASCRIPT = +prompt("Ingresa la tercera nota de JAVASCRIPT:");

// Seleccionamos la etiqueta por ID
var JAVASCRIPT1 = document.getElementById("JAVASCRIPT1");
var JAVASCRIPT2 = document.getElementById("JAVASCRIPT2");
var JAVASCRIPT3 = document.getElementById("JAVASCRIPT3");
var JAVASCRIPTPromedio = document.getElementById("JAVASCRIPTPromedio");

// Asignamos el valor
JAVASCRIPT1.innerHTML = nota1JAVASCRIPT;
JAVASCRIPT2.innerHTML = nota2JAVASCRIPT;
JAVASCRIPT3.innerHTML = nota3JAVASCRIPT;
JAVASCRIPTPromedio.innerHTML = (
  (nota1JAVASCRIPT + nota2JAVASCRIPT + nota3JAVASCRIPT) /
  3
).toFixed(2);
