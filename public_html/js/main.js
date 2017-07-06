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
            dataType: 'json',
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