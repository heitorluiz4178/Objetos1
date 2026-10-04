let veiculo = {
    modelo: "",
    combustivel: 0,
    consumo: 0,

    abastecer: function(litros) {
        this.combustivel = this.combustivel + litros;
    },

    dirigir: function(distancia) {
        let necessario = distancia / this.consumo;

        if (necessario <= this.combustivel) {
            this.combustivel = this.combustivel - necessario;
            alert("O veículo percorreu " + distancia + " km.");
        } else {
            alert("Combustível insuficiente!");
        }
    },

    consultarCombustivel: function() {
        alert("Combustível disponível: " + this.combustivel + " litros");
    }
};

veiculo.modelo = prompt("Digite o modelo:");
veiculo.combustivel = Number(prompt("Digite a quantidade de combustível:"));
veiculo.consumo = Number(prompt("Quantos km o veículo faz por litro?"));

let distancia = Number(prompt("Digite a distância que deseja percorrer:"));

veiculo.dirigir(distancia);
veiculo.consultarCombustivel();