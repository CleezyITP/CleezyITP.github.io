var numCircs=0;
//var arrayofObject=[];
var searTer="";
var stuff = [];  
var x=0;
var kan;
var press=false;
var newC='';
function setup() {
		createCanvas(displayWidth, 500);
		background(255, 200, 150);
		kan = loadImage("wut.jpg");

		}

function draw() {
		background(kan);
		clear();
		fill(0);
			
		if(typeof(numCircs) === 'undefined'){
				
				
     			alert("try a different word!");
     			numCircs=" ";
     			searTer="Word is not used by Yeezy"
     			newC='';


     			
			} else{

		var newInCount = map(numCircs, 0, 3200, 0, height-10);		
		text(searTer + newC,105, height-newInCount-10);
		fill(255,0,0);
		rect(100, height-newInCount, displayWidth/10, newInCount);
	



		for (var i = 0; i<stuff.length; i++) {
			
			//console.log(stuff[i].sort);
				if(stuff[i].word === 'mine'){
				
				
				var newCount = map(stuff[i].count, 0, 200, 0, height-10);
				fill(0);
				text("mine", displayWidth/10+155, height-newCount-10);
				fill(51,102,255);
				rect(displayWidth/10+150, height-newCount, displayWidth/10, newCount);
				
				} else if(stuff[i].word === 'im'){
				fill(182,109,109);
				var newCount = map(stuff[i].count, 0, 3200, 0, height-10);
				fill(0);
				text("Im", displayWidth/10+755, height-newCount-10);
				fill(255,184,112);
				rect(displayWidth/10+750, height-newCount, displayWidth/10, newCount);
				

			}else if(stuff[i].word === 'my'){
				fill(245,0,61);
				//console.log("my"+ stuff[i].count)
				var newCount = map(stuff[i].count, 0, 3200, 0, height-10);
				fill(0);
				text("my", displayWidth/10+555, height-newCount-10);
				fill(255,112,112);
				rect(displayWidth/10+550, height-newCount, displayWidth/10, newCount);

			}else if(stuff[i].word === "me"){
				fill(77,153,153);
				var newCount = map(stuff[i].count, 0, 3200, 0, height-10);
				fill(0);
				text("me", displayWidth/10+355, height-newCount-10);
				fill(112,184,255);
				rect(displayWidth/10+350, height-newCount, displayWidth/10, newCount);

				//console.log("newCount2 " + newCount);

			}else if(stuff[i].word === 'i'){
				
				var newCount = map(stuff[i].count, 0, 3200, 0, height-10);
				fill(0);
				text("I", displayWidth/10+955, height-newCount-10);
				fill(77,153,115);
				rect(displayWidth/10+950, height-newCount, displayWidth/10, newCount);

			}
		}

	}



};




function searchLyrics(searchTerm){
	

	var tempString = '<div class="searchResult">Searching...</div>'

	$('#theSearchResults').html(tempString);

	var kanyeURL = 'http://www.kanyerest.xyz/api/counter';
	
	var myOut = "Test";
	//console.log(myOut);
	

	$.ajax({
		url: kanyeURL,
		type: 'GET',
		// dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data);
		},
		success: function(data){
			//console.log("data!"+ data.responseText.length);

			//console.log(data);
			var resp = data.responseText;
			var stringResp = resp.slice(19,-14);
			//console.log("stringResp"+stringResp);
			//var dataLength= data.responseText.length;
			var dataObj = JSON.parse(stringResp);
			searTer=searchTerm;

			
			//console.log(dataObj[searchTerm]);
			numCircs=dataObj[searchTerm];
			$('.searchResult').html('');
			newC=" (times used: " + numCircs +")";
			

	// get order
     			     
			 	$.each(dataObj, function(word, count) {
			       stuff.push({word: word, count: count})
			     });
			 	var herc= stuff.sort(function(obj1, obj2) {
	
				return obj2.count - obj2.count;

			});

			 	


				//my attempts

				// if (dataObj.value[i]==="undefined"){
				// console.log("boop");
				// }else {
				//console.log(dataObj.keys[i]);	
				 //}
				// var obj={};
				// obj.numCount=dataObj[i];
				// arrayofObject.push(obj);
				
				
			}


		
		
	});

}

	$(document).ready( function(){
	//console.log("Loaded 2");
	$('#theButton').click( function(){
		//Do this stuff when a click occurs
		//console.log("You clicked!!!");
		press=true;
		
		
		var theInputValue = $('#theInput').val().toLowerCase();
		//console.log(theInputValue);

		$('#theSearchResults').html('');

		searchLyrics(theInputValue);





	});

		



});

	

	
