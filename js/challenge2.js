
$("#useBilling").change(function(){

	if (this.checked){
		$("#home").val($("#billing").val());
		$("#home").prop('disabled', true); 
	  }
	else{
		console.log("Not Selected");
		$("#home").val("");
		$("#home").prop('disabled', false);

	}
  });






// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");

// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	