console.log("Sanity Check");

// API Function

let imageNum = [1,2,3,4,5,6,7,8,9,10,11,12];

$('button').click(function(){
  $.ajax({
    url: 'https://p4mqwugcd5.execute-api.us-west-2.amazonaws.com/dev/hello',
    type: 'GET',
    'Content-Type': "application/json"
  })
	.done((data) =>{
		console.log(data);
	})
    // success: function(data){
    // 	console.log(data);
    // 	$(".imageColumn").append("<p></p>")
    // },
    .fail((error) =>{
    	alert("Error! Data could not be found.")
    	console.log('error', error)
    })
    // fail:function(error){
    // 	alert("Error! Data could not be found.");
    // },
  })
;

//https://stackoverflow.com/questions/29488371/how-to-add-a-list-of-images-to-the-document-from-an-array-of-urls