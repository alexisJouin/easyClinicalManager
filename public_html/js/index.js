$(document).ready(function () {

    Materialize.updateTextFields();

    $("#displayInscription").click(function () {
        $("#displayInscription").hide(500);
        $(".inscription").show(500);
        $(".connection").hide(500);
        $("#displayConnection").show(500);
    });

    $("#displayConnection").click(function () {
        $("#displayConnection").hide(500);
        $(".connection").show(800);
        $(".inscription").hide(500);
        $("#displayInscription").show(500);
    });



    //Connection
    $(".connection").children().children('form').submit(function () {
        var login = $("#loginConnect").val();
        var password = $("#passwordConnect").val();

//        myXhr = $.post(
//                'server/UserC.php',
//                {
//                    login: login,
//                    password: password
//                },
//                function (data) {
//                    if (data == 'Success') {
//                        alert("Connection réussi !");
//                        window.location.replace("views/main.html");
//                    } else {
//                        alert("Echec de Connection !");
//                    }
//                },
//                'text'
//
//                );
//
        $.ajax({
            type: "POST",
            url: "server/UserC.php",
            data: "login=" + login + "&password=" + password,
            dataType: "text",
            success: function (result) {
                if (data == 'Success') {
//                    alert("Connection réussi !");
                    window.location.replace("views/main.html");
                } else {
//                    alert("Echec de Connection !");
                }
            },
            error: function (result, statut, erreur) {
//                alert("Erreur Connection : " + result);
                console.log(statut);
                console.log(erreur);
//                window.location.replace("views/main.html");
            },
            complete: function (result, statut) {
                console.log(result);
//                alert("Connection " + statut);
                window.location.replace("views/main.html");
            }
        });
        window.location.replace("views/main.html");
    });


    var prenomInput = "";
    var nomInput = "";
    var loginInput = "";
    //Pour afficher le login
    $("#first_name").focus(function () {
        $("#first_name").focusout(function () {
            prenomInput = $("#first_name").val();
            if ($("#last_name").val() != "" && $("#first_name").val() != "") {
                $("#login").val(prenomInput.toLowerCase().replace(/\s/g, '')
                        + "." + nomInput.toLowerCase().replace(/\s/g, ''));
            }
        });
    });
    $("#last_name").focus(function () {
        $("#last_name").focusout(function () {
            nomInput = $("#last_name").val();
            if ($("#last_name").val() != "" && $("#first_name").val() != "") {
                $("#login").val(prenomInput.toLowerCase().replace(/\s/g, '')
                        + "." + nomInput.toLowerCase().replace(/\s/g, ''));
            }
        });
    });



    //Inscription
    $(".inscription").children().children('form').submit(function () {
        var prenom = $("#first_name").val();
        var nom = $("#last_name").val();
        var login = $("#login").val();
        var password = $("#password").val();
        var email = $("#email").val();

        $.ajax({
            type: "POST",
            url: "server/UserI.php",
            data: "prenom=" + prenom + "&nom=" + nom + "&password=" + password
                    + "&email=" + email + "&login=" + login,
            success: function (result) {
                if (result == -1) {
                    $("#erreurInsctiption").modal("open");
                }
                $("#confirmInsctiption").modal("open");
            },
            error: function (result) {
                $("#erreurInsctiption").modal("open");
            }
        });
    });

});