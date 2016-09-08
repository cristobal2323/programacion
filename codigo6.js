// Uno

var Mascota = function(n,v){
	this.nombre = n;
	this.voz = v;
}

Mascota.prototype.hablar = function(){
	alert(this.voz);
}

var perro = new Mascota("Rocco","guau");
var gato = new Mascota("Misifu", "Miau");

perro.hablar();


// dos

var Persona = function(){
	this.nombre;
	this.voz;
}

Persona.prototype = {
	hablar: function(){
        alert("hola");
    }
}

var jefe = new Persona();
var obrero = new Persona();

obrero.nombre =  "Cristóbal Maturana";
obrero.hablar();
