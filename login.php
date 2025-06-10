<?php
$conn = new mysqli("localhost", "root", "", "academy_db");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $result = $conn->query("SELECT * FROM users WHERE username='$username'");
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user["password"])) {
        echo "Добро пожаловать, $username!";
    } else {
        echo "Ошибка: неверный пароль.";
    }
}
?>
