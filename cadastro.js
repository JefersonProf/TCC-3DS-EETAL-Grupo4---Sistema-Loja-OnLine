const form = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;

  if (senha !== confirmarSenha) {
    mensagem.textContent = "❌ As senhas não conferem!";
    mensagem.style.color = "red";
    return;
  }

  // Salvar no LocalStorage simulando cadastro
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push({ nome, email, telefone, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mensagem.textContent = "✅ Cadastro realizado com sucesso!";
  mensagem.style.color = "green";

  form.reset();
});
