<<<<<<< HEAD
=======
<<<<<<< HEAD
var formCampeonato = document.getElementById(
    "formTime"
  ) as HTMLFormElement;
  var tabelaTimes = document.getElementById("tbTimes") as HTMLElement;
  var times = JSON.parse(localStorage.getItem("times") || "[]");

interface Time {
    id: number;
    time: string;
    timeCurto: string;  
  }

  function atualizarTabelaT() {
    tabelaTimes.innerHTML = "";
    times.forEach((t : Time) => {
        tabelaTimes.innerHTML += `
      <tr>
          <td>${t.time}</td>
          <td>${t.timeCurto}</td>
      </tr>
    `;
    })
  }

  function salvarTime(event:Event) {
    event?.preventDefault(); //cancelar o disparo do evento
    const novoTime: Time = {
      id: Date.now(),
      time: (document.getElementById("time") as HTMLInputElement).value,
      timeCurto: (document.getElementById("timeCurto") as HTMLInputElement).value,
    };
    times.push(novoTime)
    atualizarTabelaT()
    salvarLocalStorageT()
  }

  function salvarLocalStorageT() {
    let timesSalvar = JSON.stringify(times);
    localStorage.setItem("times", timesSalvar);
  }

=======
>>>>>>> ae91f15 (Corrigindo estrutura da pasta Angular no repositório)
var formCampeonato = document.getElementById(
    "formTime"
  ) as HTMLFormElement;
  var tabelaTimes = document.getElementById("tbTimes") as HTMLElement;
  var times = JSON.parse(localStorage.getItem("times") || "[]");

interface Time {
    id: number;
    time: string;
    timeCurto: string;  
  }

  function atualizarTabelaT() {
    tabelaTimes.innerHTML = "";
    times.forEach((t : Time) => {
        tabelaTimes.innerHTML += `
      <tr>
          <td>${t.time}</td>
          <td>${t.timeCurto}</td>
      </tr>
    `;
    })
  }

  function salvarTime(event:Event) {
    event?.preventDefault(); //cancelar o disparo do evento
    const novoTime: Time = {
      id: Date.now(),
      time: (document.getElementById("time") as HTMLInputElement).value,
      timeCurto: (document.getElementById("timeCurto") as HTMLInputElement).value,
    };
    times.push(novoTime)
    atualizarTabelaT()
    salvarLocalStorageT()
  }

  function salvarLocalStorageT() {
    let timesSalvar = JSON.stringify(times);
    localStorage.setItem("times", timesSalvar);
  }

<<<<<<< HEAD
=======
>>>>>>> e27f5fa (Primeiro commit na branch main)
>>>>>>> ae91f15 (Corrigindo estrutura da pasta Angular no repositório)
  atualizarTabelaT()