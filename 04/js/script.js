let lista = [];

function exibirConteudo() {
  let listaItens = document.getElementById('itemList');

  if (listaItens instanceof HTMLElement) {
    // item.innerHTML = '';
    while (listaItens.firstChild) {
      listaItens.removeChild(listaItens.firstChild);
    }

    lista.forEach((item, indice) => {
      //label é criada para envolver o checkbox, tornando o texto do item também interativo
      let label = document.createElement('label');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = item;
      //O id serve para identificar de forma única o elemento na página.
      checkbox.id = `item-${indice}`;
      //className é uma propriedade que define as classes CSS
      checkbox.className = 'itemCheckbox';

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(item));

      listaItens.appendChild(label);

      let quebraDeLinha = document.createElement('br');
      listaItens.appendChild(quebraDeLinha);
    });
  }
}

// Função para adicionar um item à lista
function adicionar(item) {
  if (item) {
    if (lista.indexOf(item) === -1) {
      lista.push(item);
      exibirConteudo();
    } else {
      alert('O item já está na lista.');
    }
  } else {
    alert('Por favor, insira um valor válido.');
  }
}

// Função para remover os itens selecionados da lista
function remover() {
  // seleciona todos os elementos <input> do tipo checkbox
  // que estão marcados (checked) e que possuem a classe itemCheckbox.
  let elementosCheckbox = document.querySelectorAll('.itemCheckbox:checked');

  //validação para caso seja clicado no botão e não tenha nenhum elemento
  if (elementosCheckbox.length === 0) {
    alert('Nenhum item selecionado para remoção.');
    return; // Sai da função se não há itens selecionados
  }

  elementosCheckbox.forEach((valorMarcadoParaRemocao) => {
    if (valorMarcadoParaRemocao instanceof HTMLInputElement) {
      let indice = lista.indexOf(valorMarcadoParaRemocao.value);
      if (indice !== -1) {
        lista.splice(indice, 1);
      }
    }
  });

  exibirConteudo();
}

// Função para inicializar os eventos de adicionar e remover
document.addEventListener('DOMContentLoaded', () => {
  let adicionarEntrada = document.getElementById('addItem');
  let botaoAdicionar = document.getElementById('addButton');
  let botaoRemover = document.getElementById('removeButton');

  // prettier-ignore
  if ((adicionarEntrada instanceof HTMLInputElement) && (botaoAdicionar instanceof HTMLButtonElement) 
     && (botaoRemover instanceof HTMLButtonElement)){

    botaoAdicionar.addEventListener('click', () => {
      adicionar(adicionarEntrada.value);
      adicionarEntrada.value = ''; // Limpa o campo de texto
    });

    botaoRemover.addEventListener('click', () => {
      remover();
    });
  }
});
