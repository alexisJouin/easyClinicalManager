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
    
    
});