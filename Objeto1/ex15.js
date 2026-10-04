let votacao = {
    candidatos: [],
    eleitores: [],

    cadastrarCandidato: function(nome) {
        this.candidatos.push({
            nome: nome,
            votos: 0
        });
    },

    votar: function(eleitor, candidato) {
        if (this.eleitores.includes(eleitor)) {
            alert("Esse eleitor já votou!");
            return;
        }

        for (let i = 0; i < this.candidatos.length; i++) {
            if (this.candidatos[i].nome == candidato) {
                this.candidatos[i].votos++;
                this.eleitores.push(eleitor);
                alert("Voto registrado!");
                return;
            }
        }

        alert("Candidato não encontrado!");
    },

    mostrarResultado: function() {
        console.log(this.candidatos);
    },

    vencedor: function() {
        let maior = this.candidatos[0];

        for (let i = 1; i < this.candidatos.length; i++) {
            if (this.candidatos[i].votos > maior.votos) {
                maior = this.candidatos[i];
            }
        }

        alert(
            "Vencedor: " + maior.nome +
            "\nVotos: " + maior.votos
        );
    }
};

votacao.cadastrarCandidato("João");
votacao.cadastrarCandidato("Maria");
votacao.cadastrarCandidato("Pedro");

votacao.votar("Heitor", "João");
votacao.votar("Lucas", "Maria");
votacao.votar("Ana", "João");
votacao.votar("Carlos", "Pedro");

votacao.mostrarResultado();
votacao.vencedor();