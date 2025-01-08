// js/apiContato.js
async function enviarContato() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const dados = { nome, email, mensagem };

    try {
        const response = await fetch('https://api-exemplo.com/contato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados),
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar mensagem');
        }

        alert('Mensagem enviada com sucesso!');
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
    }
}

// Chama a função ao enviar o formulário
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário
    enviarContato();
});
