let treinoSemana = document.querySelector("#treino")
let dietaSemana = document.querySelector("#dieta")
const ver = document.querySelector("#ver")

const resultado = document.querySelector("#resultado");



    ver.addEventListener("click", function() {
        // Convertendo os valores para números
        const treinoValor = parseInt(treinoSemana.value);
        const dietaValor = parseInt(dietaSemana.value);

        if (treinoValor >= 5 && dietaValor >= 4) {
            resultado.innerHTML = "Pode comer subway     ";
            const imagemSubway = document.createElement("img");
            imagemSubway.src = "Imgs/gatoComendoSanduiche.jpg";
            imagemSubway.alt = "Subway";

            imagemSubway.width = 200; // Defina a largura desejada em pixels
            imagemSubway.height = 150; // Defina a altura desejada em pixels
            
            resultado.appendChild(imagemSubway);
        } else if (treinoValor >= 3 && dietaValor >= 2) {
            resultado.innerHTML = "Pode comer açaí com banana   ";
            const imagemAcai = document.createElement("img");
        imagemAcai.src = "Imgs/gatoComendoAcai.jfif";
        imagemAcai.alt = "Açaí com Banana";

        imagemAcai.width = 200; // Defina a largura desejada em pixels
        imagemAcai.height = 150; // Defina a altura desejada em pixels
        
        resultado.appendChild(imagemAcai);
        } else {
            resultado.innerHTML = "Vai comer nada não, pião   ";
            const imagemNada = document.createElement("img");
        imagemNada.src = "Imgs/gatoComRaiva.jfif";
        imagemNada.alt = "Nada";

        imagemNada.width = 200; // Defina a largura desejada em pixels
        imagemNada.height = 150; // Defina a altura desejada em pixels

        resultado.appendChild(imagemNada);
    }
});
    
    
    
    
    