// Creating map object
var myMap = L.map("map", {
  center: [36.7783, -119.4179],
  zoom: 5
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);
   
  
// Creating map object

  // Use this link to get the geojson data.
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  d3.json(url, function(data) {
    console.log(data);
    var earthquakes = L.geoJSON(data.features, {
        onEachFeature : addPopup,
        pointToLayer: addMarker
      });
    
    // call function to create map
      createMap(earthquakes);
    
    });
    
    function mapStyle(feature) {
      return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: mapColor(feature.properties.mag),
        color: "#000000",
        radius: mapRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
      };
    }

  function Color(magnitude){
    // console.log(magnitude)
    if (magnitude > 5){
        return 'red'
    } else if (magnitude > 4){
        return 'darkorange'
    } else if (magnitude > 3){
        return 'orange'
    } else if (magnitude > 2){
        return 'yellow'
    } else if (magnitude > 1){
        return 'darkgreen'
    } else {
        return 'lightgreen'
    }
  }