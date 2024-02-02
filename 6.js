var idade = parseInt(prompt("Informe sua idade"))

if (idade >=12){
  alert("")
}
else if (idade >=16 && idade <18 ){
    alert("opcional")
}
else if (idade >= 18 && idade <69 ){
  alert("obrigatorio")
}
else{
  alert("idoso")
}
