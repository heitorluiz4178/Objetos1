let conta = {
    titular: "",
    saldo: 0,

    depositar: function(valor) {
        this.saldo = this.saldo + valor;
    },

    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            alert("Saque realizado!");
        } else {
            alert("Saldo insuficiente!");
        }
    },

    consultarSaldo: function() {
        alert("Titular: " + this.titular + "\nSaldo: R$ " + this.saldo);
    }
};

conta.titular = prompt("Digite o nome do titular:");
conta.saldo = Number(prompt("Digite o saldo inicial:"));

let deposito = Number(prompt("Digite o valor do depósito:"));
conta.depositar(deposito);

let saque = Number(prompt("Digite o valor do saque:"));
conta.sacar(saque);

conta.consultarSaldo();