let pessoa = {
    nome: "",
    anoNascimento: 0,
    anoAtual: 0,

    solicitarDados: function() {
        this.nome = prompt("Digite o nome:");
        this.anoNascimento = Number(prompt("Digite o ano de nascimento:"));
        this.anoAtual = Number(prompt("Digite o ano atual:"));
    },

    calcularIdade: function() {
        return this.anoAtual - this.anoNascimento;
    },

    verificarIdade: function() {
        let idade = this.calcularIdade();

        if (idade >= 18) {
            alert(this.nome + " tem " + idade + " anos e é maior de idade.");
        } else {
            alert(this.nome + " tem " + idade + " anos e é menor de idade.");
        }
    }
};

pessoa.solicitarDados();
pessoa.verificarIdade();