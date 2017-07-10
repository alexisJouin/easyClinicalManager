<?php

require("easyCRUD/easyCRUD.class.php");

class Patient Extends Crud {
    # Your Table name 
    protected $table = 'patient';

    # Primary Key of the Table
    protected $pk = 'id';
    protected $nom = 'nom';
    protected $prenom = 'prenom';
    protected $prestation = 'cp0';
    protected $chambre = 'ch00';
    protected $date_entree = '01/09/2016';
    protected $date_sortie = '01/09/2016';
    

}