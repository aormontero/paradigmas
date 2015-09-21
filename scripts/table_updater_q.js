
function table_clear(){
	$("#elections tbody").remove();
	
};

function bindDelete() {
	$("#deleteBtn").click(table_clear);
};

function bindPolling() {
	$("#pollBtn").click(startPolling);
};


function requestVotesFromServer(e){
	//console.log('En serverRequest'+e);
	  
	 var req = $.ajax({url: 'http://localhost:8080/votes', 
			   type:'GET',
			   dataType:'text' 
			 });
	 console.log('serverRequest after');
	 console.log('request'+req);
	 return Q(req); // CONVIERTE LA PROMESA DE JQUERY A Q

	};




function updateTable(votes){


	var votes= votes;
	console.log('Updating table');
	table_clear();
	var table = $("#elections");
	var tbody = table.append($("<tbody/>"));
	var td;
	$.each(votes, function(province, data){
		            var row = $("<tr/>");
					td = $("<td/>");
				    td.html(province);
					row.append(td);
					 $.each(data.parties, function(partyName, partyValue){
						td = $("<td/>");
						td.html(partyValue);
						row.append(td);
						td.fadeOut(1000).fadeIn(5000);
						td = $("<td/>");
						td.html(0);
						row.append(td);
						
						
					});
					
					tbody.append(row);				
	});
	
};
var timer;
function startPolling(e){

 timer = setInterval(function(){votesWorkFlow();}, 5000);
 	
};



function votesWorkFlow(e){
		
	  Q().then(disableControls)
	     .then(requestVotesFromServer)
	     .fail(handleServerError)
	     .then(obtainNewVotesCalculations)
		 .then(updateTable)
		 .fail(handleTableError)
		 //.then(updateCharts)
		 .then(enableControls)
		 .done();
  
};
function disableControls(){
	 console.log('Disable controls');
	$("#pollBtn").attr('disabled', 'disabled');
}
function enableControls(){
	console.log('Enable controls');
	$("#pollBtn").removeAttr('disabled');
}

function handleServerError(e){
	console.log(e.toString());
}

function handleTableError(e){
	console.log(e.toString());
}
var times = 0;
function obtainNewVotesCalculations(votes){
	 console.log('Obtaining calculations');
	 var live = 0;
     for(var place in votes){
		 var prov = votes[place];
		 if (prov.voters == 0) continue;
		 live++;
		 for(var p in prov.parties){
			 var prob = Math.random();
			 var v = Math.round(prov.voters*prob);
			 if (v > prov.voters) v = prov.voters;
			 prov.parties[p] += v;
			 prov.voters -= v;
			 if (prov.voters < 0) prove.voters = 0;
		 }	 
	 };
	 if(live == 0){
		 console.log('Elections is finished')
		 clearInterval(timer);
	 };
	 return votes;
};