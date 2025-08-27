// Seleciona todos os botões de comprar
const botoesComprar = document.querySelectorAll('.btn-comprar');
const contadorCarrinho = document.getElementById('contador-carrinho');

// Atualiza contador do carrinho
function atualizarContador() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    contadorCarrinho.textContent = totalItens;
}

// Adiciona produto ao carrinho
function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    const index = carrinho.findIndex(item => item.nome === produto.nome);
    if (index > -1) {
        carrinho[index].quantidade += 1;
    } else {
        produto.quantidade = 1;
        carrinho.push(produto);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContador();
}

// Evento de clique em cada botão
botoesComprar.forEach(botao => {
    botao.addEventListener('click', (e) => {
        const produtoDiv = e.target.closest('.produto');
        const nome = produtoDiv.dataset.nome;
        const preco = parseFloat(produtoDiv.dataset.preco);

        const produto = { nome, preco };
        adicionarAoCarrinho(produto);

        alert(`${nome} adicionado ao carrinho!`);
    });
});

// Atualiza contador ao carregar a página
atualizarContador();
