<?php

require("class/User.php");

mb_internal_encoding('UTF-8');
setlocale(LC_CTYPE, 'fr_FR.UTF-8');
header('Content-type: text/html; charset=UTF-8');

session_start();

$id = $_SESSION['id'];
$login = $_SESSION['login'];
$privilege = $_SESSION['privilege'];


if (ifsessionExists($id, $login, $privilege)) {
    $user = new User();
    $user->Find($_SESSION['id']);

    $_SESSION['id'] = $user->id;
    $_SESSION['login'] = $user->login;
    $_SESSION['privilege'] = $user->privilege;




    $tabSession = array(
        "id" => $id,
        "login" => $login,
        "privilege" => $privilege
    );
    echo json_encode($tabSession);
} else {
    echo -1;
}

function ifsessionExists($id, $login, $privilege) {
    // check if session exists?
    if (isset($_SESSION)) {
        if (!empty($id) || !empty($login) || !empty($privilege)) {
            return true;
        }
    } else {
        return false;
    }
}
