
// Creating map object
var myMap = L.map("mapid", {
  center: [39.8283, -98.5795],
  zoom: 11
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

  //console.log();)
  // Use this link to get the geojson data.
  var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
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
};