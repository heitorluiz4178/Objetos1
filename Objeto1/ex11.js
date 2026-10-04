let carrinho = {
    produto: "",
    preco: 0,
    quantidade: 0,
    desconto: 0,

    solicitarDados: function() {
        this.produto = prompt("Digite o produto:");
        this.preco = Number(prompt("Digite o preço:"));
        this.quantidade = Number(prompt("Digite a quantidade:"));
        this.desconto = Number(prompt("Digite o desconto em %:"));
    },

    calcularSubtotal: function() {
        return this.preco * this.quantidade;
    },

    calcularDesconto: function() {
        return this.calcularSubtotal() * this.desconto / 100;
    },

    mostrarFinal: function() {
        let subtotal = this.calcularSubtotal();
        let desconto = this.calcularDesconto();
        let total = subtotal - desconto;

        alert(
            "Produto: " + this.produto +
            "\nSubtotal: R$ " + subtotal +
            "\nDesconto: R$ " + desconto +
            "\nValor final: R$ " + total
        );
    }
};

carrinho.solicitarDados();
carrinho.mostrarFinal();