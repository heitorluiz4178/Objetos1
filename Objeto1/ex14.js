let hospital = {
    animais: [],

    cadastrar: function(nome, especie, responsavel, urgencia) {
        this.animais.push({
            nome: nome,
            especie: especie,
            responsavel: responsavel,
            urgencia: urgencia,
            situacao: "Em atendimento"
        });
    },

    finalizar: function(nome) {
        for (let i = 0; i < this.animais.length; i++) {
            if (this.animais[i].nome == nome) {
                this.animais[i].situacao = "Finalizado";
            }
        }
    },

    buscar: function(nome) {
        for (let i = 0; i < this.animais.length; i++) {
            if (this.animais[i].nome == nome) {
                console.log(this.animais[i]);
            }
        }
    },

    mostrarUrgencia: function() {
        this.animais.sort(function(a, b) {
            return a.urgencia - b.urgencia;
        });

        console.log(this.animais);
    }
};

hospital.cadastrar("Rex", "Cachorro", "Carlos", 3);
hospital.cadastrar("Mia", "Gato", "Ana", 1);
hospital.cadastrar("Thor", "Cachorro", "João", 2);

hospital.finalizar("Rex");

console.log(hospital.animais);
hospital.mostrarUrgencia();

alert("Os atendimentos foram cadastrados. Veja os detalhes no console.");