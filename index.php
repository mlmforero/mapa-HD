<?php
$param_idiom = $_GET['ln'];
$idiom = strip_tags($param_idiom);
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">

	<title>Mapa de las Humanidades Digitales en el CSIC</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- ESTILO BOOTSTRAP -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

	
	<!-- ESTILO GENERAL -->
	<link rel="stylesheet" href="css/comun.css"/> 

	<!-- JS PARA CARGAR LOS TEXTOS -->
	<script type="text/javascript" src="js/textos_comunes.js"></script>

	<!-- FUENTES -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,300,700,subset=latin,latin-ext"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,300,700,subset=latin,latin-ext" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" 
    rel="stylesheet">

	 <!-- LEAFLET -->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
	  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
	  crossorigin=""/>
	<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
	  integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
	  crossorigin=""></script>
	  
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"></script>
	 
	<!-- Mapbox GL  para añadir las teselas vectoriales -->
    <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.css" rel='stylesheet' />
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.js"></script>
  	<script src="leaflet/leaflet-mapbox-gl.js"></script>
  
	<!--Cargamos plugin MarkerCluster -->
	<link rel="stylesheet" href="leaflet/MarkerCluster.css" />
	<link rel="stylesheet" href="leaflet/MarkerCluster.Default.css" />
	<script src="leaflet/leaflet.markercluster.js"></script>
	<script src="leaflet/leaflet.markercluster-src.js"></script>
	
	<!-- JQUERY y BOOSTRAP -->
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>

	
	<!--JS DE FUNCIONAMIENTO-->
	<script type="text/javascript" src="js/leaflet-mapbox-gl.js"></script>
	<script type="text/javascript" src="js/funcion_cargar_mhd.js"></script>
	<script type="text/javascript" src="js/textos_mhd.js"></script>
	<script type="text/javascript" src="js/funciones_mapa.js"></script>

	<!--DATOS DEL PROYECTO-->
	<script src="datos/proyectos.js"></script> 

	<!-- ESTILO PROPIO DEL PROYECTO -->
	<link rel="stylesheet" href="css/style.css"/>
	
</head>

<body <?php echo "onload=funcion_cargar_mhd('$idiom');cargar_map();"; ?> >
    <div class="container-fluid contenedor_todo">
		<nav class="navbar align-items-end" id="barra_titulo">
				<a class="#" href="http://exea.csic.es/" target="_blank">
				 <img src="img/boton_exea.png"  class="img-responsive logo_exea" alt="Exea" title="Exea"/>
				</a>
				<img src="img/visu.png"  class="img-responsive logo_visu"  />
				<span class="navbar-text mr-auto pro_mhd" id="texto_subtitulo" ></span>
				<form class="form-inline">
					<div class="btn-group mr-2 grupo_btn_idioma_cerrar">
						<button id="boton_es" type="button" class="btn btn_idioma" onclick="location.replace('?ln=es')"><p class="texto_btn_general">ES</p></button>
						<button id="boton_en" type="button" class="btn btn_idioma" onclick="location.replace('?ln=en')"><p class="texto_btn_general">EN</p></button>
					</div>
				</form>
		</nav>

		<!--Ahora la barra propia del proyecto con su título-->
		<nav class="navbar navbar-expand-lg navbar-light bg-lightnavbar titulo_proyecto titulo_mhd">
					            
				<div class="col-md-auto ml-auto">
					<button type="button" class="btn btn_general btn_mhd" data-toggle="modal" data-target="#popup_acercade_proyecto"><p class="texto_btn_general" id="texto_btn_general_acercade"></p>
					</button>
				</div>
		</nav>
	
		<div class="row justify-content-center visor">
		    <div class="col-12"> 
		    
			    <div id="map" class="col-12"></div>

			   <!--Popup que aparece al hacer click en "Acerca de"-->
				<div class="modal fade" id="popup_acercade_proyecto" tabindex="-1" role="dialog" aria-hidden="true">
			  		<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header acercade_titulo">
								<h3 id="texto_tit_acercade_mhd"></h3>
									<button type="button" class="close boton_cerrar" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
							</div>

							<div class="modal-body acercade_body">
								<p class="texto_acercade" id="texto_con_acercade_mhd"></p>
							</div>

							<div class="modal-footer acercade_footer">
								<button type="button" class="btn acercade_btn_cerrar btn_mhd" data-dismiss="modal" id="texto_cerrar">
									
								</button>
							</div>
						</div>
			  		</div>
				</div>
				
	    	</div> 
	 	</div>

    </div>

<footer>
	    <?php include 'includes/pie.php'; ?>
</footer>

</body>

</html>
