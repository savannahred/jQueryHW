$("#subscribe").click(function(){

	if (this.checked){
		$("#emailField").css("display", "block");
	  }
	else{
		console.log("Not Selected");
		$("#emailField").css("display", "none");

	}
  });




// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}
 
// }



// $("#subscribe").click(function(){
// 	$("#emailField").toggle("slow");
// })