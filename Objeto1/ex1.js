let aluno = {
    nome: "",
    nota1: 0,
    nota2: 0,
    media: 0,

    solicitarDados: function() {
        this.nome = prompt("Digite o nome do aluno:");
        this.nota1 = Number(prompt("Digite a primeira nota:"));
        this.nota2 = Number(prompt("Digite a segunda nota:"));
    },

    calcularMedia: function() {
        this.media = (this.nota1 + this.nota2) / 2;
    },

    verificarSituacao: function() {
        if (this.media >= 6) {
            alert("Aluno: " + this.nome + "\nMédia: " + this.media + "\nAprovado!");
        } else {
            alert("Aluno: " + this.nome + "\nMédia: " + this.media + "\nReprovado!");
        }
    }
};

aluno.solicitarDados();
aluno.calcularMedia();
aluno.verificarSituacao();