// Questão 1 --------------------------------------------------------

// Crie um novo projeto com uma página que tenha 1 botão com o rótulo "Gerar". Para essa questão, crie um
// ouvinte de evento (addEventListener) no referido botão que realiza uma chamada para uma função
// gerarNumero()
// que retorna um número aleatório entre 1 e 100 usando a função Math.random(). Mostre todos os números
// gerados, para o usuário em elementos li dentro de um ul

const buttonQ1 = document.getElementById("buttonQ1");
const ulQ1 = document.querySelector("#ul-Q1");

buttonQ1.addEventListener("click", () => {

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const li = document.createElement("li");
    li.textContent = randomNumber;
    ulQ1.appendChild(li);
});

// Questão 2 -------------------------------------------------------

// Crie um novo projeto com uma página que tenha 2 campos de texto com os seguintes rótulos: base e
// expoente, e 1 botão com o rótulo "Calcular". Para essa questão, crie um ouvinte de evento no referido
// botão que busca os valores digitados e realiza uma chamada para uma função calcularPotencia(base,
// expoente) que você irá implementar usando arrow function e que invoca a função Math.pow() e mostra o
// número gerado para o usuário em uma div.

const buttonQ2 = document.getElementById("buttonQ2");
const divQ2 = document.querySelector("#div-Q1");

buttonQ2.addEventListener("click", () => {
    let base = document.getElementById("inputBase").value;
    let expoente = document.getElementById("inputExpoente").value;
    if (base != "" && expoente != "") calcularPotencia(base, expoente);
});

function calcularPotencia(base, expoente) {
    let potencia = Math.pow(base, expoente);
    const paragrafo = document.createElement("p");
    paragrafo.textContent = `${base} elevado a ${expoente} resulta em ${potencia}`;
    divQ2.appendChild(paragrafo);

    // Zerando os inputs
    document.getElementById("inputBase").value = "";
    document.getElementById("inputExpoente").value = "";
}

// Questão 3 -------------------------------------------------------

// Crie um novo projeto com uma página e dois campos para que o usuário possa digitar o valor atual da
// gasolina e do álcool e um botão para realizar o cálculo e informar ao usuário qual o melhor combustível
// para abastecer no momento, crie uma função chamada calcularMelhorCombustivel que recebe os dois valores
// e retorna 0 para gasolina e 1 para álcool.

const buttonQ3 = document.getElementById("buttonQ3");
const divQ3 = document.querySelector("#div-Q3");

buttonQ3.addEventListener("click", () => {
    let gasValue = document.getElementById("inputGasolina").value;
    let alcoolValue = document.getElementById("inputAlcool").value;

    let textValue = "";
    const paragrafo = document.createElement("p");
    let compVal = calcularMelhorCombustivel(alcoolValue, gasValue);

    if (compVal == 2) {
        paragrafo.textContent = `Os dois combustiveis possuem o mesmo preço`;
    } else {
        if (calcularMelhorCombustivel(alcoolValue, gasValue) == 1) textValue = "álcool";
        else if (calcularMelhorCombustivel(alcoolValue, gasValue) == 0) textValue = "gasolina";
        paragrafo.textContent = `O melhor combustivel neste caso é ${textValue}`;
    }

    divQ3.appendChild(paragrafo);

    document.getElementById("inputGasolina").value = "";
    document.getElementById("inputAlcool").value = "";

});

function calcularMelhorCombustivel(alcool, gasolina) {
    if (alcool < gasolina) {
        return 1;
    } else if (gasolina < alcool) {
        return 0;
    } else return 2;
}

// Questão 4 -------------------------------------------------------

// Crie um projeto com uma página contendo um campo de texto onde o usuário vai digitar uma temperatura em escala Celsius.O que deve ser feito:
// Crie duas funções, uma para converter a temperatura para Fahrenheit(converterFahrenheit) e outra para converter para Kelvin(converterKelvin).
// Crie um ouvinte de evento 'keyup' no campo de texto para atualizar os elementos do tipo span #temp - fahrenheit e #temp - kelvin com as temperaturas nas respectivas escalas à medida que o usuário digita um valor numérico.
// Caso o usuário não tenha digitado nada ou o valor seja inválido, o valor das temperaturas após a conversão deve ser um “-”, logo abaixo deve existir uma mensagem pedindo para o usuário digitar um valor.


let inputElement = document.getElementById("inputTempCelsius");

let spanFahrenheit = document.getElementById("temp-fahrenheit");
let spanKelvin = document.getElementById("temp-kelvin");
let mensagem = document.getElementById("mensagemQ4");
inputElement.addEventListener('keyup', () => {

    let tempCelsius = parseFloat(inputElement.value);

    if (isNaN(tempCelsius)) {
        mensagem.textContent = 'Digite um valor numérico válido.';
        spanFahrenheit.textContent = '-';
        spanKelvin.textContent = '-';
    } else {
        mensagem.textContent = '';
        const fahrenheit = celciusParaFahrenheit(tempCelsius);
        const kelvin = celciusParaKelvin(tempCelsius);
        spanFahrenheit.textContent = `${fahrenheit} °F`;
        spanKelvin.textContent = `${kelvin} K`;
    }
});

function celciusParaFahrenheit(temp) {
    return (temp * (9 / 5)) + 32;
}

function celciusParaKelvin(temp) {
    return temp + 273.15;
}

// Questão 5 -------------------------------------------------------

// Crie um projeto com apenas um botão com rótulo “Simular”. Esse botão deve estar associado a um evento
// que vai realizar uma simulação de um rolamento de dados comuns (com valores de 1 a 6) 1 milhão de vezes.
// Ao final, deve mostrar na tela quantas vezes cada um dos números apareceu na simulação. Use o método
// Math.random() pra gerar esse número entre 1 e 6, fazendo o arredondamento quando necessário.

const buttonQ5 = document.getElementById("buttonQ5");
const divQ5 = document.querySelector("#div-Q5");

buttonQ5.addEventListener("click", () => {
    let numberArray = [["1", 0], ["2", 0], ["3", 0], ["4", 0], ["5", 0], ["6", 0]];

    for (let k = 0; k < 1000000; k++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        numberArray.forEach(element => {
            if (randomNumber == element[0]) {
                element[1] += 1;
            }
        });

    }
    console.log(numberArray);
    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = `Foram sorteados os números da seguinte forma: <br>
1 : ${numberArray[0][1]}<br>
2 : ${numberArray[1][1]}<br>
3 : ${numberArray[2][1]}<br>
4 : ${numberArray[3][1]}<br>
5 : ${numberArray[4][1]}<br>
6 : ${numberArray[5][1]}
`;
    divQ5.appendChild(paragrafo);


});