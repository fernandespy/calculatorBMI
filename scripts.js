//Entrada dos valores
var nome = prompt('Informe o seu nome:');
var altura = prompt('Informe a sua altura:');
var peso = prompt('Informe o seu peso:');

//transforma os dados em float
altura = parseFloat(altura);
peso = parseFloat(peso);

//converte cm em metros
altura = altura / 100;

//faz o calculo do imc e atribui a variavel
var imc = peso / (altura * altura);

imc = parseFloat(imc);

//verifica o valor atribui e atribui a classificação


if (imc < 16) {
    classificacao = 'Baixo peso muito grave';
} else if (imc >= 16 && imc <= 16.99) {
    classificacao = 'Baixo peso grave';
} else if (imc >= 17 && imc <= 18.49) {
    classificacao = 'Baixo peso';
} else if (imc >= 18.50 && imc <= 24.99) {
    classificacao = 'Peso normal';
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = 'Sobrepeso';
} else if (imc >= 30 && imc <= 34.99) {
    classificacao = 'Obesidade grau |';
} else if (imc >= 35 && imc <= 39.99) {
    classificacao = 'Obesidade grau ||';
} else {
    classificacao = 'Obesidade grau |||';
}

document.write(nome + ' possui índice de massa corporal igual a ' + imc + ',' + ' sendo classificado como: ' + classificacao);