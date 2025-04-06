let usuarios = [];

function carregarUsuarios() {
    fetch("http://demo1510601.mockable.io/listaUsuarios") 
    .then(response => response.json())
    .then(data => {
        usuarios = data; // Armazena os usuários do GET
        atualizarTabela();
    })
    .catch(error => console.error("Erro ao buscar usuários:", error));
}

function atualizarTabela() {
    const tabela = document.getElementById("tabelaUsuarios");
    tabela.innerHTML = ""; 
    
    usuarios.forEach(usuario => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.data_nascimento}</td>
            <td>${usuario.idade}</td>
        `;
        tabela.appendChild(linha);
    });
}


document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    let nomeInput = document.getElementById("nome");
    let emailInput = document.getElementById("email");
    let dataInput = document.getElementById("dataNasc");
    let idadeInput = document.getElementById("idade");
    let responseMessage = document.getElementById("responseMessage");

    let erroNome = document.getElementById("erro-nome");
    let erroEmail = document.getElementById("erro-email");
    let erroData = document.getElementById("erro-data");
    let erroIdade = document.getElementById("erro-idade");


    // Resetando mensagens de erro
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroData.textContent = "";
    erroIdade.textContent = "";
    responseMessage.textContent = "";

    let formularioValido = true;

    // Validação dos campos
    if (nomeInput.value.trim() === "") {
        erroNome.textContent = "Preencha esse campo!";
        formularioValido = false;
    }

    if (emailInput.value.trim() === "") {
        erroEmail.textContent = "Preencha esse campo!";
        formularioValido = false;
    }

    if (dataInput.value.trim() === "") {
        erroData.textContent = "Preencha esse campo!";
        formularioValido = false;
    }

    if (idadeInput.value.trim() === "") {
        erroIdade.textContent = "Preencha esse campo!";
        formularioValido = false;
    }
    // Se houver erro, para a execução
    if (!formularioValido) return;

    // Criando o objeto de dados para envio
    const dados = {
        nome: nomeInput.value.trim(),
        email: emailInput.value.trim(),
        data_nascimento: dataInput.value.trim(),
        idade: parseInt(idadeInput.value.trim(), 10)
    };

    // Envio dos dados para a API
    fetch("http://demo1510601.mockable.io/enviar", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados) 
    })
    .then(response => response.json())
    .then(data => {
        responseMessage.style.color = "green";
        responseMessage.textContent = data.mensagem || "Dados enviados com sucesso!";

        nomeInput.value = "";
         emailInput.value = "";
         dataInput.value = "";
         idadeInput.value = "";
         
          // Adiciona o novo usuário localmente
        usuarios.push(dados);

        // Atualiza a tabela com os novos dados
        atualizarTabela();

    })
    .catch(error => {
        console.error('Erro:', error);
        responseMessage.style.color = "red";
        responseMessage.textContent = "Ocorreu um erro ao enviar os dados.";
    });
});


