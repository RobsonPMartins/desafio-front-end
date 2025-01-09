const faturamento = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 }
];

const totalFaturamento = faturamento.reduce((acc, item) => acc + item.valor, 0);

const tabela = document.getElementById("tabela-faturamento");
faturamento.forEach(item => {
    const percentual = ((item.valor / totalFaturamento) * 100).toFixed(2);
    const row = tabela.insertRow();
    row.insertCell().textContent = item.estado;
    row.insertCell().textContent = `R$ ${item.valor.toFixed(2)}`;
    row.insertCell().textContent = `${percentual}%`;
});
