<?php
// Protection contre les injections
function cleanInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Vérification que la requête est bien en POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération et nettoyage des données
    $name = cleanInput($_POST['name']);
    $email = cleanInput($_POST['email']);
    $phone = cleanInput($_POST['phone']);
    $message = cleanInput($_POST['message']);
    
    // Email de destination
    $to = "dorian.speedclean@gmail.com";
    
    // Sujet de l'email
    $subject = "Nouveau message de " . $name . " via SPEEDCLEAN72";
    
    // Construction du corps du message
    $email_content = "Nouveau message de contact:\n\n";
    $email_content .= "Nom: " . $name . "\n";
    $email_content .= "Email: " . $email . "\n";
    $email_content .= "Téléphone: " . ($phone ? $phone : "Non renseigné") . "\n\n";
    $email_content .= "Message:\n" . $message . "\n";
    
    // En-têtes de l'email
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Tentative d'envoi de l'email
    if(mail($to, $subject, $email_content, $headers)) {
        // Succès
        $response = [
            'success' => true,
            'message' => 'Votre message a été envoyé avec succès !'
        ];
    } else {
        // Échec
        $response = [
            'success' => false,
            'message' => 'Une erreur est survenue lors de l\'envoi du message.'
        ];
    }
} else {
    // Méthode non autorisée
    $response = [
        'success' => false,
        'message' => 'Méthode non autorisée.'
    ];
}

// Retour en JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
