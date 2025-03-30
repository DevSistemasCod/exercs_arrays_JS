// Lista de frutas e seus respectivos caminhos de imagem
let frutas = [
  { nome: 'Abacate', imagem: 'img/abacate.jpg' },
  { nome: 'Maçã', imagem: 'img/maca.png' },
  { nome: 'Pera', imagem: 'img/pera.jpg' },
  { nome: 'Laranja', imagem: 'img/laranja.jpg' },
];

function obterFrutaSelecionada() {
  let frutaSelecionada = document.getElementById('selecionaFruta');

  if (frutaSelecionada instanceof HTMLSelectElement) {
    return frutaSelecionada;
  } else {
    alert("Elemento com ID 'selecionaFruta' não encontrado!");
  }
}

// Inicializa o select com as opções de frutas
function inicializar() {
  let frutaEscolhida = obterFrutaSelecionada();

  if (!frutaEscolhida) {
    alert("Elemento 'selectFruta' não encontrado!");
    return;
  }

  frutas.forEach((fruta) => {
    let opcaoSelecionada = document.createElement('option');

    opcaoSelecionada.value = fruta.nome;
    opcaoSelecionada.textContent = fruta.nome;
    frutaEscolhida.appendChild(opcaoSelecionada);
  });
}

// Obtém a fruta selecionada com base no conteúdo do select
function obterFrutaSelecionadaValor() {
  let frutaEscolhida = obterFrutaSelecionada();

  if (frutaEscolhida instanceof HTMLSelectElement) {
    return frutaEscolhida.value;
  }
  return null;
}

// Encontra a fruta correspondente na lista de frutas
function encontrarFruta(nomeFruta) {
  return frutas.find((fruta) => fruta.nome === nomeFruta);
}

// Atualiza o texto e exibição da fruta selecionada
function exibirConteudo(fruta) {
  let nomeFruta = document.getElementById('nomeFruta');
  let exibeFruta = document.getElementById('exibeFruta');
  let imagemFruta = document.getElementById('imagemFruta');

  //prettier-ignore
  if ((exibeFruta instanceof HTMLDivElement) && (nomeFruta instanceof HTMLParagraphElement)
     && (imagemFruta instanceof HTMLDivElement)) {
    nomeFruta.textContent = `A fruta selecionada foi: ${fruta.nome}`;
    exibeFruta.style.display = 'block';

    // Limpa a imagem anterior
    //imagemFruta.innerHTML = '';
    while (imagemFruta.firstChild) {
      imagemFruta.removeChild(imagemFruta.firstChild);
    }

    // Adiciona a nova imagem
    let novaImagem = document.createElement('img');
    
    novaImagem.src = fruta.imagem;
    novaImagem.alt = fruta.nome;
    novaImagem.width = 600;
    novaImagem.height = 600;
    imagemFruta.appendChild(novaImagem);
  }
}

// Atualiza a fruta selecionada
function atualizarFrutaSelecionada() {
  let frutaSelecionada = obterFrutaSelecionadaValor();

  if (frutaSelecionada) {
    let fruta = encontrarFruta(frutaSelecionada);

    if (fruta) {
      exibirConteudo(fruta);
    }
  }
}

// Adiciona os eventos e inicializa
document.addEventListener('DOMContentLoaded', () => {
  inicializar();
  let selectFruta = obterFrutaSelecionada();
  if (selectFruta) {
    selectFruta.addEventListener('change', atualizarFrutaSelecionada);
  }
});
