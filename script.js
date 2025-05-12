
const dataForm = document.getElementById("dataForm");
const nomeAlunoInput = document.getElementById("nomeAluno");
const tipoEstudoInput = document.getElementById("tipoEstudo");
const horasEstudoInput = document.getElementById("horasEstudo");
const dataEstudoInput = document.getElementById("dataEstudo");
const materiaEstudoInput = document.getElementById("materiaEstudo");
const periodoEstudoInput = document.getElementById("periodoEstudo");
const resultContainer = document.getElementById("resultContainer");
const limparTudo = document.getElementById("limparTudo");
const paginaAva = document.getElementById("paginaAva");

//Salvar os dados
dataForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeAluno = nomeAlunoInput.value.trim();
    const tipoEstudo = tipoEstudoInput.value.trim();
    const horasEstudo = horasEstudoInput.value.trim();
    const dataEstudo = dataEstudoInput.value.trim();
    const materiaEstudo = materiaEstudoInput.value.trim();
    const periodoEstudo = periodoEstudoInput.value.trim();

    if (nomeAluno === "" || tipoEstudo === "" || horasEstudo === "" || dataEstudo === "" || materiaEstudo === "" || periodoEstudo === "") {
        alert("Preencha todos os campos antes de salvar.");
        return;
    }

    const novoRegistro = {
        nome: nomeAluno,
        tipo: tipoEstudo,
        horas: horasEstudo,
        data: dataEstudo,
        materia: materiaEstudo,
        periodo: periodoEstudo
    };

    
    let estudos = JSON.parse(localStorage.getItem("estudos")) || [];
    estudos.push(novoRegistro);
    localStorage.setItem("estudos", JSON.stringify(estudos));

    atualizarTela(estudos);
    dataForm.reset();

});

//limpar os dados de confirmação
limparTudo.addEventListener("click", function () {
    if(confirm("Tem certeza que deseja apagar todos os registros")) { //função para confirmar antes de apagar
        localStorage.removeItem("estudos");
        resultContainer.innerHTML = "<strong>Todos os estudos foram apagados.</strong>";

        dataForm.reset();
    }  
})
    
// Atualizar resultado na tela
function atualizarTela(estudos) {
    let html = "<strong>Seus estudos foram salvos:</strong><br>";

    html += estudos.map(e =>
        `Nome: ${e.nome} | Tipo: ${e.tipo} | Horas: ${e.horas} | Data: ${e.data} | Matéria: ${e.materia} | Período/Semestre: ${e.periodo}`
    ).join("<br>");
    
    html += `<br><br><em>Total: ${estudos.length} estudos registrados. </em>`;

    resultContainer.innerHTML = html; 
  }


// Carregar ao iniciar
window.addEventListener("load", function () {
    let estudos = JSON.parse(localStorage.getItem("estudos")) || [];
    if (estudos.length > 0) {
        atualizarTela(estudos);
    }
});



     //Ir para a página de estudos
    // Espera o clique no botão e redireciona para "ava.html"
    paginaAva.addEventListener("click", function () {
        window.location.href = 'ava.html';
    });