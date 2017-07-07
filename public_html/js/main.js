$(document).ready(function () {

    var id, login, privilege;

    //**********************************************//
    //********** GESTION PRIVILEGE *****************//
    //**********************************************//
    getSession();
    alert(privilege);


    $('#footer').modal();

    //Bouton étages
    $('#BTetage1').click(function () {
        $('#selectEtage').hide(200);
        $('#etage1').show(500);
        $('#backToSelectEtage').show(200);
    });
    $('#BTetage2').click(function () {
        $('#selectEtage').hide(200);
        $('#etage2').show(500);
        $('#backToSelectEtage').show(200);
    });
    $('#backToSelectEtage').click(function () {
        $('#selectEtage').show(500);
        $('#etage1').hide(200);
        $('#etage2').hide(200);
        $('#backToSelectEtage').hide(200);
    });


    function getSession() {
        $.ajax({
            type: "POST",
            url: "../server/getCurrentSession.php",
            success: function (result) {
                if (result == -1) {
                    alert("Pas connecté !");
                    window.location.replace("../index.html");
                } else {
                    var listSession = "";
                    console.log(result);
                    listSession = JSON.parse(result);
                    console.log(listSession);
                    id = listSession.id;
                    login = listSession.login;
                    privilege = listSession.privilege;
                    $(".login").append(login);
                    if (privilege == 1) {//si c'est un agent
                        $("#divAdmin").hide();
                        $("#divAgent").show();
                    } else if (privilege == 2) {// Si c'est l'admin
                        $("#divAgent").hide();
                        $("#divAdmin").show();
                    }
                }
            },
            error: function (result) {
                alert("Erreur Session");
                console.log(JSON.parse(result));
                window.location.replace("../index.html");
            }
        });
    }

    //LOGOFF
    $('#logOff').click(function () {
        $.ajax({
            type: "POST",
            url: "../server/logOff.php",
            success: function (result) {
                console.log(result);
                window.location.replace("../index.html");
            },
            error: function (result) {
                alert("Erreur LogOff");
                console.log(result);
            }
        });
    });


//    $(window).bind('beforeunload', function () {
////        alert("yoyo");
//        return 'Are you sure you want to leave?';
//    });
});

