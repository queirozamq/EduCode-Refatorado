const resposta = document.getElementById("resposta");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {
    if (resposta.value === "3") {
        resultado.textContent = "Parabéns! Resposta correta!";
        resultado.style.color = "#00b894"; 
        
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
    } else {
        resultado.textContent = "Tente novamente!";
        resultado.style.color = "#d63031"; 
        
        resposta.classList.add("shake");
        
        setTimeout(function() {
            resposta.classList.remove("shake");
        }, 400);
    }
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Tema Claro";
    } else {
        themeToggle.textContent = "🌙 Tema Escuro";
    }
});