let produtos = []; // Lista de cadastrados
let produtosFiltrados = []; // Lista de filtrados

function cadastrarProduto() {
  let nomeInput = document.getElementById('nomeProduto');
  let precoInput = document.getElementById('precoProduto');
  let categoriaInput = document.getElementById('categoriaProduto');

  //prettier-ignore
  if((nomeInput instanceof HTMLInputElement) && (precoInput instanceof HTMLInputElement)
    && (categoriaInput instanceof HTMLInputElement)){
      let nome = nomeInput.value;  
      let preco = parseFloat(precoInput.value);  
      let categoria = categoriaInput.value;  

      if (nome && !isNaN(preco) && categoria) {
        produtos.push({ nome, preco, categoria });
        nomeInput.value = '';
        precoInput.value = '';
        categoriaInput.value = '';
        listarProdutos(produtos, 'listaProdutos');
      } else {
        alert('Preencha todos os campos corretamente.');
      }
  }
}

function listarProdutos(lista, tipo) {
  let listaProdutos = document.getElementById('listaProdutos');
  let listaFiltrados = document.getElementById('listaFiltrados');

  // Verifica se os elementos são do tipo esperado
  if (
    listaProdutos instanceof HTMLUListElement &&
    listaFiltrados instanceof HTMLUListElement
  ) {
    if (tipo === 'listaProdutos') {
      exibirConteudo(lista, listaProdutos); // Exibe a lista de produtos cadastrados
    } else if (tipo === 'listaFiltrados') {
      exibirConteudo(lista, listaFiltrados); // Exibe a lista de produtos filtrados
    }
  }
}

function exibirConteudo(lista, listaElmentos) {
  // Limpa a lista antes de exibir o conteúdo
  // listaElmentos.innerHTML = '';
  while (listaElmentos.firstChild) {
    listaElmentos.removeChild(listaElmentos.firstChild);
  }

  // Adiciona os itens à lista
  lista.forEach((produto) => {
    let item = document.createElement('li');
    item.textContent = `Nome: ${
      produto.nome
    }, Preço: R$ ${produto.preco.toFixed(2)}, Categoria: ${produto.categoria}`;
    listaElmentos.appendChild(item);
  });
}

function filtrarProdutos() {
  let filtroPorNomeInput = document.getElementById('filtroNome');
  let filtroPorCategoriaInput = document.getElementById('filtroCategoria');

  //prettier-ignore
  if ((filtroPorNomeInput instanceof HTMLInputElement) && (filtroPorCategoriaInput instanceof HTMLInputElement)) {
    let filtroPorNome = filtroPorNomeInput.value.toLowerCase();
    let filtroPorCategoria = filtroPorCategoriaInput.value.toLowerCase();

    produtosFiltrados = produtos.filter((produto) => {
      //prettier-ignore
      return ((filtroPorNome === '' || produto.nome.toLowerCase().includes(filtroPorNome)) &&
        (filtroPorCategoria === '' || produto.categoria.toLowerCase().includes(filtroPorCategoria)));
    });

    listarProdutos(produtosFiltrados, 'listaFiltrados');
    filtroPorNomeInput.value = '';
    filtroPorCategoriaInput.value = '';
  }
}

function removerProdutosFiltrados() {
  produtos = produtos.filter((produto) => !produtosFiltrados.includes(produto));
  produtosFiltrados = []; // Limpa a lista de filtrados após a remoção
  listarProdutos(produtos, 'listaProdutos');
  listarProdutos(produtosFiltrados, 'listaFiltrados');
}
