var nota1 = parseFloat(prompt("Informe a primeira nota"))
var nota2 = parseFloat(prompt("Informe a  segunda nota"))
var nota3 = parseFloat(prompt("Informe a terceira nota"))


resultado = nota1 + nota2 + nota3 / 3

if (nota1 && nota2 && nota3 < 7){
  alert("reprovado")
}
else if (nota1 && nota2 && nota3 > 7){
alert("aprovado")
}
