console.log("Sanity Check");

// API Function

let imageNum = [1,2,3,4,5,6,7,8,9,10,11,12];
let dataType = ['Key'];

$("button").click(function(){
  $.ajax({
    url: "https://s3-us-west-2.amazonaws.com/photo-bucket-tmp-prjct/Key",
    type: "GET",
    
    success:function(data){

    },
    fail:function(error){
    	alert("Error! Data could not be found.");
    },
  });
});

//https://stackoverflow.com/questions/29488371/how-to-add-a-list-of-images-to-the-document-from-an-array-of-urls