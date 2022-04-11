class Contabancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; // quando tiver get and set usa o _
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends Contabancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(possui) {
        this._cartaoCredito = possui;
    }
}

class ContaPoupanca extends Contabancaria {
    constructor(agencia, numero) {
        super(agencia, numero, );
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends Contabancaria {
    constructor(agencia, numero) {
        super(agencia, numero, saldo);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if(valor > 500) {
            return "Operação Negada!";
        }

        this._saldo = this._saldo - valor;
    }
}

