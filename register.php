<?php
$conn = new mysqli("localhost", "root", "", "academy_db");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    $conn->query($sql);
    
    echo "Регистрация успешна!";
}
?>
