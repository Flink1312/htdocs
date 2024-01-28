body
{
    font-family
:
    Arial, sans-serif;
    background-color
:
    #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content
:
    center;
    align-items
:
    center;
    height: 100
    vh;
}

form
{
    background-color
:
    #fff;
    padding: 20
    px;
    border-radius
:
    8
    px;
    box-shadow
:
    0
    0
    10
    px
    rgba (0,0,0,0.1);
}

h2
{
    text-align
:
    center;
    color: #
    333;
}

label
{
    display: block;
    margin-bottom
:
    8
    px;
}

input
{
    width: 100%;
    padding: 8
    px;
    margin-bottom
:
    16
    px;
    box-sizing
:
    border-box;
}

input[type="submit"]
{
    background-color
: #
    4
    caf50;
    color: #fff;
    cursor: pointer;
}

input[type="submit"]
:
hover
{
    background-color
: #
    45
    a049;
}
<link rel="stylesheet" href="styles.css"/>

<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
<link rel="stylesheet" href="styles.css">
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
