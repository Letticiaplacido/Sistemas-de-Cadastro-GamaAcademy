const form1 = document.getElementById('form1')

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    let codigo = document.getElementById('codigo').value;
    let produto = document.getElementById('produto').value;
    let descrição = document.getElementById('descrição').value;
    let quantidade = document.getElementById('quantidade').value;
    let fornecedor = document.getElementById('fornecedor').value;
    let valor = document.getElementById('valor').value;
    
    let data = {
        codigo,
        produto,
        descrição,
        quantidade,
        fornecedor,
        valor,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content1 = document.getElementById('content1')

    let pronto = `<p>pronto</p>`

    setTimeout(() => {
        content1.innerHTML = pronto

    }, 1000)
})