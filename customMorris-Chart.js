
// Line Charts
    var line_chart_condutor = jQuery("#line-chart-condutor");

    var line_chart = Morris.Line({
	   element: "line-chart-condutor",
	   data: [
	   ],
	   xkey: "y",
	   ykeys: ["a"],
	   xLabels: "day",
	   xLabelFormat: function (d) {
	   var days = ["Dom","Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
	   return days[d.getDay()]+" ("+d.getDate()+"/"+(d.getMonth()+1)+")";
	   },
	   pointFillColors: ["grenn"],
	   pointStrokeColors: ["green"],
           lineColors: ["green","green"],
	   labels: ["Passageiros cadastrados"],
	   labelColor:"green",
	   redraw: true
    });

	line_chart_condutor.parent().attr("style", "");
    });

