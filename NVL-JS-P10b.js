var pares = [];
var impares = [];
	document.write("50 primeros valores al azar entre 1-100: <br><br>");
for (var i=0; i<50; i++){
	var azar = Math.floor((Math.random()*100)+1);
	document.write(azar + "<br>");
	
	if (azar %2 == 0){
		pares.push(azar);
	}
	else{
		impares.push(azar);
		
	}
	
}
document.write("Valores pares: <br><br>");
	document.write(pares + "<br>");	
document.write("Valores impares: <br><br>");
	document.write(impares + "<br>");	


	
		
	
