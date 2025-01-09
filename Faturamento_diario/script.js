// Dados de faturamento diário (JSON) fornecido por email
const faturamentoDiario = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

// Preencher a tabela com os dados do faturamento
const tabelaFaturamento = document.getElementById('tabelaFaturamento').getElementsByTagName('tbody')[0];
faturamentoDiario.forEach(item => {
    let row = tabelaFaturamento.insertRow();
    row.insertCell(0).textContent = item.dia;
    row.insertCell(1).textContent = item.valor.toFixed(2);
});

// Função para calcular o < e > valor
function calcularFaturamento() {
    let valores = faturamentoDiario.map(item => item.valor).filter(valor => valor > 0);
    let total = valores.reduce((acc, valor) => acc + valor, 0);
    let media = total / valores.length;

    let menorFaturamento = Math.min(...valores);
    let maiorFaturamento = Math.max(...valores);

    let diasAcimaDaMedia = faturamentoDiario.filter(item => item.valor > media).length;

    document.getElementById('menorFaturamento').textContent = `R$ ${menorFaturamento.toFixed(2)}`;
    document.getElementById('maiorFaturamento').textContent = `R$ ${maiorFaturamento.toFixed(2)}`;
    document.getElementById('diasAcimaDaMedia').textContent = diasAcimaDaMedia;
}

// Chama a função calcularFaturamento
calcularFaturamento();
