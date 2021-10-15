// CONTROL DE LOS TEXTOS MOSTRADOS SÓLO EN LA PÁGINA DEL PROYECTO EN FUNCIÓN DEL IDIOMA

//Variables para cambiar los textos del proyecto:
//Título del proyecto:
//var titulo_proy = '';
var subtitulo = '';


//Botones:
var btn_general_acercade = '';
var btn_general_iraproyecto = '';

//Botón "Acerca de":
var tit_acercade_mhd = '';
var con_acercade_mhd = '';

// Pop up (botones)
var pop_mapa = '';

//Variables para cambiar los textos de los gráficos y el texto de referencias:
var referencias = '';
var nombre_proyecto = '';


//Función para cambiar los textos
function ponerIdioma_mhd(lang){
	idioma = lang;
	if (idioma == 'en'){
		
		subtitulo = 'CSIC Digital Humanities Map';

				
		btn_general_acercade = 'About';
		
		
		tit_acercade_mhd = 'About the displayed data';
		con_acercade_mhd = "Web map to give visibility to the community of CSIC scientists working on digital humanities projects. Researchers, projects, institutes and resources in this field are geolocated through an interactive map.";	
		referencias =  "Lourdes Martín-Forero¹, Isabel del Bosque¹. ¹<a href='http://unidadsig.cchs.csic.es/sig/ingles/' target='_blank' class='link_ref'>SIGyHG Laboratory (CCHS - CSIC)</a>";
		nombre_proyecto = "PROJECT EXEA, ¹<a href='http://unidadsig.cchs.csic.es/sig/ingles/' target='_blank' class='link_ref'>SIGyHD Laboratory (CCHS - CSIC)</a>";
		
		
	}
	
	else {
		
		subtitulo = 'Mapa de las Humanidades Digitales del CSIC';
		
			
		btn_general_acercade = 'Acerca de';
		
		
		tit_acercade_mhd = 'Acerca de la visualización';
	    con_acercade_mhd = 'Mapa web para dar visibilidad a la comunidad de científicos del CSIC que trabajan en proyectos de humanidades digitales. A través de un mapa interactivo se geolocaliza a los investigadores, proyectos, institutos y recursos en dicho ámbito.';

		pop_mapa = 'Cambiar mapa base';
		
	    referencias =  "Lourdes Martín-Forero¹, Isabel del Bosque¹. ¹<a href='http://unidadsig.cchs.csic.es/sig/' target='_blank' class='link_ref'>SIGyHD (CCHS - CSIC)</a>";
		nombre_proyecto = "PROYECTO EXEA, ¹<a href='http://unidadsig.cchs.csic.es/sig/' target='_blank' class='link_ref'>Unidad SIGyHD (CCHS - CSIC)</a>";
		
		

	}
	
	
//Aquí se cambia el contenido de los diferentes textos:

$('#texto_subtitulo').html(subtitulo);

	
$('#texto_btn_general_acercade').html(btn_general_acercade);


$('#texto_tit_acercade_mhd').html(tit_acercade_mhd);
$('#texto_con_acercade_mhd').html(con_acercade_mhd);


$('#texto_ref_autores').html(referencias);
$('#texto_ref_proyecto').html(nombre_proyecto);


}




