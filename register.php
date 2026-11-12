<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Location: /dashboard');
    exit;
}

require __DIR__ . '/public/register.html';

