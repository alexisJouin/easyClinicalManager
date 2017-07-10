<?php

require("class/Chambre.php");

//Récupération des données clients
$numero = $_POST['numero'];
$etage = $_POST['etage'];

if(!empty($numero) || !empty($etage)){
    $chambre = new Chambre();

    //Create new user
    $chambre->numero = $numero;
    $chambre->etage = $etage;

    $creation = $chambre->Create();

    echo 1;
}else{
    $chambre = new Chambre();
    
    $chambres = $chambre->all();
    echo json_encode($chambres);
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
