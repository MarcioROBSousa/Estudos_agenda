const button = document.getElementById("message");
const paragraph = document.getElementById("mensagemSimples"); // ID do parágrafo onde o texto será exibido


//ADICIONA UM EVENTO DE CLIQUE AO BOTÃO
// => Arrow function expressions
button.addEventListener('click', () => {
    paragraph.textContent = "Querer não é poder, mas estudar é fazer acontecer!!"
})


//Mudar tema da página dia e noite
function toggleMode() {
    const body = document.body;
    const icon = document.getElementById('icon');
  
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
  
    // Alterna ícone sol/lua
    if (body.classList.contains('dark-mode')) {
      icon.textContent = '☀️'; // Sol para modo claro
    } else {
      icon.textContent = '🌙'; // Lua para modo escuro
    }
  }
