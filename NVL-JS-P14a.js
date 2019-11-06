var listaPelis = [
	{Nombre: "El señor de los Anillos (La comunidad del anillo)",
	 Genero: "Ficción"},
	{Nombre: "El señor de los Anillos (Las dos torres)",
	 Genero: "Ficción"},
	{Nombre: "El señor de los Anillos (El retorno del rey)",
	 Genero: "Ficción"},
	{Nombre: "Transformes",
	 Genero: "Ficción"},
	{Nombre: "Transformes (El lado oculto de la luna)",
	 Genero: "Ficción"},
	{Nombre: "Transformers (La era de la extincion)",
	 Genero: "Ficción"},
	{Nombre: "Transformers (El último caballero)",
	 Genero: "Ficción"},
	{Nombre: "Transformers (La venganza de los caidos)",
	 Genero: "Ficción"},
	{Nombre: "Bumblebee",
	 Genero: "Ficción"},
	{Nombre: "Los vengadores",
	 Genero: "Ficción"},
	{Nombre: "Vengadores, la era de ultron",
	 Genero: "Ficción"},
	{Nombre: "Vengadores: Infinity War",
	 Genero: "Ficción"},
	{Nombre: "Venom",
	 Genero: "Ficción"},
	{Nombre: "El francotirador",
	 Genero: "Accion"},
	{Nombre: "13Horas, Los soldados secretos de Bengasi ",
	 Genero: "Accion"},
	{Nombre: "Joker",
	 Genero: "Accion"},
	{Nombre: "Terminator: Destino Oscuro",
	 Genero: "Accion"},
	{Nombre: "Zombieland: Mata y remata",
	 Genero: "Comedia"},
	{Nombre: "Rescaon en las vegas",
	 Genero: "Comedia"},
	{Nombre: "SuperLópez",
	 Genero: "Comedia"}
];
function crearList(){
	for(var i=0; i<listaPelis.length; i++){		
	var contenido;
	var li = document.createElement("li");
    var p = document.createElement("p");
	contenido = "Nombre: " + listaPelis[i].Nombre + "  ||   Genero: " + listaPelis[i].Genero;
	p.appendChild(document.createTextNode(contenido));
	document.querySelector("#insertar").appendChild(li).appendChild(p);
   }
}
crearList();
