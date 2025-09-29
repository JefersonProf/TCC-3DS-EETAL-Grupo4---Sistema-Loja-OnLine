// Mostrar total do carrinho
const totalPix = document.getElementById("total-pix");
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = carrinho.reduce((acc, item) => acc + (item.preco * item.qtd), 0);
totalPix.textContent = total.toFixed(2);

// Copiar chave PIX
function copiarChave() {
  const chave = document.getElementById("chave-pix");
  chave.select();
  chave.setSelectionRange(0, 99999); // para mobile
  document.execCommand("copy");
  alert("✅ Chave PIX copiada!");
}
