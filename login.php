<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($email === 'admin@example.com' && $password === 'admin1234') {
        header('Location: /admin');
        exit;
    }

    header('Location: /dashboard');
    exit;
}

require __DIR__ . '/public/login.html';

