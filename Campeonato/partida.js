"use strict";
var formCampeonato = document.getElementById("formPartida");
var tabelaPartidas = document.getElementById("tbPartidas");
var campeonato = document.getElementById("campeonato");
var campeonatos = JSON.parse(localStorage.getItem("campeonatos") || "[]");
var partidas = JSON.parse(localStorage.getItem("partidas") || "[]");
function capturaCampeonato() {
    campeonato.innerHTML = "";
    campeonatos.forEach((c) => {
        campeonato.innerHTML += `
      <option>${c.nome}</option>
    `;
    });
}
function atualizarTabelaP() {
    tabelaPartidas.innerHTML = "";
    partidas.forEach((p) => {
        tabelaPartidas.innerHTML += `
      <tr>
          <td>${p.timeMandante}</td>
          <td>${p.timeVisitante}</td>
          <td>${p.campeonato}</td>
          <td>${p.data}</td>
      </tr>
    `;
    });
}
function salvarPartida(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault(); //cancelar o disparo do evento
    const novaPartida = {
        id: Date.now(),
        timeMandante: document.getElementById("timeMandante").value,
        timeVisitante: document.getElementById("timeVisitante").value,
        campeonato: document.getElementById("campeonato").value,
        data: document.getElementById("data").value,
    };
    partidas.push(novaPartida);
    atualizarTabelaP();
    salvarLocalStorageP();
}
function salvarLocalStorageP() {
    let partidasSalvar = JSON.stringify(partidas);
    localStorage.setItem("partidas", partidasSalvar);
}
document.addEventListener('DOMContentLoaded', () => {
    capturaCampeonato(); // Chama a função quando o DOM estiver pronto
});
atualizarTabelaP();
