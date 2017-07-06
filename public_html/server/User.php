<?php

require_once 'infoBDD.php';

class User {

    //Connection BDD
    public function __constuct() {
        try {

            $attrs = array(PDO::ATTR_PERSISTENT => true);

            $dbh = new PDO('mysql:host=localhost;dbname=' . $dbname, $user, $pass, $attrs);

            // the following tells PDO we want it to throw Exceptions for every error.
            // this is far more useful than the default mode of throwing php errors
            $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $dbh->exec("set names utf8");
        } catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    public function add() {
        
    }

    public function change() {
        
    }

    public function delete() {
        
    }

}
