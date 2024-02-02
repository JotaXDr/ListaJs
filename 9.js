
var peso = prompt("Digite seu peso em quilogramas:");
var altura = prompt("Digite sua altura em metros:");


peso = parseFloat(peso);
altura = parseFloat(altura);


const imc = peso / (altura * altura);



  if (imc < 18.5) {
    alert("Abaixo")
  } else if (imc >= 18.5 && imc < 24.9) {
    alert("Normal")
  } else if (imc >= 25 && imc < 29.9) {
      alert("Sobrepeso")
  } else if (imc >= 30 && imc < 34.9) {
    alert("Obesidade Grau I")
  } else if (imc >= 35 && imc < 39.9) {
    alert("Obesidade Grau II")
  } else {
    alert("Obesidade Grau III")
  }



console.log(`Seu IMC é ${imc.toFixed(2)} e você está classificado como: ${categoriaIMC}`);
