const diasemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
const fimsemana = ["Sábado", "Domingo"];

var user = prompt("Digite um dia");

user = user.toLowerCase();

if (diasemana.includes(user)) {
  alert("É um dia de semana");
} else if (fimsemana.includes(user)) {
  alert("Final de semana");
} else {
  alert("Por favor, insira um dia válido.");
}
