<?php

require("class/Patient.php");

$option = $_POST['option'];

if ($option == 1) {
    $patient = new Patient();

    $patients = $patient->all();
    echo json_encode($patients);
} else if($option == 2) {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $prestation = $_POST['prestation'];
    $chambre = $_POST['chambre'];
    $date_entree = $_POST['date_entree'];
    
    $patient = new Patient();
    $patient->prenom = $prenom;
    $patient->nom = $nom;
    $patient->prestation = $prestation;
    $patient->chambre = $chambre;
    $patient->date_entree = $date_entree;
    $patient->Create();
}