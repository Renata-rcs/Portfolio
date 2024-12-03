const textoDigitado = document.getElementById("texto-digitado")
const cursor = document.getElementById("cursor")
const textos = ["programadora", "estudante"]
const digitarDelay = 200
const apagarDelay = 100
const novoTextoDelay = 2000
let textoIndex = 0
let charIndex = 0

function escrever() {
    if(charIndex < textos[textoIndex].length) {
        if(!cursor.classList.contains("escrevendo")) cursor.classList.add("escrevendo")
        textoDigitado.textContent += textos[textoIndex].charAt(charIndex)
        charIndex++
        setTimeout(escrever, digitarDelay)
    } 
    else {
        cursor.classList.remove("escrevendo")
        setTimeout(apagar, novoTextoDelay)
    }
}

function apagar(){
    if(charIndex > 0) {
        if(!cursor.classList.contains("escrevendo")) cursor.classList.add("escrevendo")
        textoDigitado.textContent = textos[textoIndex].substring(0, charIndex - 1)
        charIndex--
        setTimeout(apagar, apagarDelay)
    }
    else {
        cursor.classList.remove("escrevendo")
        textoIndex++
        if(textoIndex >= textos.length) textoIndex = 0;
        setTimeout(escrever, digitarDelay + 1100)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if(textos.length) setTimeout(escrever, novoTextoDelay)
})


// Remove a classe 'active' de todos os projetos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const projetos = document.querySelectorAll(".projeto-display");
    const projetosAddon = document.querySelectorAll(".projeto-display-addon");

    // Inicializa os projetos: apenas o primeiro ficará ativo
    projetos.forEach((projeto, index) => {
        if (index === 0) {
            projeto.classList.add("active");
            projetosAddon[index].classList.add("active");
        } else {
            projeto.classList.remove("active");
            projetosAddon[index].classList.remove("active");
        }
    });
});

// Função para ativar/desativar projetos ao clicar
function ativaProjeto(projeto) {
    // Seleciona todos os projetos e desativa-os
    const projetos = document.querySelectorAll(".projeto-display");
    const projetosAddon = document.querySelectorAll(".projeto-display-addon");

    projetos.forEach((p, index) => {
        if (p === projeto) {
            // Ativa apenas o projeto clicado
            p.classList.toggle("active");
            projetosAddon[index].classList.toggle("active");
        } else {
            // Desativa todos os outros
            p.classList.remove("active");
            projetosAddon[index].classList.remove("active");
        }
    });
}

