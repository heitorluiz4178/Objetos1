let estoque = {
    nome: "",
    quantidade: 0,
    preco: 0,

    adicionar: function(qtd) {
        this.quantidade = this.quantidade + qtd;
    },

    vender: function(qtd) {
        if (qtd <= this.quantidade) {
            this.quantidade = this.quantidade - qtd;
            alert("Venda realizada!");
        } else {
            alert("Quantidade insuficiente no estoque!");
        }
    },

    mostrarEstoque: function() {
        alert(
            "Produto: " + this.nome +
            "\nQuantidade: " + this.quantidade +
            "\nPreço: R$ " + this.preco
        );
    }
};

estoque.nome = prompt("Digite o nome do produto:");
estoque.quantidade = Number(prompt("Digite a quantidade inicial:"));
estoque.preco = Number(prompt("Digite o preço:"));

let adicionar = Number(prompt("Quantos produtos deseja adicionar?"));
estoque.adicionar(adicionar);

let venda = Number(prompt("Quantos produtos deseja vender?"));
estoque.vender(venda);

estoque.mostrarEstoque();