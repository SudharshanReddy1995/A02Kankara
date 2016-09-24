

function Calculation()
{
	
		var quantityorweight = $("#qow").val();
	var price = $("#priceis").val();
	var totalprice = parseFloat(quantityorweight) * parseFloat(price);
	document.getElementById("tpriceis").value = totalprice;
	
	if (isNaN(quantityorweight) || quantityorweight < 0 ) {
        text1 = "Please Enter a valid Input";
    
    document.getElementById("test1").innerHTML = text1;
}

    if (isNaN(price) || price < 0 ) {
        text2 = "Please Enter a valid Input";
    
    document.getElementById("test2").innerHTML = text2;
}
}
