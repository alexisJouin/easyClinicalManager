$(document).ready(function () {

    var id, login, privilege;
    //**********************************************//
    //********** GESTION PRIVILEGE *****************//
    //**********************************************//
    getSession();
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
        $('#infoChambre').hide(200);
        
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


//***************** CHAMBRES *********************//
    $.ajax({
        type: "POST",
        url: "../server/chambreI.php",
        data: "numero=0&etage=0",
        success: function (result) {
            console.log(result);
            var chambres = JSON.parse(result);
            for (var i in chambres) {
                $('#listeChambre').append("<li>" + chambres[i].numero + " => Etage " + chambres[i].etage + "</li>");


                //Pour la partie Agent
                if (chambres[i].etage == 1) {
                    $('#etage1').children("ul").append("<li id='" + chambres[i].numero + "'>" + chambres[i].numero + "</li>");
                } else if (chambres[i].etage == 2) {
                    $('#etage2').children("ul").append("<li id='" + chambres[i].numero + "'>" + chambres[i].numero + "</li>");
                }
            }

        },
        error: function (result) {
            alert("Erreur LogOff");
            console.log(result);
        }
    });
    $('#chambres').children().children().children('form').submit(function () {
        $.ajax({
            type: "POST",
            data: "numero=" + $('#numChambre').val() + "&etage=" + $('#etage').val(),
            url: "../server/chambreI.php",
            success: function (result) {
                $('#listeChambre').append("<li>" + $('#numChambre').val() + " => Etage " + $('#etage').val() + "</li>");
            },
            error: function (result) {
                alert("Erreur LogOff");
                console.log(result);
            }
        });
    });
    //***************** Préstation *********************//
    $('select').material_select();
    $('.timepicker').pickatime({
        default: 'now', // Set default time
        fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
        twelvehour: false, // Use AM/PM or 24-hour format
        donetext: 'OK', // text for done-button
        cleartext: 'Effacer', // text for clear-button
        canceltext: 'Annuler', // Text for cancel-button
        autoclose: true, // automatic close timepicker
        ampmclickable: true, // make AM PM clickable
        aftershow: function () {} //Function for after opening timepicker  
    });

//    $('.divPresta').each(function () {
//        $(this).append('\n\
//        <a href="#" class="displayAddPresentation">Ajouter préstation ?</a>\n\
//            <div class="row" class="addPrestation">\n\
//                <form class="col s12">\n\
//                    <div class="row">\n\
//                        <div class="input-field col s5">\n\
//                            <input id="nomPresta" type="text" class="validate" required>\n\
//                            <label for="nomPresta">Préstation</label>\n\
//                        </div>\n\
//                        <div class="input-field col s7">\n\
//                            <i class="material-icons prefix">mode_edit</i>\n\
//                            <textarea id="descriptifPresta" class="materialize-textarea"></textarea>\n\
//                            <label for="descriptifPresta">Déscriptif</label>\n\
//                        </div>\n\
//                    </div>\n\
//                    <div class="row">\n\
//                    \n\
//                    <a href="#" class="displayPeriodicite">Préstation périodique ?</a>\n\
//                    <div class="periodiciteForm">\n\
//                        <div class="input-field col s12" id="selectDate">\n\
//                            <select multiple>\n\
//                                <option value="" disabled selected>Choisir les jours à répéter</option>\n\
//                                <option value="1">Lundi</option>\n\
//                                <option value="2">Mardi</option>\n\
//                                <option value="3">Mercredi</option>\n\
//                                <option value="3">Jeudi</option>\n\
//                                <option value="3">Vendredi</option>\n\
//                                <option value="3">Samedi</option>\n\
//                                <option value="3">Dimanche</option>\n\
//                            </select>\n\
//                            <label>Choisir une ou plusieurs dates</label>\n\
//                        </div>\n\
//                        <div class="input-field col s2">\n\
//                            <label for="heurePeriod">Heure</label>\n\
//                            <input id="heurePeriod" type="text" class="timepicker picker__input picker__input--active" tabindex="-1">\n\
//                        </div>\n\
//                    </div>\n\
//                </div>\n\
//                    <button class="btn-floating btn-large waves-effect waves-light blue right" type="submit" name="action">\n\
//                        <i class="material-icons">add</i>\n\
//                    </button>\n\
//                </form>\n\
//        </div>\n\
//        ');
//    });

    $('.divPresta').each(function () {
        var id = $(this).attr("id");
        $.ajax({
            type: "POST",
            data: "id=" + id,
            url: "../server/PrestationI.php",
            success: function (result) {
                var prestations = JSON.parse(result);
                console.log(prestations);
                for (var i in prestations) {
                    $('#' + id).append("<li class='listPresta'>" + prestations[i].nom + "</li>");
//                    $("#nomPrestaGET").append(prestations[i].nom);
//                    $("#descriptifPrestaGET").append(prestations[i].descriptif);

                    $('.listPresta').click(function () {
                        $("#infoPresta").modal("open");
                    });
                }

            },
            error: function (result) {
                alert("Erreur Préstation");
                console.log(result);
            }
        });
    });

    $("#nomPrestaGET").append("Linge");
    $("#descriptifPrestaGET").append("Un Lavage + séchage du linge par semaine");

    $('.displayAddPresentation').click(function () {
        $('.addPrestation').show(500);
        $('.displayAddPresentation').hide(200);
    });
    $('.displayPeriodicite').click(function () {
        $('.periodiciteForm').show(500);
        $('.displayPeriodicite').hide(200);
    });


    //****************** PATIENT *************************//
    $('#displayAddPatient').click(function () {
        $('#displayAddPatient').fadeOut(200);
        $('#displayListPatient').fadeIn(200);
        $('#listPatient').fadeOut(200);
        $('#addPatient').fadeIn(300);
    });
    $('#displayListPatient').click(function () {
        $('#displayListPatient').fadeOut(200);
        $('#displayAddPatient').fadeIn(200);
        $('#listPatient').fadeIn(200);
        $('#addPatient').fadeOut(300);
    });

    //display list patients
    $.ajax({
        type: "POST",
        data: "option=1",
        url: "../server/patientI.php",
        success: function (result) {
            console.log(result);
            var patients = JSON.parse(result);
            console.log(patients);
            for (var i in patients) {
                $('#listPatient').children('ul').append("<li class='listPatient'>" + patients[i].nom + " Chambre n° " + patients[i].chambre + "</li>");

//                    $("#descriptifPrestaGET").append(prestations[i].descriptif);

            }
        },
        error: function (result) {
            alert("Erreur lors de la récup des patients");
            console.log(result);
        }
    });

    //add patient
    $('.datetimepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 20, // Creates a dropdown of 15 years to control year
        labelMonthNext: 'Mois suivant',
        labelMonthPrev: 'Mois précédent',
        labelMonthSelect: 'Selectionner le mois',
        labelYearSelect: 'Selectionner une année',
        monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdaysFull: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        today: 'Aujourd\'hui',
        clear: 'Réinitialiser',
        close: 'Fermer',
        format: 'yyyy-mm-dd'
    });

    $('#addPatient').children().children("form").submit(function () {
        $.ajax({
            type: "POST",
            data: "option=2&nom=" + $('#nomPatient').val() +
                    "&prenom=" + $("#prenomPatient").val() +
                    "&prestation=" + $("#selectPrestaPatient option:selected").text() +
                    "&chambre=" + $("#selectChambrePatient option:selected").text() +
                    "&date_entree=" + $("#dateEntreePatient").val(),
            url: "../server/patientI.php",
            success: function (result) {
                $("#nomPatientGet").append($('#nomPatient').val());
                $('#confirmAddPatient').modal("open");
                $('#listPatient').children('ul').append("<li class='listPatient'>" + $('#nomPatient').val() +
                        " Chambre n° " + $("#selectChambrePatient option:selected").text() + "</li>");
                $('input').val("");
                $('#displayListPatient').click();
            },
            error: function (result) {
                alert("Erreur lors de l'ajout du patient");
                console.log(result);
            }
        });
    });








    //Export
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 20, // Creates a dropdown of 15 years to control year
        labelMonthNext: 'Mois suivant',
        labelMonthPrev: 'Mois précédent',
        labelMonthSelect: 'Selectionner le mois',
        labelYearSelect: 'Selectionner une année',
        monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdaysFull: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        today: 'Aujourd\'hui',
        clear: 'Réinitialiser',
        close: 'Fermer',
        format: 'dd/mm/yyyy'
    });
    $('#optionExport').children().children('input').click(function () {
        var choice = $(this).attr("id");
        if (choice === 'chambreRadio') {
            $('#selectChambreExport').fadeIn(200);
        } else {
            $('#selectChambreExport').fadeOut(200);
        }
    });




    // *************** VUE AGENT **********************//
    $("#vueAgent").click(function () {
        $("#vueAgent").fadeOut(300);
        $("#divAdmin").fadeOut(300);
        $("#divAgent").fadeIn(300);

    });

    //AFTER PAGE LOADED
    $(window).on('load', function () {
        
        $('.etage').children().children('li').click(function () {
            var idChambre = $(this).attr('id');
            $(".etage").fadeOut(200);
            $("#infoChambre").fadeIn(300);
            $('#idChambre').append(idChambre);
        });

    });







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

