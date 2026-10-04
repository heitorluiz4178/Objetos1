let personagem = {
    nome: "",
    vida: 100,
    forca: 20,

    atacar: function() {
        alert(this.nome + " atacou com força " + this.forca);
    },

    receberDano: function(dano) {
        this.vida = this.vida - dano;

        if (this.vida < 0) {
            this.vida = 0;
        }
    },

    mostrarEstado: function() {
        alert(
            "Personagem: " + this.nome +
            "\nVida: " + this.vida +
            "\nForça: " + this.forca
        );
    }
};

personagem.nome = prompt("Digite o nome do personagem:");

personagem.atacar();

let dano = Number(prompt("Digite o dano recebido:"));
personagem.receberDano(dano);

personagem.mostrarEstado();