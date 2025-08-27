const servicoSpan = document.getElementById("servico");
const dataSpan = document.getElementById("data");
const valorSpan = document.getElementById("valor");
const pagarBtn = document.getElementById("pagar");
const mensagem = document.getElementById("mensagem");

const agendamento = JSON.parse(localStorage.getItem("agendamento"));

if (agendamento) {
  servicoSpan.textContent = agendamento.servico;
  dataSpan.textContent = agendamento.data;
  valorSpan.textContent = agendamento.preco.toFixed(2);
}

pagarBtn.addEventListener("click", () => {
  if (!agendamento) {
    mensagem.textContent = "❌ Nenhum agendamento encontrado!";
    mensagem.style.color = "red";
    return;
  }

  mensagem.textContent = "✅ Pagamento confirmado! Seu agendamento está garantido.";
  mensagem.style.color = "green";

  // Limpar storage
  localStorage.removeItem("agendamento");
});
