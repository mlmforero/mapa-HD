// CONTROL DE LOS TEXTOS MOSTRADOS EN TODA LA PÁGINA EN FUNCIÓN DEL IDIOMA
//COMÚN A LA PÁGINA PRINCIPAL Y A LOS PROYECTOS

//Se crean las variables que guardan los textos:
// var titulo = '';
// var subtitulo = '';
var casa = '';
var creditos = '';
var avisos = '';
var pie = '';
var cerrar = '';

//Links:
var cchs = '';
var usig = '';
var exea = '';
var contacto = '';
var avisolegal = '';
var cookies = '';

//Función que carga el contenido a esas variables en función del idioma seleccionado:
function ponerIdioma_comun(lang){
	var esp = document.getElementById("boton_es");
	var ing = document.getElementById("boton_en");

	idioma = lang;
	if(idioma == 'en'){
		ing.setAttribute("class","btn btn_idioma_sel");
		esp.setAttribute("class","btn btn_idioma");
		
		
		creditos = "Credits";
		avisos = "Notices";
		pie = "2018 © Spanish National Research Council";
		cerrar = "Close";
		contacto = 'Contact';
		avisolegal = 'Legal Advice';
		cookies = 'Cookies Policy';
		
		cchs = "http://cchs.csic.es/en";
		usig = "http://unidadsig.cchs.csic.es/sig/ingles/";
		exea = "../../index.php?ln=en";
	}
	else {
		esp.setAttribute("class","btn btn_idioma_sel");
		ing.setAttribute("class","btn btn_idioma");

		
		creditos = "Créditos";
		avisos = "Avisos";
		pie = "2018 © Consejo Superior de Investigaciones Científicas";
		cerrar = "Cerrar";
		contacto = 'Contacto';
		avisolegal = 'Aviso Legal';
		cookies = 'Política de Cookies';
		
		cchs = "http://cchs.csic.es/";
		usig = "http://unidadsig.cchs.csic.es/sig/";
		exea = "../../index.php?ln=es";
	}
	
$('#texto_pie').html(pie);

$('#texto_creditos').html(creditos);
$('#texto_avisos').html(avisos);
$('#texto_cerrar').html(cerrar);
$('#texto_contacto').html(contacto);
$('#texto_avisolegal').html(avisolegal);
$('#texto_cookies').html(cookies);

$('#link_cchs').attr("href",cchs);
$('#link_usig').attr("href",usig);
$('#link_exea').attr("href",exea);
}