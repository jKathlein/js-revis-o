if (idade >= 25 && idade <= 60) {
    let salario = Number(prompt("Digite seu salário"));
    if (salario >= 2000) {
        let emprestimo = Number(prompt("Digite o valor desejado para o empréstimo"));
        if (emprestimo < 10 * salario) {
            console.log("Emprestimo Aprovado");

        } else {
            console.log("Empréstimo negado pelo valor");
        }

    } else {
        console.log("Operação reprovada pelo salário");

    }
} else {
    console.log("Recusado")
}
