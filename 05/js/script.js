// Array de frutas
let frutas = ['Abacate', 'Maçã', 'Pera', 'Laranja'];

// Função para popular o dropdown com as frutas
function popularDropdown(frutas, elementoDeDropdown) {
  frutas.forEach((fruta) => {
    let elementoOption = document.createElement('option');
    elementoOption.textContent = fruta;
    elementoDeDropdown.appendChild(elementoOption);
  });
}

// Função para exibir a fruta escolhida
function exibirConteudo(fruta) {
  let frutaEscolhida = document.getElementById('frutaEscolhida');

  if (frutaEscolhida instanceof HTMLElement) {
    frutaEscolhida.textContent = `Você escolheu: ${fruta}`;
  }
}

// Função para adicionar o evento de mudança ao dropdown
function adicionarEventoDropdown(elementoDeDropdown) {
  elementoDeDropdown.addEventListener('change', (evento) => {
    let indice = evento.target.selectedIndex;
    let frutaSelecionada = evento.target.options[indice].text;
    exibirConteudo(frutaSelecionada);
  });
}

// Inicialização ao carregar a página
function inicializar() {
  let frutasDropdown = document.getElementById('frutasDropdown');
  popularDropdown(frutas, frutasDropdown);
  adicionarEventoDropdown(frutasDropdown);
}

document.addEventListener('DOMContentLoaded', inicializar);
