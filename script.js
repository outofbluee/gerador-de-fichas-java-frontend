const formulario = document.getElementById("fichaForm");

const nomeDoPaciente = document.getElementById("nomeDoPaciente");
const dataDaConsulta = document.getElementById("dataDaConsulta");
const horarioDaConsulta = document.getElementById("horarioDaConsulta");
const nomeDoMedico = document.getElementById("nomeDoMedico");
const nomeDoAgenteDeSaude = document.getElementById("nomeDoAgenteDeSaude");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    gerar();
});

function gerar() {
    // TODO: Criar objeto e fazer POST

    const ficha = {
        nomeDoPaciente: nomeDoPaciente.value,
        dataDaConsulta: dataDaConsulta.value,
        horarioDaConsulta: horarioDaConsulta.value,
        nomeDoMedico: nomeDoMedico.value,
        nomeDoAgenteDeSaude: nomeDoAgenteDeSaude.value
    };

    fetch("http://localhost:8080/api/v1/fichas", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ficha)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}