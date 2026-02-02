<?php
// SPA Router Fallback - Força todas as rotas para index.html
// Define o status como 200 OK (não 404)
http_response_code(200);
header('Content-Type: text/html; charset=utf-8');

// Lê o index.html e serve ele
$html = file_get_contents(__DIR__ . '/index.html');

// Garante que a base URL está correta
$html = str_replace('<base href="/" />', '<base href="/" />', $html);
$html = str_replace('<head>', '<head><base href="/" />', $html);

echo $html;
exit;
