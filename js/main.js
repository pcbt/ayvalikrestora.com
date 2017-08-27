/**
 * Created by Batu on 22/02/2017.
 */

$(document).ready(function() {
    $('#restorasyon').click(function(e) {
        $("#tadilat-us").hide();
        $("#insaat-us").hide();
        $("#kentsel-us").hide();
        $("#restorasyon-box").fadeIn("slow");
    });
    $('#insaat').click(function(e) {
        $("#tadilat-us").hide();
        $("#restorasyon-us").hide();
        $("#kentsel-us").hide();

            $("#insaat-box").fadeIn("slow");

    });
    //$('#tadilat').click(function(e) {
    //    $("#restorasyon-us").hide();
    //    $("#insaat-us").hide();
    //    $("#kentsel-us").hide();
    //
    //
    //
    //    $("#tadilat-box").fadeIn("slow");
    //     //});
    //
    //});
    $('#kentsel').click(function(e) {
        $("#tadilat-us").hide();
        $("#insaat-us").hide();
        $("#restorasyon-us").hide();
        //$("#kentsel").animate({"left":"-620px"}, "slow", function(){
        $("#kentsel-box").fadeIn("slow");
        // });
    });
    $('.x-close').click(function(e) {
        $(".box").hide();
        $(".boxy").fadeIn("slow");
    });


});