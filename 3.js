function  MaiorMenor(num1, num2, num3) {
    return {
        maior: Math.max(num1, num2, num3),
        menor: Math.min(num1, num2, num3)
    };
}

var num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var num2 = parseInt(prompt("Digite o segundo número inteiro:"));
var num3 = parseInt(prompt("Digite o terceiro número inteiro:"));

let { maior, menor } = MaiorMenor(num1, num2, num3);

alert("Maior número: " + maior + "\nMenor número: " + menor);
