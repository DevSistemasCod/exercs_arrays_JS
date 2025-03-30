const array = [];

function exibirConteudo() {
  let item = document.getElementById('item');

  if (item instanceof HTMLParagraphElement) {
    item.textContent = array.join(', ');
  }
}

function adicionarItem(valor) {
  if (valor) {
    array.push(valor);
    exibirConteudo();
  } else {
    alert('Por favor, insira um valor válido.');
  }
}

function removerItem(valor) {
  let indice = array.indexOf(valor);

  if (indice !== -1) {
    array.splice(indice, 1);
    exibirConteudo();
  } else {
    alert('Item não encontrado na lista.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let adicinaEntrada = document.getElementById('adicionarItem');
  let removeEntrada = document.getElementById('removerItem');
  let botaoAdicinar = document.getElementById('adicionarBtn');
  let botaoRemover = document.getElementById('removerBtn');

  //prettier-ignore
  if((adicinaEntrada instanceof HTMLInputElement) && ( removeEntrada instanceof HTMLInputElement)
    && (botaoAdicinar instanceof HTMLButtonElement) && (botaoRemover instanceof HTMLButtonElement))
  {
    botaoAdicinar.addEventListener('click', () => {
      let valor = adicinaEntrada.value;
      
      adicinaEntrada.value = '';
      adicionarItem(valor);
    });

    botaoRemover.addEventListener('click', () => {
      let valor = removeEntrada.value;
      
      removeEntrada.value = '';
      removerItem(valor);
    });

    exibirConteudo();
  }
});
