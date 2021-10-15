//Variable en js que va a guardar el idioma seleccionado, a partir de la variable en php:
var idioma_sel = '';
//Función que se debe ejecutar al cargar el body en el html:
function funcion_cargar_mhd(idiom){
	idioma_sel = idiom; //Asigna a la variable creada arriba el idioma que proviene de la variable php.
	ponerIdioma_comun(idiom); //Ejecuta la función para cargar los textos comunes, en función del idioma.
	ponerIdioma_mhd(idiom); //Ejecuta la función para cargar los textos correspondientes al proyecto Empresas y empleo, en función del idioma.
	
	}