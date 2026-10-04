let filme = {
    titulo: "",
    duracao: 0,
    classificacao: 0,

    solicitarDados: function() {
        this.titulo = prompt("Digite o título do filme:");
        this.duracao = Number(prompt("Digite a duração em minutos:"));
        this.classificacao = Number(prompt("Digite a classificação indicativa:"));
    },

    converterDuracao: function() {
        let horas = Math.floor(this.duracao / 60);
        let minutos = this.duracao % 60;

        alert(
            "Filme: " + this.titulo +
            "\nDuração: " + horas + " horas e " + minutos + " minutos"
        );
    },

    verificarIdade: function(idade) {
        if (idade >= this.classificacao) {
            alert("A pessoa pode assistir ao filme.");
        } else {
            alert("A pessoa não pode assistir ao filme.");
        }
    }
};

filme.solicitarDados();
filme.converterDuracao();

let idade = Number(prompt("Digite sua idade:"));
filme.verificarIdade(idade);