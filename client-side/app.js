console.log("Sanity Check");

// API Function

$('button').click(function(){
  $.ajax({
    url: 'https://p4mqwugcd5.execute-api.us-west-2.amazonaws.com/dev/hello',
    type: 'GET',
    'Content-Type': "application/json"
  })
	.done((data) =>{
		console.log(data);
        data.message.Contents.map((jesus)=>$("#imageColumn").append(`<div class="image"><img src="https://s3-us-west-2.amazonaws.com/photo-bucket-tmp-prjct/${jesus.Key}"</div>`));
        
	})

        .fail((error) =>{
    	alert("Error! Data could not be found."),
    	console.log('error', error)
    })

  })
;
