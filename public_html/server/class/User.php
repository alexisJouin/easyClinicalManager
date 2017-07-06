<?php

require("easyCRUD/easyCRUD.class.php");

class User Extends Crud {
    # Your Table name 
    protected $table = 'user';

    # Primary Key of the Table
    protected $pk = 'id';
    protected $prenom = 'prenom';
    protected $nom = 'nom';
    protected $login = 'prenom.nom';
    protected $password = 'password';
    protected $email = 'prenom@mail.com';

}
