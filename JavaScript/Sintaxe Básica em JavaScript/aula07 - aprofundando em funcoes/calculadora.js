function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão Real (/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)'));

    if (!operacao || operacao >= 7) {
        alert('Operação inválida!')
        calculadora();
    } else {

        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - parâmetro inválidos!')
            calculadora();
        } else {

            function soma() {
                resultado = (n1 + n2);
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }

            function subtracao() {
                resultado = (n1 - n2);
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }

            function multiplicacao() {
                resultado = (n1 * n2);
                alert(`${n1} x ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoReal() {
                resultado = (n1 / n2);
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = (n1 % n2);
                alert(`O resto da divisão entre ${n1} e ${n2} = ${resultado}`)
                    ();
            }

            function potenciacao() {
                resultado = (n1 + n2);
                alert(`${n1} elevado a ${n2}ª = ${resultado}`)
                    ();
            }
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n1 - Sim\n2 - Não')

            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Até mais!')
            } else {
                alert('Digite uma opção correta1 válida!');
                novaOperacao();
            }
        }


        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }
        console.log(operacao);
    }

}

calculadora();