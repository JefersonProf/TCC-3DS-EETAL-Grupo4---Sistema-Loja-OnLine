const tabelaItens = document.getElementById('itens-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');
const mensagemVazio = document.getElementById('mensagem-vazio');
const finalizarCompraBtn = document.getElementById('finalizar-compra');

// Renderizar itens
function renderizarCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  tabelaItens.innerHTML = "";

  if (carrinho.length === 0) {
    mensagemVazio.style.display = "block";
    totalCarrinho.textContent = "0,00";
    return;
  } else {
    mensagemVazio.style.display = "none";
  }

  let total = 0;

  carrinho.forEach((item, index) => {
    const subtotal = item.preco * item.qtd;
    total += subtotal;

    const row = `
      <tr>
        <td>${item.nome}</td>
        <td>R$ ${item.preco.toFixed(2)}</td>
        <td>${item.qtd}</td>
        <td>R$ ${subtotal.toFixed(2)}</td>
        <td><button class="remover" data-index="${index}">Remover</button></td>
      </tr>
    `;
    tabelaItens.innerHTML += row;
  });

  totalCarrinho.textContent = total.toFixed(2);

  // Botões de remover
  document.querySelectorAll('.remover').forEach(btn => {
    btn.addEventListener('click', () => {
      removerItem(btn.dataset.index);
    });
  });
}

// Remover item
function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  renderizarCarrinho();
}

// Finalizar compra
finalizarCompraBtn.addEventListener('click'), () => {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  window.location.href = "pag";
}