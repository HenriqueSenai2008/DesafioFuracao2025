const produtos = {
    1: { nome: "Arroz", preco: 12.90 },
    2: { nome: "Feijão", preco: 7.90 },
    3: { nome: "Pão", preco: 0.80 },
    4: { nome: "Presunto", preco: 2.90 },
    5: { nome: "Queijo", preco: 3.40 },
    6: { nome: "Leite", preco: 4.50 },
    7: { nome: "Carne", preco: 20.90 },
    8: { nome: "Ovos", preco: 14.00 }
};

let notaFiscal = [];
let totalGeral = 0;

function adicionarProduto(nome, preco) {
    const quantidade = prompt(`Quantas unidades de ${nome} você deseja comprar?`);

    if (quantidade && !isNaN(quantidade) && quantidade > 0) {
        const qtd = parseInt(quantidade);
        const total = preco * qtd;

        notaFiscal.push({ nome, preco, quantidade: qtd, total });

        totalGeral += total;

        atualizarNotaFiscal();
    } else {
        alert("Por favor, insira uma quantidade válida.");
    }
}

function atualizarNotaFiscal() {
    const listaProdutos = document.getElementById("listaProdutos");
    const totalGeralElement = document.getElementById("totalGeral");

    listaProdutos.innerHTML = "";

    notaFiscal.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.nome} - R$${item.preco.toFixed(2)} x ${item.quantidade} = R$${item.total.toFixed(2)}`;
        listaProdutos.appendChild(div);
    });

    totalGeralElement.textContent = totalGeral.toFixed(2);
}