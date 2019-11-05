var n;
var ini = 2;
var numerosPrimos = [];
n = parseInt(prompt("Ingresar un numero de 0 a 100 para calcular sus numeros primos"));
function primo (n){
	for (var i= 2; i<n; i++){
		if(n %i ===0){
			return false;
		}
		if (n>100){
		return;
		}
	}
	return n !==1;
}
for (; ini<n; ini++){
	if (primo(ini)){
		numerosPrimos.push(ini);
	}
}
document.write("Los numero primos hasta " + n + " son: " + "<br> " + numerosPrimos);
