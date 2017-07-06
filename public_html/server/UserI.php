<?php

require("class/User.php");

//Récupération des données clients
$prenom = $_POST['prenom'];
$nom = $_POST['nom'];
$login = $_POST['login'];
$password = $_POST['password'];
$email = $_POST['email'];

$forbidenChar = '/ # ; , % * drop Drop DROP
    select Select SELECT Insert INSERT UPDATE Update
    upadate FROM from From insert Insert INSERT
    INTO Into into /';

if (preg_match($forbidenChar, $prenom) || preg_match($forbidenChar, $nom) ||
        preg_match($forbidenChar, $password)) {
    echo -1;
} else {
    $user = new User();

//Create new user
    $user->prenom = $prenom;
    $user->nom = $nom;
    $user->login = $login;
//Crypter mot de passe avec sha
    $options = [
        'cost' => 11,
    ];
    $hash = password_hash($password, PASSWORD_BCRYPT, $options);
    $user->password = $hash;
    $user->email = $email;
    $creation = $user->Create();

    echo 1;
}

// Update Person Info
//   $user->id = "4";	
//   $user->Age = "32";
//   $saved = $user->Save(); 
// Find person
//   $user->id = "4";		
//   $user->Find();
//
//   d($user->Firstname, "Person->Firstname");
//   d($user->Age, "Person->Age");
// Delete person
//   $user->id = "17";	
//   $delete = $user->Delete();
// Get all persons
//   $users = $user->all();  
// Aggregates methods 
//   d($user->max('age'), "Max person age");
//   d($user->min('age'), "Min person age");
//   d($user->sum('age'), "Sum persons age");
//   d($user->avg('age'), "Average persons age");
//   d($user->count('id'), "Count persons");



function d($v, $t = "") {
    echo '<pre>';
    echo '<h1>' . $t . '</h1>';
    var_dump($v);
    echo '</pre>';
}
