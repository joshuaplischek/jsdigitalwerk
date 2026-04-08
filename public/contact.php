<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name    = htmlspecialchars(trim($input['name'] ?? ''));
$email   = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$telefon = htmlspecialchars(trim($input['telefon'] ?? ''));
$message = htmlspecialchars(trim($input['message'] ?? ''));

if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Pflichtfelder fehlen']);
    exit;
}

$to      = 'info@jsdigitalwerk.de';
$subject = 'Neue Kontaktanfrage von ' . $name;
$body    = "Name: $name\nE-Mail: $email\nTelefon: $telefon\n\nNachricht:\n$message";
$headers = "From: noreply@jsdigitalwerk.de\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'E-Mail konnte nicht gesendet werden']);
}
