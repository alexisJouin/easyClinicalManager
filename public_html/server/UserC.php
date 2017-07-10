<?php
require("class/User.php");


if (!empty($_POST['login']) && !empty($_POST['password'])) {
    //Récupération des données clients
    $loginPost = $_POST['login'];
    $password = $_POST['password'];

    $user = new User();
    $user->Find(1, "login", $loginPost);

    if (!empty($user)) {
        // Get the password from the database and compare it to a variable (for example post)
        $passwordFromPost = $password;
        $hashedPasswordFromDB = $user->password;
        if (password_verify($passwordFromPost, $hashedPasswordFromDB)) {
            if (!isset($_SESSION)) {
                //Démarage de la session
//                session_destroy();
                session_start();
                $_SESSION['id'] = $user->id;
                $_SESSION['login'] = $user->login;
                $_SESSION['privilege'] = $user->privilege;
                $_COOKIE['login'] = $user->login;
                ?>
                <script>
                //                    alert("Super Co Réussi")
                    window.location.replace("../views/main.html");
                </script>
                <?php
            } else {
                
            }

            echo "Success";
        } else {
            echo "Failed";
        }
    }
}
?>
<script>
//    alert("Super Co Réussi")
   // window.location.replace("../views/main.html");
</script>

