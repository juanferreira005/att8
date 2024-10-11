document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio automático do formulário

    // Captura os valores dos campos
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let pais = document.getElementById('pais').value;
    let comentarios = document.getElementById('comentarios').value;

    // Validação básica
    if (!nome || !email || !senha) {
        alert("Por favor, preencha os campos obrigatórios.");
        return;
    }

    // Exibição de dados
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Dados Enviados:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gênero:</strong> ${genero ? genero.value : 'Não informado'}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Comentários:</strong> ${comentarios}</p>
    `;

    // Modifica o conteúdo do h1
    document.querySelector('h1').textContent = 'Formulário Enviado com Sucesso!';

    // Adiciona uma classe ao formulário para mudar o estilo
    document.getElementById('meuFormulario').classList.add('validado');
});