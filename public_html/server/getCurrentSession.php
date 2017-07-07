<?php

require("class/User.php");

mb_internal_encoding('UTF-8');
setlocale(LC_CTYPE, 'fr_FR.UTF-8');
header('Content-type: text/html; charset=UTF-8');

session_start();

$user = new User();
$user->Find($_SESSION['id']);

$_SESSION['id'] = $user->id;
$_SESSION['login'] = $user->login;
$_SESSION['privilege'] = $user->privilege;

$id = $_SESSION['id'];
$login = $_SESSION['id_groupe'];
$privilege = $_SESSION['privilege'];


$tabSession = array(
    "id" => $id,
    "login" => $login,
    "privilege" => $privilege
);

echo json_encode($tabSession);
