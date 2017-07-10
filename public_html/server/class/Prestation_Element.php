<?php

require("easyCRUD/easyCRUD.class.php");

class Prestation_Element Extends Crud {
    # Your Table name 

    protected $table = 'prestation_element';

    # Primary Key of the Table
    protected $pk = 'id';
    protected $nom = 'nom';
    protected $descriptif = 'descriptif';
    protected $periodicite_jour = 'periodicite_jour';
    protected $periodicite_heure = 'periodicite_heure';

}

class Prestation_Appartenance Extends Crud {
    # Your Table name 

    protected $table = 'prestation_appartenance';

    # Primary Key of the Table
    protected $code_presta = 'code_presta';
    protected $id_element = 'id_element';

}
