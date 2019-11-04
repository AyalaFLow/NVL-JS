var par = [];
var impar = [];	
var alea;
function azar(){
	for (var i=0; i<50;i++){
    alea = Math.floor((Math.random()*100)+1);	
	
		if (alea %2===0){
			par.push(alea);
		}
		else{
			impar.push(alea);		
		}
	}
}
azar();
document.write("Valores aleatorios: <br><br>");
	document.write(alea +"<br>");
document.write("Valores pares: <br><br>");
	document.write(par + "<br>");	
document.write("Valores impares: <br><br>");
	document.write(impar + "<br>");	


	
		
	