document.getElementById('envform').addEventListener('click', event => {

    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');

    const json = `{
        "nome":"${nome.value}",
        "telefone":"${telefone.value}",
        "email":"${email.value}"
    }`;

    console.log(json)

    const http = new XMLHttpRequest();
    const url = `http://localhost:3001`;
    http.open('POST', url);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.send(json)

    event.preventDefault();
})