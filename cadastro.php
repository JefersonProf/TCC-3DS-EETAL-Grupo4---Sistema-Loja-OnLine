<?php
require "conexao.php";
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $endereco = $_POST['endereco'];
    $email = $_POST['email'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO clientes (nome, cpf, endereco, email, senha) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $nome, $cpf, $endereco, $email, $senha);

    if ($stmt->execute()) {
        $_SESSION['id'] = $stmt->insert_id;
        $_SESSION['nome'] = $nome;
        header("Location: checkout.html");
        exit;
    } else {
        $erro = "Erro: " . $stmt->error;
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Cadastro</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h2>Cadastro</h2>
<?php if(isset($erro)) echo "<p style='color:red;'>$erro</p>"; ?>
<form method="POST">
    <label>Nome:</label>
    <input type="text" name="nome" required>
    <label>CPF:</label>
    <input type="text" name="cpf" required>
    <label>Endereço:</label>
    <input type="text" name="endereco" required>
    <label>Email:</label>
    <input type="email" name="email" required>
    <label>Senha:</label>
    <input type="password" name="senha" required>
    <button type="submit">Cadastrar</button>
</form>
<p>Já tem conta? <a href="login.php">Login</a></p>
</body>
</html>
