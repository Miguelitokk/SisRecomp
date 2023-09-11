let treinoSemana = document.querySelector("#treino")
let dietaSemana = document.querySelector("#dieta")
const ver = document.querySelector("#ver")

const resultado = document.querySelector("#resultado");



    ver.addEventListener("click", function() {
        // Convertendo os valores para números
        const treinoValor = parseInt(treinoSemana.value);
        const dietaValor = parseInt(dietaSemana.value);

        if (treinoValor >= 5 && dietaValor >= 4) {
            resultado.innerHTML = "Pode comer subway";
        } else if (treinoValor >= 3 && dietaValor >= 2) {
            resultado.innerHTML = "Pode comer açaí com banana";
        } else {
            resultado.innerHTML = "Vai comer nada não, pião";
        }
    });
   
    
    
    
    
    