<?php

require("easyCRUD/easyCRUD.class.php");

class Chambre Extends Crud {
    # Your Table name 
    protected $table = 'chambre';

    # Primary Key of the Table
    protected $pk = 'numero';
    protected $etage = 'etage';

}
