// Mostrar total no checkout
const totalPagamento = document.getElementById("total-pagamento");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = carrinho.reduce((acc, item) => acc + (item.preco * item.qtd), 0);

totalPagamento.textContent = total.toFixed(2);
