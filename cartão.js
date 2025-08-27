const totalCartao = document.getElementById("total-cartao");
const mensagem = document.getElementById("mensagem");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = carrinho.reduce((acc, item) => acc + (item.preco * item.qtd), 0);
totalCartao.textContent = total.toFixed(2);

document.getElementById("form-cartao").addEventListener("submit", (e) => {
  e.preventDefault();
  mensagem.textContent = "✅ Pagamento aprovado!";
  mensagem.style.color = "green";

  // Limpar carrinho após pagamento
  localStorage.removeItem("carrinho");
});
