// Questão 1 --------------------------------------------------------

const buttonQ1 = document.getElementById("buttonQ1");
const ulQ1 = document.querySelector("#ul-Q1");

buttonQ1.addEventListener("click", ()=> {
    console.log("fngangiaeg");
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const li = document.createElement("li");
    li.textContent = randomNumber;
    ulQ1.appendChild(li);
});

// Questão 2 -------------------------------------------------------

const buttonQ2 = document.getElementById("buttonQ2");
const divQ2 = document.querySelector("#div-Q1");

buttonQ2.addEventListener("click", ()=>{
    let base = document.getElementById("inputBase").value;
    let expoente = document.getElementById("inputExpoente").value;
    if(base != "" && expoente != "") calcularPotencia(base, expoente);
});

function calcularPotencia(base, expoente){
    let potencia = Math.pow(base, expoente);
    const paragrafo = document.createElement("p");
    paragrafo.textContent = `${base} elevado a ${expoente} resulta em ${potencia}`;
    divQ2.appendChild(paragrafo);

    // Zerando os inputs
    document.getElementById("inputBase").value = "";
    document.getElementById("inputExpoente").value = "";
}

// Questão 3 -------------------------------------------------------

const buttonQ3 = document.getElementById("buttonQ3");
const divQ3 = document.querySelector("#div-Q3");

buttonQ3.addEventListener("click", ()=> {
    let gasValue = document.getElementById("inputGasolina").value;
    let alcoolValue = document.getElementById("inputAlcool").value;

    let textValue = "";
    
    if (calcularMelhorCombustivel(alcoolValue, gasValue) == 1){
        textValue = "álcool";
    } else {
        textValue = "gasolina";
    }
    const paragrafo = document.createElement("p");
    paragrafo.textContent = `O melhor combustivel neste caso é ${textValue}`;
    divQ3.appendChild(paragrafo);

    document.getElementById("inputGasolina").value = "";
    document.getElementById("inputAlcool").value = "";

});

function calcularMelhorCombustivel(alcool, gasolina){
    return (gasolina < alcool) ? 0 : 1;
}

// Questão 3 -------------------------------------------------------