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
  d3.json(url, 
   
    
    // call function to create map
      createMap
    
    )
    function addPopup(feature,layer)
    {
      var pop = (
        "<div> location " + feature.properties.place + "</div>" +
        "<div> mag " + feature.properties.mag + "</div>" +
        "<div> height " + feature.geometry.coordinates[2] + "</div>"
      );
      layer.bindPopup(pop);
      console.log(feature);}
    
    
    ;
    function addCircle(feature,latlng){
      console.log(+feature.properties.mag)
      console.log(+feature.geometry.coordinates[2])
      return L.circleMarker(
        latlng, {
          radius: (+feature.properties.mag*3), //to do calulate
          fillColor: Color(+feature.geometry.coordinates[2]), // to calulate
          color: "#000",
          weight: 1,
          opacity: .2,
          fillOpacity: 0.8,
        }
      );

    };
    
    function createMap(data){ 
      //[lat,lng,height]
      console.log(data.features[0].geometry.coordinates[0]);
      console.log(data.features[0].geometry.coordinates[1]);
      console.log(data.features[0].geometry.coordinates[2]);
      console.log(data.features[0].properties.mag);

      L.geoJson(data,{
        onEachFeature : addPopup,
        pointToLayer: addCircle
        
      }
        
        
        
    ).addTo(myMap);}
    
  
    
    

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