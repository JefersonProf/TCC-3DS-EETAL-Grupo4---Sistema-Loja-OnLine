const form = document.getElementById("form-agendamento");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const data = document.getElementById("data").value;
  const servico = document.getElementById("servico").value;

  if (!nome || !email || !telefone || !data || !servico) {
    mensagem.textContent = "❌ Preencha todos os campos!";
    mensagem.style.color = "red";
    return;
  }

  // Definir preço do serviço
  let preco = 0;
  if (servico === "buffet") preco = 500;
  if (servico === "bolo") preco = 200;
  if (servico === "doces") preco = 300;

  // Salvar no localStorage
  const agendamento = { nome, email, telefone, data, servico, preco };
  localStorage.setItem("agendamento", JSON.stringify(agendamento));

  // Redirecionar para pagamento
  window.location.href = "pagamento_agendamento.html";
});
