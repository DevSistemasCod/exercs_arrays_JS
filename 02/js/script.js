const array = [];

function exibirConteudo() {
  let item = document.getElementById('item');

  if (item instanceof HTMLDivElement) {
    // Se o elemento item já contém filhos e novos conteúdos forem
    // adicionados sem antes limpar os existentes, o resultado será
    // uma mistura do conteúdo antigo com o novo.
    while (item.firstChild) {
      item.removeChild(item.firstChild);
    }
    // poderia tbm ser feito com innerHTML. embora seja menos seguro
    // item.innerHTML = '';

    array.forEach((valorAtualArray) => {
      let paragrafo = document.createElement('p');
      paragrafo.textContent = valorAtualArray;
      item.appendChild(paragrafo); //Adiciona o parágrafo ao elemento item
    });
  }
}

function adicionarItem(tarefa) {
  if (tarefa) {
    //verifica se o tarefa especificado não está presente no array
    //if (array.includes(tarefa) === false)
    if (!array.includes(tarefa)) {
      array.push(tarefa);
      exibirConteudo();
    } else {
      alert('O item já está na lista.');
    }
  } else {
    alert('Por favor, insira um valor válido.');
  }
}

function removerItem(tarefa) {
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
    && (botaoAdicinar instanceof HTMLButtonElement) && (botaoRemover instanceof HTMLButtonElement)){

    botaoAdicinar.addEventListener('click', () => {
      adicionarItem(adicinaEntrada.value);
      adicinaEntrada.value = '';
    });

    botaoRemover.addEventListener('click', () => {
      removerItem(removeEntrada.value);
      removeEntrada.value = '';
    });

  }
});
