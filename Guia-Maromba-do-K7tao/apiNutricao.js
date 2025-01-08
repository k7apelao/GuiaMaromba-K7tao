// js/apiNutricao.js
async function fetchDieta() {
    try {
        const response = await fetch('https://api-exemplo.com/nutricao');
        if (!response.ok) {
            throw new Error('Erro na rede ao buscar nutrição');
        }
        const data = await response.json();
        displayDieta(data);
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('nutrition-content').innerHTML = '<p>Erro ao carregar as informações de nutrição. Tente novamente mais tarde.</p>';
    }
}

function displayDieta(dieta) {
    const container = document.getElementById('nutrition-content');
    container.innerHTML = ''; // Limpa o conteúdo anterior
    dieta.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('nutrition-item');
        div.innerHTML = `
            <h3>${item.nome}</h3>
            <p>${item.descricao}</p>
            <p><strong>Calorias:</strong> ${item.calorias}</p>
        `;
        container.appendChild(div);
    });
}

// Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', fetchDieta);
