<?php

require("easyCRUD/easyCRUD.class.php");

class Prestation Extends Crud {
    # Your Table name 
    protected $table = 'prestation';

    # Primary Key of the Table
    protected $pk = 'code';
    protected $descriptif = 'descriptif';

}
