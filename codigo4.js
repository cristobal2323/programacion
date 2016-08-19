var dibujo, lienzo, t, b;

function inicio(){
	dibujo = document.getElementById("dibujo");
	lienzo = dibujo.getContext("2d");
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
	lienzo.arc(150,150,100, (Math.PI * 2), false);
	lienzo.closePath();
	lienzo.stroke();

	b.addEventListener("click",dibujarGrilla);

}
function dibujarGrilla(pony){
	var pony = lienzo;
	var rayas = Number(t.value);
	var ancho = 300 , alto = 300;
	var lineas = 10;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho / lineas;
	var limiteY = ancho / lineas;
	for(linea= 0; linea <= limiteX; linea++){
		pony.beginPath();
		pony.strokeStyle = "#AAA";
		pony.moveTo(linea * anchoLinea, 0);
		pony.lineTo(linea * anchoLinea, 300);
		pony.closePath();
		pony.stroke();
	}
	for(linea= 0; linea <= limiteY; linea++){
		pony.beginPath();
		pony.strokeStyle = "#AAA";
		pony.moveTo(0, linea * anchoLinea);
		pony.lineTo(300, linea * anchoLinea);
		pony.closePath();
		pony.stroke();
	}
}