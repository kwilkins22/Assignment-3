//mapbox loading of map
mapboxgl.accessToken = 'pk.eyJ1IjoiaXRhdHRlcnNmaWVsZCIsImEiOiJXN2NCV1FFIn0.OPefDbwwI_rtOjwrY3V7jw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //stylesheet location
    center: [-73.576543,45.504520], // starting position
    zoom: 16 // starting zoom
});


//this is how we talk to the div called "button1" - we add a listener for an onclick event with the user's mouse
document.getElementById("button1").onclick = function(){
	loadLayer1();
};


//loading a polygon, setting a viewport
function loadLayer1(){
//load a geoJson Polygon
 map.addLayer({
        'id': 'Maldives',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [[
                    	[73.08759901402038,-0.8454420913014519],
											[73.13105720885756,-0.7097722572476488],
											[73.16896496053153,-0.7178916690125019],
											[73.17091861000094,-0.7170956348187216],
											[73.20751291509956,-0.6909871314957787],
											[73.22509004275226,-0.6785073495775587],
											[73.22642674619912,-0.6779630936428241],
											[73.23714736184571,-0.6119951385078888],
											[73.25047449352572,-0.5969718803729472],
											[73.24822722810218,-0.567297904140876],
											[73.20229921210955,-0.563388580135135],
											[73.19993457399941,-0.5636493818167839],
											[73.13340853773273,-0.5984699690025401],
											[73.13049998950234,-0.5991876816400386],
											[73.12951609872796,-0.5992956920575322],
											[73.09152340866599,-0.561629663717127],
											[73.05718395207529,-0.578946023661115],
											[73.08759901402038,-0.6454420913014519]
                    ]]
                }
            }
        },
        'layout': {},
        'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.2
        }
    });
  //reset viewpoint  
	map.flyTo({
  	center: [73.155543,-0.641864],
    zoom: 10  
  });
}
