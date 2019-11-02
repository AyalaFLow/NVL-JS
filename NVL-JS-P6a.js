var nombre;
var apellidos;
var edad;
nombre = prompt('Introduce tu nombre');
apellidos = prompt('Introduce tus apellidos');
edad = prompt('Introduce tu edad');
document.write(nombre + " " +apellidos  + " " + edad + "años" + "<br><br><br>");
alert(nombre + " " + apellidos  + " " + edad + " años");

//primera parte del ejercicio
var diasSemana = ["Lunes","Martes","Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
document.write("Los dias de la semana son: <br><br>");
for (var i=0;i< diasSemana.length;i++){
 document.write(diasSemana[i] + "<br><br><br>");
}
//segunda parte del ejercicio
var g, m1, d, m2, F;
m1 = 75;
m2 = 90;
d = 100;
g = 0.00000006673;
F=g*m1*m2/(d*d);
document.write("Este es el valor de la gravedad." + "  " + F + "<br><br>")
//tercera parte del ejercicio
var i = 1;
document.write("Los tres primeros numeros impares son: <br>");
while (i < 7){
document.write(i);
	i=i+2;
}
