let produto = {
    nome: "",
    preco: 0,
    quantidade: 0,

    solicitarDados: function() {
        this.nome = prompt("Digite o nome do produto:");
        this.preco = Number(prompt("Digite o preço:"));
        this.quantidade = Number(prompt("Digite a quantidade:"));
    },

    calcularTotal: function() {
        return this.preco * this.quantidade;
    },

    mostrarResumo: function() {
        let total = this.calcularTotal();

        alert(
            "Produto: " + this.nome +
            "\nPreço: R$ " + this.preco +
            "\nQuantidade: " + this.quantidade +
            "\nTotal: R$ " + total
        );
    }
};

produto.solicitarDados();
produto.mostrarResumo();