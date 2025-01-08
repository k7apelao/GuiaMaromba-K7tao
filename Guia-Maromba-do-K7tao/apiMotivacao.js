// js/apiMotivacao.js
async function fetchMotivacao() {
    try {
        const response = await fetch('https://api-exemplo.com/motivacao');
        if (!response.ok) {
            throw new Error('Erro na rede ao buscar motivação');
        }
        const data = await response.json();
        displayMotivacao(data);
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('motivation-content').innerHTML = '<p>Erro ao carregar citações motivacionais. Tente novamente mais tarde.</p>';
    }
}

function displayMotivacao(motivacao) {
    const container = document.getElementById('motivation-content');
    container.innerHTML = ''; // Limpa o conteúdo anterior
    motivacao.forEach(citacao => {
        const div = document.createElement('div');
        div.classList.add('motivation-quote');
        div.innerHTML = `<p>"${citacao.texto}" - <strong>${citacao.autor}</strong></p>`;
        container.appendChild(div);
    });
}

// Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', fetchMotivacao);
