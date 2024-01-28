<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
<h2>Login</h2>
<form action="login.php" method="post">
    <label for="username">Benutzername:</label>
    <input type="text" id="username" name="username" required><br>

        <label for="password">Passwort:</label>
        <input type="password" id="password" name="password" required><br>

            <input type="submit" value="Login">
</form>
</body>
</html>
<?php
// Dummy-Benutzerdaten
$benutzername = 'demo';
$passwort = 'pass123';

// Überprüfen, ob das Formular abgeschickt wurde
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Benutzername und Passwort aus dem Formular erhalten
    $eingegebenerBenutzername = $_POST['username'];
    $eingegebenesPasswort = $_POST['password'];

    // Überprüfen, ob die eingegebenen Daten korrekt sind
    if ($eingegebenerBenutzername === $benutzername && $eingegebenesPasswort === $passwort) {
        echo 'Login erfolgreich';
        // Hier könntest du den Zugriff auf das Internet erlauben
    } else {
        echo 'Login fehlgeschlagen';
    }
}
?>
