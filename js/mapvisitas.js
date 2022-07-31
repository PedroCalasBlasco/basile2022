var map2 = L.map('mapvisitas');
map2.setView([-31.62433294, -60.6920008], 10);

var openstreet = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution:'©<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  updateWhenIdle: true,
  reuseTiles: true
}).addTo(map2);


var iconosVecinos = [
      L.AwesomeMarkers.icon({
        icon: 'volleyball-ball',
        prefix:'fa',
        markerColor: 'blue'
      }),
      L.AwesomeMarkers.icon({
        icon: 'book-medical',
        prefix:'fa',
        markerColor: 'darkgreen'
      }),
      L.AwesomeMarkers.icon({
        icon: 'users',
        prefix:'fa',
        markerColor: 'purple'
      }),
      L.AwesomeMarkers.icon({
        icon: 'book',
        prefix:'fa',
        markerColor: 'darkred'
      }),
      L.AwesomeMarkers.icon({
        icon: 'hands-helping',
        prefix:'fa',
        markerColor: 'darkpurple'
      }),
      L.AwesomeMarkers.icon({
        icon: 'landmark',
        prefix:'fa',
        markerColor: 'darkgreen'
      }),
      L.AwesomeMarkers.icon({
        icon: 'people-carry',
        prefix:'fa',
        markerColor: 'blue'
      }),
      L.AwesomeMarkers.icon({
        icon: 'church',
        prefix:'fa',
        markerColor: 'red'
      }),
      L.AwesomeMarkers.icon({
        icon: 'school',
        prefix:'fa',
        markerColor: 'orange'
      }),
      L.AwesomeMarkers.icon({
        icon: 'apple-alt',
        prefix:'fa',
        markerColor: 'green'
      })
    ];

  // var group = L.layerGroup().addTo(map);
  var markerCluster = L.markerClusterGroup();
  var visitas2 = L.geoJson(visitas,{

  onEachFeature: function(feature, layer){
    layer.bindPopup("<h5 class='infoHeader'><strong>"+ feature.properties.Nombre +"</strong></h5><p class='text-center'>"+ feature.properties.Direccion +"</p>"+"</strong></h5><p class='text-center'>"+ feature.properties.Localidad +"</p>"+"</strong></h5><p class='text-center'>"+ feature.properties.Rubro +"</p>") ;

    markerCluster.addLayer(layer);

    if (feature.properties.Rubro == 'Deportiva'){
      layer.setIcon(iconosVecinos[0]);
    }
    else if (feature.properties.Rubro == 'Salud'){
      layer.setIcon(iconosVecinos[1]);
    }
    else if (feature.properties.Rubro == 'Otros'){
      layer.setIcon(iconosVecinos[2]);
    }
    else if (feature.properties.Rubro == 'Cultural'){
      layer.setIcon(iconosVecinos[3]);
    }
    else if (feature.properties.Rubro == 'Solidaria'){
      layer.setIcon(iconosVecinos[4]);
    }
    else if (feature.properties.Rubro == 'Municipal'){
      layer.setIcon(iconosVecinos[5]);
    }
    else if (feature.properties.Rubro == 'Barrial'){
      layer.setIcon(iconosVecinos[6]);
    }
    else if (feature.properties.Rubro == 'Religiosa'){
      layer.setIcon(iconosVecinos[7]);
    }
    else if (feature.properties.Rubro == 'Educacion'){
      layer.setIcon(iconosVecinos[8]);
    }
    else if (feature.properties.Rubro == 'Feria'){
      layer.setIcon(iconosVecinos[9]);
    }
    else if (feature.properties.Rubro == 'Vecinal'){
      layer.setIcon(iconosVecinos[6]);
    }
  }
});

markerCluster.addLayer(visitas2);
map2.addLayer(markerCluster);

// map2.addLayer(visitas2);
console.log(visitas2);


var markerCluster2021 = L.markerClusterGroup();
var visitas2021 = L.geoJson(visitas2021,{

  onEachFeature: function(feature, layer){
    layer.bindPopup("<h5 class='infoHeader'><strong>"+ feature.properties.Nombre +"</strong></h5><p class='text-center'>"+ feature.properties.Direccion +"</p>"+"</strong></h5><p class='text-center'>"+ feature.properties.Localidad +"</p>"+"</strong></h5><p class='text-center'>"+ feature.properties.Rubro +"</p>") ;

    markerCluster2021.addLayer(layer);

    if (feature.properties.Rubro == 'Deportiva'){
      layer.setIcon(iconosVecinos[0]);
    }
    else if (feature.properties.Rubro == 'Salud'){
      layer.setIcon(iconosVecinos[1]);
    }
    else if (feature.properties.Rubro == 'Otros'){
      layer.setIcon(iconosVecinos[2]);
    }
    else if (feature.properties.Rubro == 'Cultural'){
      layer.setIcon(iconosVecinos[3]);
    }
    else if (feature.properties.Rubro == 'Solidaria'){
      layer.setIcon(iconosVecinos[4]);
    }
    else if (feature.properties.Rubro == 'Municipal'){
      layer.setIcon(iconosVecinos[5]);
    }
    else if (feature.properties.Rubro == 'Barrial'){
      layer.setIcon(iconosVecinos[6]);
    }
    else if (feature.properties.Rubro == 'Religiosa'){
      layer.setIcon(iconosVecinos[7]);
    }
    else if (feature.properties.Rubro == 'Educacion'){
      layer.setIcon(iconosVecinos[8]);
    }
    else if (feature.properties.Rubro == 'Feria'){
      layer.setIcon(iconosVecinos[9]);
    }
    else if (feature.properties.Rubro == 'Vecinal'){
      layer.setIcon(iconosVecinos[6]);
    }
  }
});

markerCluster2021.addLayer(visitas2021);
map2.addLayer(markerCluster2021);

var baseMaps = {
    "Streets": openstreet
};

var overlayMaps = {
  "Visitas 2020": markerCluster,
  "Visitas 2021": markerCluster2021
};


L.control.layers(baseMaps, overlayMaps).addTo(map2);
