<?php

require("easyCRUD/easyCRUD.class.php");

class Prestation_Appartenance Extends Crud {
    # Your Table name 
    protected $table = 'prestation_appartenance';

    # Primary Key of the Table
    protected $code_presta = 'code_presta';
    protected $id_element = 'id_element';

}
