document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map with specified options
    var mapOptions = {
        center: [18.9902, 73.1277], // Coordinates for the center of the map
        zoom: 10 // Zoom level
    };
    var map = L.map('map', mapOptions); // Create a new Leaflet map with the specified options

    // Add a tile layer to the map (OpenStreetMap)
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    // Add a marker to the map at the specified coordinates
    var marker = L.marker([18.9902, 73.1277]); // Headquarters location coordinates
    marker.addTo(map); // Add the marker to the map

    // Bind a popup to the marker with some content
    marker.bindPopup("<b>Hello</b><br>Our headquarters is located here.").openPopup();
});