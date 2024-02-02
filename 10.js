var escolha = prompt("Você é homem ou mulher? Digite H para homem e M para mulher");

var altura = parseFloat(prompt("Informe sua altura"));

if (escolha === "H") {
  var resultado = (72.7 * altura) - 58;
  alert("Seu peso ideal é: " + resultado.toFixed(2) + " kg");
} else if (escolha === "M") {
  var resultado = (62.1 * altura) - 44.7;
  alert("Seu peso ideal é: " + resultado.toFixed(2) + " kg");
} else {
  alert("Escolha inválida. Digite H para homem ou M para mulher.");
}

