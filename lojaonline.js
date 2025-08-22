// Carrinho básico que conta quantos itens foram adicionados
const botoesComprar = document.querySelectorAll('.btn-comprar');
const carrinho = document.getElementById('carrinho');

let totalItens = 0;

botoesComprar.forEach(botao => {
  botao.addEventListener('click', () => {
    totalItens++;
    carrinho.textContent = `Carrinho: ${totalItens} ${totalItens === 1 ? 'item' : 'itens'}`;
    alert('Produto adicionado ao carrinho!');
  });
});
