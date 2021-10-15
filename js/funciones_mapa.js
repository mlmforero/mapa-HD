
// Función para cargar el mapa al inicio
function cargar_map() {

	var map = L.map('map', 	{center: [40, -0.1],zoom: 6, minZoom: 6, maxZoom:18});
	
    const gl =  L.mapboxGL({
    accessToken: 'no-token',
    style: 'http://usig-teselas.cchs.csic.es/styles/light/style.json',
    attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap </a> contributors ' +  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        '<a href="http://unidadsig.cchs.csic.es/sig/index.html"> USIGyHD</a>' 
    // id: 'estilo_claro'
    }).addTo(map);

		  
	var escala = L.control.scale({position: 'bottomleft', imperial: false});
	map.addControl(escala);

    //CAMBIO EL ICONO DE MARKER
	var myIcon = L.icon({
		  iconUrl:"img/iconomapa.png",
		  iconSize: [24, 34],
  		  iconAnchor: [9, 34],
  		  popupAnchor: [0, -34]
		});

	
		L.Marker.mergeOptions({
			icon: myIcon
			});

/*para centrar*/
            



		var markers = L.markerClusterGroup({
         showCoverageOnHover: false,    //Muestra los límites del polígono que abarca los puntos
         zoomToBoundsOnClick:true,
         spiderfyDistanceMultiplier: 3,  
         spiderfyOnMaxZoom: true, 
         spiderLegPolylineOptions:{
			weight:0.0,
			color:'transparent',
			opacity:.0},
         });

		   


		function popup(feature, layer) { 
		 layer.bindPopup(
		   `<div class='ventana'>
				<a href='${feature.properties.centro_en}' target='_blank' >
				<h1><strong>${feature.properties.nombre_cen}</strong></h1></a>
				<h4 class='tit_4'>Ciencias Sociales y Humanidades Digitales</h4>
			
				<div id='botonProyAll' class='proyectos'>
				
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro0}' target='_blank'>${feature.properties.pro0}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro1}' target='_blank'>${feature.properties.pro1}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro2}' target='_blank'>${feature.properties.pro2}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro3}' target='_blank'>${feature.properties.pro3}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro4}' target='_blank'>${feature.properties.pro4}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro5}' target='_blank'>${feature.properties.pro5}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro6}' target='_blank'>${feature.properties.pro6}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro7}' target='_blank'>${feature.properties.pro7}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro8}' target='_blank'>${feature.properties.pro8}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro9}' target='_blank'>${feature.properties.pro9}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro10}' target='_blank'>${feature.properties.pro10}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro11}' target='_blank'>${feature.properties.pro11}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro12}' target='_blank'>${feature.properties.pro12}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro13}' target='_blank'>${feature.properties.pro13}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro14}' target='_blank'>${feature.properties.pro14}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro15}' target='_blank'>${feature.properties.pro15}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro16}' target='_blank'>${feature.properties.pro16}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro17}' target='_blank'>${feature.properties.pro17}</a></p>
  				<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro18}' target='_blank'>${feature.properties.pro18}</a></p>
  			  	<p class='proyect' id='botonProy' onclick="abrirProyecto()"><a class="pro_en" href='${feature.properties.en_pro19}' target='_blank'>${feature.properties.pro19}</a></p>		  				
				</div>
			 </div>`); 
     	 
     	 
     	 layer.addEventListener('mouseover', (even) =>{
					var popup = L.popup ({
						closeButton: false,
						className: 'popup_proyectos',
						offset: (0, 0),
						keepInView: true
					})
					.setLatLng(even.latlng) 
					.setContent(`<div class="popmin"><i> ${feature.properties.nombrecen}-CSIC</i></div>`)
					.openOn(map);	

				})
        }

       

        var centros_proyectos = L.geoJson(centros, {
        	   	 onEachFeature: popup
			});	
		


		markers.addLayer(centros_proyectos);

		// markers.on('clusterclick', function (a) {
		// 	 a.layer.zoomToBounds();
		//      });

		map.addLayer(markers);

		// map.on('click', function(e) {
		// 	alert(e.latlng);
		// 	});

	}
	
      


    function mostrar_atrib() {
		if (document.getElementById("check_atribucion").style.display == 'none') {
			document.getElementById("check_atribucion").style.display = 'flex';
		}
		else {
			document.getElementById("check_atribucion").style.display = 'none';
		}
	}
		

     function mostrar_proy() {

        if (document.getElementById("proyecto").style.display == 'none') {
			document.getElementById("proyecto").style.display = 'flex';
        }
		else {
			document.getElementById("proyecto").style.display = 'none';
		}
	}