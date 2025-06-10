<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"] ?? ''));
    $email = htmlspecialchars(trim($_POST["email"] ?? ''));
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));

    if (empty($name) || empty($email) || empty($message)) {
        echo "Пожалуйста, заполните все поля.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Некорректный email.";
        exit;
    }

    $to = "ваш-email@example.com";
    $subject = "Новое сообщение";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-type: text/plain; charset=utf-8";

    if (mail($to, $subject, $message, $headers)) {
        echo "Ваше сообщение отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>