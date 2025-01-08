// API de Exercícios
async function fetchExercises() {
    const response = await fetch('URL_DA_API_DE_EXERCICIOS'); // Substitua pela URL da API
    const data = await response.json();
    // Manipule os dados como necessário
}

// API de Nutrição
async function fetchNutrition() {
    const response = await fetch('URL_DA_API_DE_NUTRICAO'); // Substitua pela URL da API
    const data = await response.json();
    // Manipule os dados como necessário
}

// API de Motivação
async function fetchMotivation() {
    const response = await fetch('URL_DA_API_DE_MOTIVACAO'); // Substitua pela URL da API
    const data = await response.json();
    const quotesContainer = document.getElementById('motivational-quotes');
    data.forEach(quote => {
        const blockquote = document.createElement('blockquote');
        blockquote.innerHTML = `<p>${quote.text}</p>`;
        quotesContainer.appendChild(blockquote);
    });
}

// API de Contato (Simulação de envio de formulário)
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('URL_DA_API_DE_CONTATO', {
        method: 'POST',
        body: formData
    });
    if (response.ok) {
        alert('Mensagem enviada com sucesso!');
    } else {
        alert('Erro ao enviar mensagem.');
    }
});

// Chamar as funções
fetchExercises();
fetchNutrition();
fetchMotivation();
