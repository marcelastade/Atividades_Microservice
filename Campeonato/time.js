"use strict";
var formCampeonato = document.getElementById("formTime");
var tabelaTimes = document.getElementById("tbTimes");
var times = JSON.parse(localStorage.getItem("times") || "[]");
function atualizarTabelaT() {
    tabelaTimes.innerHTML = "";
    times.forEach((t) => {
        tabelaTimes.innerHTML += `
      <tr>
          <td>${t.time}</td>
          <td>${t.timeCurto}</td>
      </tr>
    `;
    });
}
function salvarTime(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault(); //cancelar o disparo do evento
    const novoTime = {
        id: Date.now(),
        time: document.getElementById("time").value,
        timeCurto: document.getElementById("timeCurto").value,
    };
    times.push(novoTime);
    atualizarTabelaT();
    salvarLocalStorageT();
}
function salvarLocalStorageT() {
    let timesSalvar = JSON.stringify(times);
    localStorage.setItem("times", timesSalvar);
}
atualizarTabelaT();
