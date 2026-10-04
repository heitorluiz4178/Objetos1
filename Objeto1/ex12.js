let redeSocial = {
    usuario: "Heitor",
    seguidores: [],
    publicacoes: [
        { texto: "Minha primeira publicação", curtidas: 5 },
        { texto: "Aprendendo JavaScript", curtidas: 10 }
    ],
    totalCurtidas: 15,

    publicar: function(texto) {
        this.publicacoes.push({
            texto: texto,
            curtidas: 0
        });
    },

    excluirPublicacao: function(posicao) {
        this.publicacoes.splice(posicao, 1);
    },

    seguir: function(nome) {
        this.seguidores.push(nome);
    },

    deixarDeSeguir: function(nome) {
        let posicao = this.seguidores.indexOf(nome);

        if (posicao != -1) {
            this.seguidores.splice(posicao, 1);
        }
    },

    curtir: function(posicao) {
        this.publicacoes[posicao].curtidas++;
        this.totalCurtidas++;
    },

    mostrarMaisCurtida: function() {
        let maior = this.publicacoes[0];

        for (let i = 1; i < this.publicacoes.length; i++) {
            if (this.publicacoes[i].curtidas > maior.curtidas) {
                maior = this.publicacoes[i];
            }
        }

        console.log("Publicação com mais curtidas:");
        console.log(maior);
    }
};

redeSocial.publicar("Hoje estou estudando JavaScript!");
redeSocial.seguir("João");
redeSocial.curtir(2);

console.log(redeSocial);
redeSocial.mostrarMaisCurtida();

alert("Veja os resultados no console.");