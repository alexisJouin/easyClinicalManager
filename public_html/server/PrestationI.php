<?php

require("class/Prestation_Element.php");
//require("class/Prestation_Appartenance.php");

//Récupération des données clients
$code = $_POST['id'];

if (!empty($code)) {
    $pe = new Prestation_Element();
    $pa = new Prestation_Appartenance();

    //Create new user
    $pa->code_presta = $code;
    $pa->Find();
    
    $pe->id = $pa->id_element;
    $pe->Find();
    
    $prestations = $pe->all(); 
    
    echo json_encode($prestations);
   

} else {

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
