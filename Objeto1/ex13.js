let fazenda = {
    animais: [],

    cadastrar: function(nome, especie, idade, producao) {
        this.animais.push({
            nome: nome,
            especie: especie,
            idade: idade,
            producao: producao
        });
    },

    remover: function(nome) {
        for (let i = 0; i < this.animais.length; i++) {
            if (this.animais[i].nome == nome) {
                this.animais.splice(i, 1);
                break;
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

    alimentarTodos: function() {
        alert("Todos os animais foram alimentados!");
    },

    producaoTotal: function() {
        let total = 0;

        for (let i = 0; i < this.animais.length; i++) {
            total = total + this.animais[i].producao;
        }

        return total;
    }
};

fazenda.cadastrar("Mimosa", "Vaca", 5, 20);
fazenda.cadastrar("Bela", "Vaca", 4, 15);
fazenda.cadastrar("Lola", "Cabra", 3, 8);

fazenda.alimentarTodos();

console.log(fazenda.animais);
console.log("Produção total:", fazenda.producaoTotal());

alert("Produção total da fazenda: " + fazenda.producaoTotal());