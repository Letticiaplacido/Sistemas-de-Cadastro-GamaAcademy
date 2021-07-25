const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let endereço = document.getElementById('endereço').value;
    let cep = document.getElementById('cep').value;
    let estado = document.getElementById('estado').value;

   let data = {
        name,
        email,
        telefone,
        endereço,
        cep,
        estado,

   }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = `<p>carregando...</p>`

    let pronto = `<p>pronto</p>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto

    }, 1000)

})
