let pedido = {
    cliente: "",
    refeicao: 0,
    taxa: 0,

    solicitarDados: function() {
        this.cliente = prompt("Digite o nome do cliente:");
        this.refeicao = Number(prompt("Digite o valor da refeição:"));
        this.taxa = Number(prompt("Digite a porcentagem da taxa:"));
    },

    calcularTaxa: function() {
        return this.refeicao * this.taxa / 100;
    },

    calcularTotal: function() {
        return this.refeicao + this.calcularTaxa();
    },

    mostrarResumo: function() {
        alert(
            "Cliente: " + this.cliente +
            "\nRefeição: R$ " + this.refeicao +
            "\nTaxa: R$ " + this.calcularTaxa() +
            "\nTotal: R$ " + this.calcularTotal()
        );
    }
};

pedido.solicitarDados();
pedido.mostrarResumo();