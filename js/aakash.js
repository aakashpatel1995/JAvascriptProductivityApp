"use strict";
$(document).ready(function () {
    var group = [];
    var gp = [];
    var str = "";
    var divi = [];
    var total=0;
    var displayScores = function () {

        $("#scores").val(group.join("\n"),);
        $("#tot").val(total);
    };

    $("#add").click(function () 
        {
            $("#member").focus();
          
            var mem = $("#member").val();
            var pc = parseFloat($("#price").val());

        if (mem === "" || pc === "") 
        {
            alert(" Please Fill details...");
        }
        else 
        {
            total = total + pc;
            str = mem + "   $"+pc;
            group.push([str]);
            
            $("#member").val("");
            $("#price").val("");
            displayScores();
        }
    });
   
    $("#cal").click(function () {
        
        var  rt =  parseFloat( $("#rate").val());
        
        var dt = total * (rt/100);
        $("#Dtot").val(dt);
          var  rtt =  parseFloat( $("#Trate").val());
          var TT  = total * (rtt/100);
        $("#ttot").val(TT);
        var f = total - dt + TT;
        $("#final").val(f);
        
    })
    $("#clear").click(function () {

        group.length = 0;
        total=0;
        $("#scores").val("");
        $("#tot").val("");
    })
}); // end ready()
