var fraseUser;
var vueltaFrase;
var resultado;
fraseUser = prompt("Ingresa la frase y te diremos si es Palindroma o no.");

function comparacion(fraseUser){
	fraseUser=fraseUser.toLowerCase().replace(/\s/g, "");
	vueltaFrase= fraseUser.split("").reverse().toString();
	for (var i = 0;i<vueltaFrase.length; i++){
		vueltaFrase = vueltaFrase.replace(",","");
	}
	if(fraseUser == vueltaFrase){
		resultado = "es un Palindromo";
	}else{
		resultado = "no es un Palindromo";
	}
	alert("Tu frase " + resultado);
} 
comparacion(fraseUser);
alert(fraseUser.length);