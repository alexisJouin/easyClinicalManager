<?php

require("class/User.php");

//Récupération des données clients
$loginPost = $_POST['login'];
$password = $_POST['password'];

$user = new User();

$user->Find(1, "login", $loginPost);

// Get the password from the database and compare it to a variable (for example post)
$passwordFromPost = $password;
$hashedPasswordFromDB = $user->password;

if (password_verify($passwordFromPost, $hashedPasswordFromDB)) {
    //Démarage de la session
    session_start();
    setcookie("id", $user->id); // genere un cookie contenant l'id de l'agent
    setcookie("pseudo", $user->pseudo);
    setcookie("privilege", $user->privilege);
    $_SESSION['id'] = $user->id;
    $_SESSION['pseudo'] = $user->pseudo;
    $_SESSION['privilege'] = $user->privilege;
    echo 1;
} else {
    echo -1;
}
