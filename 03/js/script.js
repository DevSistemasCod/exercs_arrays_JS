let array = [];

function exibirConteudo() {
  //onde item nesse contexto é uma ul
  let item = document.getElementById('item');

  if (item instanceof HTMLUListElement) {
    while (item.firstChild) {
      item.removeChild(item.firstChild);
    }

    array.forEach((valorAtualArray) => {
      // os itens 'li' da lista são criados de forma dinâmica
      let li = document.createElement('li');
      li.textContent = valorAtualArray;
      item.appendChild(li);
    });
  }
}

function adicionar(tarefa) {
  if (tarefa) {
    // if (!array.includes(tarefa)
    if (array.includes(tarefa) === false) {
      array.push(tarefa);
      exibirConteudo();
    } else {
      alert('O item já está na lista.');
    }
  } else {
    alert('Por favor, insira um valor válido.');
  }
}

function remover(tarefa) {
  let i = array.indexOf(tarefa);

  if (i != -1) {
    array.splice(i, 1);
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
        && (botaoAdicinar instanceof HTMLButtonElement) && (botaoRemover instanceof HTMLButtonElement)
    ){
        
        botaoAdicinar.addEventListener('click', () => {
            adicionar(adicinaEntrada.value);
            adicinaEntrada.value = '';
        });

        botaoRemover.addEventListener('click', () => {
            remover(removeEntrada.value);
            removeEntrada.value = '';
        });
    }
});
