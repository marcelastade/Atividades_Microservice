document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnChangeColor");
    const header = document.querySelector("nav");
    const footer = document.querySelector("footer");

    btn.addEventListener("click", function () {
       
        if (header.classList.contains("color-pink")) {
            header.classList.remove("color-pink");
            footer.classList.remove("color-pink");
            header.classList.add("color-light");
            footer.classList.add("color-light");
        } else {
            header.classList.remove("color-light");
            footer.classList.remove("color-light");
            header.classList.add("color-pink");
            footer.classList.add("color-pink");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("itemInput");
    const addButton = document.getElementById("addItemBtn");
    const itemList = document.getElementById("itemList");

    addButton.addEventListener("click", function () {
        const text = input.value.trim();
        if (text === "") return; 
        
        const li = document.createElement("li");
        li.textContent = text;
        
       
        li.addEventListener("dblclick", function () {
            li.remove();
        });

        itemList.appendChild(li);
        input.value = "";  
        input.focus(); 
    });
});

function tratarDados(data) {
    console.log(data);
    document.getElementById("mensagem").value = data.mensagem;
}

function consumirAPI() {
    fetch("http://demo1510601.mockable.io/mensagem")
        .then(response => response.json())
        .then(data => tratarDados(data))
        .catch(error => console.log(error))
}

document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nomeInput = document.getElementById("nome");
    let emailInput = document.getElementById("email");
    let responseMessage = document.getElementById("responseMessage");

    let erroNome = document.getElementById("erro-nome");
    let erroEmail = document.getElementById("erro-email");

    erroNome.textContent = "";
    erroEmail.textContent = "";
    responseMessage.textContent = "";

    let formularioValido = true;

    if (nomeInput.value.trim() === "") {
        erroNome.textContent = "Preencha esse campo!";
        formularioValido = false;
    }

    if (emailInput.value.trim() === "") {
        erroEmail.textContent = "Preencha esse campo!";
        formularioValido = false;
    }

    if (!formularioValido) return;
    
    const dados = {
        nome: nomeInput.value.trim(),
        email: emailInput.value.trim()
    };

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
    })
    .catch(error => {
        console.error('Erro:', error);
        responseMessage.style.color = "red";
        responseMessage.textContent = "Ocorreu um erro ao enviar os dados.";
    });
});


let produtos = [];

function carregarProdutos() {
    fetch("http://demo1510601.mockable.io/lista") 
    .then(response => response.json())
    .then(data => {
        produtos = data; 
        const tabela = document.getElementById("tabelaProdutos");
        tabela.innerHTML = ""; 
        
        data.forEach(produto => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${produto.nome}</td>
                <td>${produto.categoria}</td>
                <td>${produto.preco}</td>
            `;
            tabela.appendChild(linha);
        });
    })
    .catch(error => console.error("Erro ao buscar produtos:", error));
}

function filtrarProdutos() {
    const tabela = document.getElementById("tabelaProdutos");
    tabela.innerHTML = ""; 

    const produtosFiltrados = produtos.filter(produto => produto.preco > 8.00);

    produtosFiltrados.forEach(produto => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.categoria}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
        `;
        tabela.appendChild(linha);
    });
}

function limparFiltro() {
    carregarProdutos(); 
}



