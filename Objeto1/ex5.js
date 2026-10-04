let funcionario = {
    nome: "",
    salario: 0,
    aumento: 0,

    solicitarDados: function() {
        this.nome = prompt("Digite o nome:");
        this.salario = Number(prompt("Digite o salário:"));
        this.aumento = Number(prompt("Digite a porcentagem de aumento:"));
    },

    calcularAumento: function() {
        let valorAumento = this.salario * this.aumento / 100;
        this.salario = this.salario + valorAumento;
    },

    mostrarSalario: function() {
        alert(
            "Funcionário: " + this.nome +
            "\nNovo salário: R$ " + this.salario
        );
    }
};

funcionario.solicitarDados();
funcionario.calcularAumento();
funcionario.mostrarSalario();