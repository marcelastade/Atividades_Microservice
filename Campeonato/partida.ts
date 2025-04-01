<<<<<<< HEAD
=======
<<<<<<< HEAD
var formCampeonato = document.getElementById(
    "formPartida"
  ) as HTMLFormElement;
  var tabelaPartidas = document.getElementById("tbPartidas") as HTMLElement;
  var campeonato = document.getElementById("campeonato") as HTMLElement;
  var campeonatos = JSON.parse(localStorage.getItem("campeonatos") || "[]");
  var partidas = JSON.parse(localStorage.getItem("partidas") || "[]");


  interface Campeonato {
    id: number;
    nome: string;
    categoria: string;  
    tipo: string;
    dataInicio: string;
    dataFim: string;
  }

function capturaCampeonato() {
    campeonato.innerHTML = "";
    campeonatos.forEach((c : Campeonato) => {
        campeonato.innerHTML += `
      <option>${c.nome}</option>
    `;
    })
  }

  interface Partida {
    id: number;
    timeMandante: string;
    timeVisitante: string;  
    campeonato: string;
    data: string;
  }

  function atualizarTabelaP() {
    tabelaPartidas.innerHTML = "";
    partidas.forEach((p : Partida) => {
        tabelaPartidas.innerHTML += `
      <tr>
          <td>${p.timeMandante}</td>
          <td>${p.timeVisitante}</td>
          <td>${p.campeonato}</td>
          <td>${p.data}</td>
      </tr>
    `;
    })
  }

  function salvarPartida(event:Event) {
    event?.preventDefault(); //cancelar o disparo do evento
    const novaPartida: Partida = {
      id: Date.now(),
      timeMandante: (document.getElementById("timeMandante") as HTMLInputElement).value,
      timeVisitante: (document.getElementById("timeVisitante") as HTMLInputElement).value,
      campeonato: (document.getElementById("campeonato") as HTMLInputElement).value,
      data: (document.getElementById("data") as HTMLInputElement).value,
    };
    partidas.push(novaPartida)
    atualizarTabelaP()
    salvarLocalStorageP()
  }

  function salvarLocalStorageP() {
    let partidasSalvar = JSON.stringify(partidas);
    localStorage.setItem("partidas", partidasSalvar);
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    capturaCampeonato(); // Chama a função quando o DOM estiver pronto
  });

=======
>>>>>>> ae91f15 (Corrigindo estrutura da pasta Angular no repositório)
var formCampeonato = document.getElementById(
    "formPartida"
  ) as HTMLFormElement;
  var tabelaPartidas = document.getElementById("tbPartidas") as HTMLElement;
  var campeonato = document.getElementById("campeonato") as HTMLElement;
  var campeonatos = JSON.parse(localStorage.getItem("campeonatos") || "[]");
  var partidas = JSON.parse(localStorage.getItem("partidas") || "[]");


  interface Campeonato {
    id: number;
    nome: string;
    categoria: string;  
    tipo: string;
    dataInicio: string;
    dataFim: string;
  }

function capturaCampeonato() {
    campeonato.innerHTML = "";
    campeonatos.forEach((c : Campeonato) => {
        campeonato.innerHTML += `
      <option>${c.nome}</option>
    `;
    })
  }

  interface Partida {
    id: number;
    timeMandante: string;
    timeVisitante: string;  
    campeonato: string;
    data: string;
  }

  function atualizarTabelaP() {
    tabelaPartidas.innerHTML = "";
    partidas.forEach((p : Partida) => {
        tabelaPartidas.innerHTML += `
      <tr>
          <td>${p.timeMandante}</td>
          <td>${p.timeVisitante}</td>
          <td>${p.campeonato}</td>
          <td>${p.data}</td>
      </tr>
    `;
    })
  }

  function salvarPartida(event:Event) {
    event?.preventDefault(); //cancelar o disparo do evento
    const novaPartida: Partida = {
      id: Date.now(),
      timeMandante: (document.getElementById("timeMandante") as HTMLInputElement).value,
      timeVisitante: (document.getElementById("timeVisitante") as HTMLInputElement).value,
      campeonato: (document.getElementById("campeonato") as HTMLInputElement).value,
      data: (document.getElementById("data") as HTMLInputElement).value,
    };
    partidas.push(novaPartida)
    atualizarTabelaP()
    salvarLocalStorageP()
  }

  function salvarLocalStorageP() {
    let partidasSalvar = JSON.stringify(partidas);
    localStorage.setItem("partidas", partidasSalvar);
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    capturaCampeonato(); // Chama a função quando o DOM estiver pronto
  });

<<<<<<< HEAD
=======
>>>>>>> e27f5fa (Primeiro commit na branch main)
>>>>>>> ae91f15 (Corrigindo estrutura da pasta Angular no repositório)
  atualizarTabelaP();