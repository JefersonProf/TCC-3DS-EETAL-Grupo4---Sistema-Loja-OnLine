// Contador do carrinho
const contadorCarrinho = document.getElementById('contador-carrinho');

// Atualizar contador
function atualizarContador() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const totalItens = carrinho.reduce((acc, item) => acc + item.qtd, 0);
  contadorCarrinho.textContent = totalItens;
}

// Adicionar ao carrinho
function adicionarAoCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  const itemExistente = carrinho.find(item => item.nome === produto.nome);
  if (itemExistente) {
    itemExistente.qtd += produto.qtd;
  } else {
    carrinho.push(produto);
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarContador();
  alert(`${produto.qtd}x ${produto.nome} adicionado(s) ao carrinho!`);
}

// Eventos nos botões
document.querySelectorAll('.btn-comprar').forEach(botao => {
  botao.addEventListener('click', () => {
    const produtoSec = botao.closest('.produto-detalhe');
    const nome = produtoSec.querySelector('.nome-produto').textContent;
    const preco = parseFloat(produtoSec.dataset.preco);
    let qtd = parseInt(produtoSec.querySelector('.quantidade').value);

    if (qtd < 1) qtd = 1;

    const produto = { nome, preco, qtd };
    adicionarAoCarrinho(produto);
  });
});

// Inicializar contador ao carregar
atualizarContador();
