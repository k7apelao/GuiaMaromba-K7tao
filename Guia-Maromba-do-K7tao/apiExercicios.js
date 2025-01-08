// js/apiExercicios.js
async function fetchExercicios() {
    try {
        const response = await fetch('https://api-exemplo.com/exercicios');
        if (!response.ok) {
            throw new Error('Erro na rede ao buscar exercícios');
        }
        const data = await response.json();
        displayExercicios(data);
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('exercise-content').innerHTML = '<p>Erro ao carregar os exercícios. Tente novamente mais tarde.</p>';
    }
}

function displayExercicios(exercicios) {
    const container = document.getElementById('exercise-content');
    container.innerHTML = ''; // Limpa o conteúdo anterior
    exercicios.forEach(exercicio => {
        const div = document.createElement('div');
        div.classList.add('exercise-item');
        div.innerHTML = `
            <img src="${exercicio.imagem}" alt="${exercicio.nome}">
            <h3>${exercicio.nome}</h3>
            <p>${exercicio.descricao}</p>
        `;
        container.appendChild(div);
    });
}

// Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', fetchExercicios);
