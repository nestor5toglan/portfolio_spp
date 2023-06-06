/*function showDialog() {
  let donnee_duchamp_recuperer = fields_Js.donnee_duchamp_recuperer;
  let x;
  x = donnee_duchamp_recuperer;
  alert(x);

}*/



function showDialog() {
  let geolocationData = fields_Js.geolocations;

  // Récupérer les données passées depuis PHP

  let markers = '';
  let dialogHTML = '';

  for (let i = 0; i < geolocationData.length; i++) {
    let placeName = geolocationData[i].place; // Extraction du nom de lieu
    let coordinates = geolocationData[i].coordinates.join(',').replace(/"/g, ''); // Extraction des coordonnées et suppression des guillemets

    if (i == 0) {
      dialogHTML += '<img class="dialog-image" src="https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques-novo/societe/et-voici-le-waze-togolais/2223181-1-fre-FR/et-voici-le-waze-togolais_i1200.jpg"><br>';
    }

    dialogHTML += "Localisation à :"+'<a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(coordinates) + '" target="_blank">' + placeName + '</a><br>';
  }

  alertify.alert(dialogHTML);
}















































/*function showDialog() {
  let donnee_duchamp_recuperer = fields_Js.donnee_duchamp_recuperer;
  let x;
  x = donnee_duchamp_recuperer;
  let coordinates_array = x.split(';');
  let markers = '';
  let dialogHTML = '';

  for (let i = 0; i < coordinates_array.length; i++) {
    let placeName = coordinates_array[i].split('|')[1].trim(); // Extraction du nom de lieu
    let coordinates = coordinates_array[i].split('|')[0].trim().replace(/"/g, ''); // Extraction des coordonnées et suppression des guillemets
    var place;
    var coord;
    place = placeName;
    coord = coordinates;

    if (i == 0) {
      dialogHTML += '<img class="dialog-image" src="https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques-novo/societe/et-voici-le-waze-togolais/2223181-1-fre-FR/et-voici-le-waze-togolais_i1200.jpg"><br>';
    }

    dialogHTML += "Localisation à :"+'<a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(coordinates) + '" target="_blank">' + place + '</a><br>';
  }

  alertify.alert(dialogHTML);
}
*/



/*function showDialog0() {
  let donnee_duchamp_recuperer = fields_Js.donnee_duchamp_recuperer;
  let x;
  x = donnee_duchamp_recuperer;
  let coordinates_array = x.split(';');
  let markers = '';
  let dialogHTML = '';

  for (let i = 0; i < coordinates_array.length; i++) {
    let placeName = coordinates_array[i].split('|')[1].trim(); // Extraction du nom de lieu
    let coordinates = coordinates_array[i].split('|')[0].trim(); // Extraction des coordonnées
    let place = placeName + ' (' + coordinates + ')';

    if (i == 0) {
      dialogHTML += '<img class="dialog-image" src="https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques-novo/societe/et-voici-le-waze-togolais/2223181-1-fre-FR/et-voici-le-waze-togolais_i1200.jpg"><br>';
    }

    //dialogHTML += '<a href="https://www.google.com/maps/search/?api=1&query=' + coordinates + '" target="_blank">' + place + '</a><br>';
    dialogHTML += '<a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(coordinates) + '" target="_blank">' + place + '</a><br>';
    //dialogHTML += '<a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(coordinates) + '" target="_blank">' + placeName + '</a><br>';


  }

  alertify.alert(dialogHTML);
}
*/






















/*function showDialog() {
  let donnee_duchamp_recuperer = fields_Js.donnee_duchamp_recuperer;
  let coordinates_array = donnee_duchamp_recuperer.split(';');
  let markers = '';
  let dialogHTML = '';
  for (let i = 0; i < coordinates_array.length; i++) {
    let placeName = coordinates_array[i].split('|')[1].trim(); // Extraction du nom de lieu
    let coordinates = coordinates_array[i].split('|')[0].trim(); // Extraction des coordonnées
    if (i == 0) {
      dialogHTML += '<img class="dialog-image" src="https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques-novo/societe/et-voici-le-waze-togolais/2223181-1-fre-FR/et-voici-le-waze-togolais_i1200.jpg"><br>';
    }
    dialogHTML += '<a href="#" onclick="showMap(' + coordinates + ');return false;">' + placeName + '</a><br>';
  }
  let url = 'https://www.google.com/maps/embed/v1/view?zoom=12&center=' + coordinates_array[0].split('|')[0].trim() + markers;
  dialogHTML += '<div id="map"></div>';
  alertify.alert(dialogHTML);
}

function showMap(latitude, longitude) {
  let mapElement = document.getElementById('map');
  let map = new google.maps.Map(mapElement, {
    zoom: 14,
    center: new google.maps.LatLng(latitude, longitude),
  });
  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map: map,
  });
}
*/
















/*function showDialog() {
  let donnee_duchamp_recuperer = fields_Js.donnee_duchamp_recuperer;
  let coordinates_array = donnee_duchamp_recuperer.split(';');
  let markers = '';
  let dialogHTML = '';
  for (let i = 0; i < coordinates_array.length; i++) {
    let placeName = coordinates_array[i].split('|')[1].trim(); // Extraction du nom de lieu
    let coordinates = coordinates_array[i].split('|')[0].trim(); // Extraction des coordonnées
    markers += '&markers=color:red%7Clabel:' + (i + 1) + '%7C' + coordinates;
    if (i == 0) {
      dialogHTML += '<img class="dialog-image" src="https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques-novo/societe/et-voici-le-waze-togolais/2223181-1-fre-FR/et-voici-le-waze-togolais_i1200.jpg"><br>';
    }
    //dialogHTML += '<a href="https://www.google.com/maps/search/?api=1&query=' + coordinates + '" target="_blank">' + placeName + '</a><br>';
    dialogHTML += '<a href="https://www.google.com/maps/@' + coordinates + ',13z" target="_blank">' + placeName + '</a><br>';

  }
  let url = 'https://www.google.com/maps/embed/v1/view?zoom=12&center=' + coordinates_array[0].split('|')[0].trim() + markers;
  dialogHTML += '<iframe class="dialog-map" src="' + url + '"></iframe>';
  alertify.alert(dialogHTML);
}
*/












/*function showDialog() {
  let donnee_duchamp_recuperer = fields_Js.donnee_duchamp_recuperer;
  let coordinates_array = donnee_duchamp_recuperer.split(';');
  let markers = '';
  let dialogHTML = '';
  for (let i = 0; i < coordinates_array.length; i++) {
    let placeName = coordinates_array[i].split('|')[1].trim(); // Extraction du nom de lieu
    let coordinates = coordinates_array[i].split('|')[0].trim(); // Extraction des coordonnées
    markers += '&markers=color:red%7Clabel:' + (i + 1) + '%7C' + coordinates;
    if (i == 0) {
      dialogHTML += '<img class="dialog-image" src="https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques-novo/societe/et-voici-le-waze-togolais/2223181-1-fre-FR/et-voici-le-waze-togolais_i1200.jpg"><br>';
    }
    dialogHTML += '<a href="https://www.google.com/maps/search/?api=1&query=' + coordinates + '" target="_blank">' + placeName + '</a><br>';
  }
  let url = 'https://www.google.com/maps/embed/v1/view?zoom=12&center=' + coordinates_array[0].split('|')[0].trim() + markers;
  dialogHTML += '<iframe class="dialog-map" src="' + url + '"></iframe>';
  alertify.alert(dialogHTML);
}*/


/*
exellent code


function showDialog() {
  var coordinates = fields_Js.donnee_duchamp_recuperer; // Coordonnées géographiques
  var coordinates_array = coordinates.split('|'); // Séparation des coordonnées en un tableau
  var markers = ''; // Initialisation de la variable markers qui contiendra les marqueurs de carte
  for (var i = 0; i < coordinates_array.length; i++) {
    markers += '&markers=color:red%7Clabel:' + (i + 1) + '%7C' + coordinates_array[i]; // Création des marqueurs de carte
  }
  var url = 'https://www.google.com/maps/embed/v1/view?zoom=12&center=' + coordinates + markers; // URL de la carte Google Maps
  var imgSrc = 'https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques-novo/societe/et-voici-le-waze-togolais/2223181-1-fre-FR/et-voici-le-waze-togolais_i1200.jpg'; // URL de l'image à afficher dans la boîte de dialogue
  var dialogHTML = '<img class="dialog-image" src="' + imgSrc + '">'; // Balise HTML pour l'image
  dialogHTML += '<br>'; // Saut de ligne
  for (var i = 0; i < coordinates_array.length; i++) {
    var linkURL = 'https://www.google.com/maps/search/?api=1&query=' + coordinates_array[i]; // URL du lien vers Google Maps
    var placeName = "Nom du lieu localisé" + (i + 1) + ": Hotel du lieu paris france"; // Nom du lieu géolocalisé
    dialogHTML += '<a href="' + linkURL + '" target="_blank">' + placeName + '</a><br>'; // Balise HTML pour le lien vers Google Maps
  }
  alertify.alert(dialogHTML); // Affichage de la boîte de dialogue
  
  

  
}


*/













/*function showMapDialog() {
  var coordinates = '48.856614,2.3522219'; // Coordonnées géographiques
  var coordinates_array = coordinates.split('|'); // Séparation des coordonnées en un tableau
  var markers = ''; // Initialisation de la variable markers qui contiendra les marqueurs de carte
  for (var i = 0; i < coordinates_array.length; i++) {
    markers += '&markers=color:red%7Clabel:' + (i + 1) + '%7C' + coordinates_array[i]; // Création des marqueurs de carte
  }
  var url = 'https://www.google.com/maps/embed/v1/view?zoom=12&center=' + coordinates + markers; // URL de la carte Google Maps
  var imgSrc = 'https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques-novo/societe/et-voici-le-waze-togolais/2223181-1-fre-FR/et-voici-le-waze-togolais_i1200.jpg'; // URL de l'image à afficher dans la boîte de dialogue
  var dialogHTML = '<img class="dialog-image" src="' + imgSrc + '">'; // Balise HTML pour l'image
  dialogHTML += '<br>'; // Saut de ligne
  for (var i = 0; i < coordinates_array.length; i++) {
    var linkURL = 'https://www.google.com/maps/search/?api=1&query=' + coordinates_array[i]; // URL du lien vers Google Maps
    var placeName = "Nom du lieu localisé" + (i + 1) + ": Hotel du lieu paris france"; // Nom du lieu géolocalisé
    dialogHTML += '<a href="' + linkURL + '" target="_blank">' + placeName + '</a><br>'; // Balise HTML pour le lien vers Google Maps
  }
  alertify.alert(dialogHTML); // Affichage de la boîte de dialogue
}
*/






/*function showMapDialog() {
  var coordinates = '48.856614,2.3522219'; // vos coordonnées géographiques ici
  var coordinates_array = coordinates.split('|');
  var markers = '';
  for (var i = 0; i < coordinates_array.length; i++) {
    markers += '&markers=color:red%7Clabel:' + (i + 1) + '%7C' + coordinates_array[i];
  }
  var url = 'https://www.google.com/maps/embed/v1/view?zoom=12&center=' + coordinates + markers;
  var imgSrc = 'https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques-novo/societe/et-voici-le-waze-togolais/2223181-1-fre-FR/et-voici-le-waze-togolais_i1200.jpg';
  var dialogHTML = '<img class="dialog-image" src="' + imgSrc + '">';
  dialogHTML += '<br>';
  for (var i = 0; i < coordinates_array.length; i++) {
    var linkURL = 'https://www.google.com/maps/search/?api=1&query=' + coordinates_array[i];
    var placeName = "Nom du lieu localisé" + (i + 1) + ": Hotel du lieu paris france"; // Remplacez "Nom du lieu" par le nom du lieu géolocalisé
    dialogHTML += '<a href="' + linkURL + '" target="_blank">' + placeName + '</a><br>';
  }
  alertify.alert(dialogHTML);
}
*/































/*function showMapDialog() {
  var locations = [    {coords: [48.856614, 2.3522219], description: "Paris, France"},
    {coords: [40.712776, -74.005974], description: "New York, USA"},
    {coords: [51.507351, -0.127758], description: "London, UK"}
  ];
  
  var markers = '';
  for (var i = 0; i < locations.length; i++) {
    markers += '&pp=' + locations[i].coords[0] + ',' + locations[i].coords[1] + ';1;' + (i + 1);
  }
  var url = 'https://www.bing.com/maps/embed/viewer.aspx?v=3&cp=' + locations[0].coords.join(',') + '&lvl=16&dir=0' + markers;
  var imgSrc = 'https://www.bing.com/maps/' + locations[0].coords.join(',') + '&pp=' + locations[0].coords.join(',') + ';1';
  var dialogHTML = '<img src="' + imgSrc + '">';
  dialogHTML += '<br>';
  for (var i = 0; i < locations.length; i++) {
    var linkURL = 'https://www.bing.com/maps/?v=2&cp=' + locations[i].coords.join(',') + '&lvl=16&dir=0';
    dialogHTML += '<a href="' + linkURL + '" target="_blank">' + locations[i].description + '</a><br>';
  }
  alertify.alert(dialogHTML);
}
*/







/*function showMapDialog() {
  var coordinates = '48.856614,2.3522219'; // vos coordonnées géographiques ici
  var coordinates_array = coordinates.split('|');
  var markers = '';
  for (var i = 0; i < coordinates_array.length; i++) {
    markers += '&pp=' + coordinates_array[i] + ';1;' + (i + 1);
  }
  var url = 'https://www.bing.com/maps/embed/viewer.aspx?v=3&cp=' + coordinates + '&lvl=16&dir=0' + markers;
  var imgSrc = 'https://www.bing.com/maps/' + coordinates + '&pp=' + coordinates + ';1';
  var dialogHTML = '<img src="' + imgSrc + '">';
  dialogHTML += '<br>';
  for (var i = 0; i < coordinates_array.length; i++) {
    var linkURL = 'https://www.bing.com/maps/?v=2&cp=' + coordinates_array[i] + '&lvl=16&dir=0';
    dialogHTML += '<a href="' + linkURL + '" target="_blank">Localisation ' + (i + 1) + '</a><br>';
  }
  alertify.alert(dialogHTML);
}
*/












/*
function showMapDialog() {
  var coordinates = '6.433550063511745,1.217771908220007'; // vos coordonnées géographiques ici
  var coordinates_array = coordinates.split('|');
  var markers = '';
  for (var i = 0; i < coordinates_array.length; i++) {
    markers += '&markers=color:red%7Clabel:' + (i + 1) + '%7C' + coordinates_array[i];
  }
  var url = 'https://www.google.com/maps/embed/v1/view?zoom=12&center=' + coordinates + markers;
  var imgSrc = 'https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques-novo/societe/et-voici-le-waze-togolais/2223181-1-fre-FR/et-voici-le-waze-togolais_i1200.jpg';
  var dialogHTML = '<div style="text-align: center;"><img style="max-width: 100%; height: auto;" src="' + imgSrc + '"></div>';
  dialogHTML += '<br>';
  for (var i = 0; i < coordinates_array.length; i++) {
    var linkURL = 'https://www.google.com/maps/search/?api=1&query=' + coordinates_array[i];
    dialogHTML += '<a href="' + linkURL + '" target="_blank">Localisation ' + (i + 1) + '</a><br>';
  }
  alertify.alert(dialogHTML);
}*/



















