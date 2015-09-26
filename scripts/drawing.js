

var options = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

};

function updateTable(modelo){
    var mitabla= $("#elections");
    table_clear();
        var datas = modelo.datos;
        var totales = 0;
        $.each(datas, function(index) {  
        var $linea = $('<tr></tr>');
        $linea.append( $('<td></td>').html(datas[index].nombre));
        $.each(datas[index].parties,function(index2,data){
            $linea.append( $('<td></td>').html(data)); 
            $linea.append( $('<td></td>').html(((data*100)/modelo.totales[index]).toFixed(4))); 
            totales += data;
        });
        $linea.append( $('<td></td>').html(totales));
        $linea.append( $('<td></td>').html(((totales*100)/modelo.totales[index]).toFixed(2)));
        $linea.append( $('<progress class="prog" value="'+totales+'" max="'+modelo.totales[index]+'"></progress>'));
        mitabla.append($linea);
        totales=0;
    }); 
};




function createChart(modelo){
var totales = 0;
var data = [
    {
        value: modelo.datos[0].parties['pln'],
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "PLN"
    },
    {
        value: modelo.datos[0].parties['pac'],
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "PAC"
    },
    {
        value: modelo.datos[0].parties['plib'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "PLIB"
    },
    {
        value: modelo.datos[0].parties['rc'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "RC"
    }
]
return data;
};


function createChart1(modelo){
var data = [
    {
        value: modelo.datos[1].parties['pln'],
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "PLN"
    },
    {
        value: modelo.datos[1].parties['pac'],
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "PAC"
    },
    {
        value: modelo.datos[1].parties['plib'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "PLIB"
    },
    {
        value: modelo.datos[1].parties['rc'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "RC"
    }

]
return data;
};

function createChart2(modelo){
var data = [
    {
        value: modelo.datos[2].parties['pln'],
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "PLN"
    },
    {
        value: modelo.datos[2].parties['pac'],
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "PAC"
    },
    {
        value: modelo.datos[2].parties['plib'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "PLIB"
    },
    {
        value: modelo.datos[2].parties['rc'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "RC"
    }

]
return data;
};

function createChart3(modelo){
var data = [
    {
        value: modelo.datos[3].parties['pln'],
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "PLN"
    },
    {
        value: modelo.datos[3].parties['pac'],
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "PAC"
    },
    {
        value: modelo.datos[3].parties['plib'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "PLIB"
    },
    {
        value: modelo.datos[3].parties['rc'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "RC"
    }

]
return data;
};

function createChart4(modelo){
var data = [
    {
        value: modelo.datos[4].parties['pln'],
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "PLN"
    },
    {
        value: modelo.datos[4].parties['pac'],
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "PAC"
    },
    {
        value: modelo.datos[4].parties['plib'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "PLIB"
    },
    {
        value: modelo.datos[4].parties['rc'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "RC"
    }

]
return data;
};


function createChart5(modelo){
var data = [
    {
        value: modelo.datos[5].parties['pln'],
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "PLN"
    },
    {
        value: modelo.datos[5].parties['pac'],
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "PAC"
    },
    {
        value: modelo.datos[5].parties['plib'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "PLIB"
    },
    {
        value: modelo.datos[5].parties['rc'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "RC"
    }

]
return data;
};


function createChart6(modelo){
var data = [
    {
        value: modelo.datos[6].parties['pln'],
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "PLN"
    },
    {
        value: modelo.datos[6].parties['pac'],
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "PAC"
    },
    {
        value: modelo.datos[6].parties['plib'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "PLIB"
    },
    {
        value: modelo.datos[6].parties['rc'],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "RC"
    }

]
return data;
};


function createChart7(modelo){

var data = [
    {
        value: ((modelo.datos[0].parties['pln'])+(modelo.datos[0].parties['pac'])+
            (modelo.datos[0].parties['plib'])+(modelo.datos[0].parties['rc']) ),
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: modelo.datos[0].nombre
    },
    {
        value: ((modelo.datos[1].parties['pln'])+(modelo.datos[1].parties['pac'])+
            (modelo.datos[1].parties['plib'])+(modelo.datos[1].parties['rc']) ),
        color: "#949FB1",
        highlight: "#F7464A",
        label: modelo.datos[1].nombre
    },
    {
        value: ((modelo.datos[2].parties['pln'])+(modelo.datos[2].parties['pac'])+
            (modelo.datos[2].parties['plib'])+(modelo.datos[2].parties['rc']) ),
        color: "#FDB45C",
        highlight: "#F7464A",
        label: modelo.datos[2].nombre
    },
    {
        value: ((modelo.datos[3].parties['pln'])+(modelo.datos[3].parties['pac'])+
            (modelo.datos[3].parties['plib'])+(modelo.datos[3].parties['rc']) ),
        color: "#46BFBD",
        highlight: "#F7464A",
        label: modelo.datos[3].nombre
    },
    {
        value: ((modelo.datos[4].parties['pln'])+(modelo.datos[4].parties['pac'])+
            (modelo.datos[4].parties['plib'])+(modelo.datos[4].parties['rc']) ),
        color: "#F7464A",
        highlight: "#F7464A",
        label: modelo.datos[4].nombre
    },
    {
        value: ((modelo.datos[5].parties['pln'])+(modelo.datos[5].parties['pac'])+
            (modelo.datos[5].parties['plib'])+(modelo.datos[5].parties['rc']) ),
        color: "#4D5360",
        highlight: "#F7464A",
        label: modelo.datos[5].nombre
    },
    {
        value: ((modelo.datos[6].parties['pln'])+(modelo.datos[6].parties['pac'])+
            (modelo.datos[6].parties['plib'])+(modelo.datos[6].parties['rc']) ),
        color: "#46BFBD",
        highlight: "#F7464A",
        label: modelo.datos[6].nombre
    },

]
return data;
};





var myPieChart;
var myPieChart1;
var myPieChart2;
var myPieChart3;
var myPieChart4;
var myPieChart5;
var myPieChart6;
var myPieChart7;



function drawChart(e){
    var ctx = document.getElementById("myChart").getContext("2d");
    myPieChart = new Chart(ctx).Pie(createChart(modelo),options);

    var ctx1 = document.getElementById("myChart1").getContext("2d");
    myPieChart1 = new Chart(ctx1).Pie(createChart1(modelo),options);

    var ctx2 = document.getElementById("myChart2").getContext("2d");
    myPieChart2 = new Chart(ctx2).Pie(createChart2(modelo),options);

    var ctx3 = document.getElementById("myChart3").getContext("2d");
    myPieChart3 = new Chart(ctx3).Pie(createChart3(modelo),options);

    var ctx4 = document.getElementById("myChart4").getContext("2d");
    myPieChart4 = new Chart(ctx4).Pie(createChart4(modelo),options);

    var ctx5 = document.getElementById("myChart5").getContext("2d");
    myPieChart5 = new Chart(ctx5).Pie(createChart5(modelo),options);

    var ctx6 = document.getElementById("myChart6").getContext("2d");
    myPieChart6 = new Chart(ctx6).Pie(createChart6(modelo),options);

    var ctx7 = document.getElementById("myChart7").getContext("2d");
    myPieChart7 = new Chart(ctx7).Pie(createChart7(modelo),options);
};


function bindChart() {
    $("#drawChartBtn").click(drawChart);
};



