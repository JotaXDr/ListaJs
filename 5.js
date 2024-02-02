var idade = parseInt(prompt("Informe sua idade"))

if (idade <=12){
  alert("criança")
}
else if (idade >= 13 && idade <=17 ){
    alert("adloescente")
}
else if (idade >= 18 && idade <60 ){
  alert("adulto")
}
else{
  alert("idoso")
}
