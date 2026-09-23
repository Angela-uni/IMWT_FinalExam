var map = L.map('map').setView([0, 0], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([51.51294734214868, -0.2018882608674749]).addTo(map); 
marker1.bindPopup("Alice's Antiques")

var marker2 = L.marker([51.49682852042813, -0.17634574552732035]).addTo(map);
marker2.bindPopup("Natural History Museum")

var marker3 = L.marker([51.501457472920556, -0.1418685455270196]).addTo(map);
marker3.bindPopup("Buckingham Palace & Queen Victoria Memorial")

var marker4 = L.marker([51.503100540067415, -0.13389975902107132]).addTo(map);
marker4.bindPopup("The Mall & St. James's Park")

var marker5 = L.marker([51.50668961796999, -0.1334793743619605]).addTo(map);
marker5.bindPopup("Reform Club")

var marker6 = L.marker([51.50805999342075, -0.12805427968010868]).addTo(map);
marker6.bindPopup("Trafalgar Square")

var marker7 = L.marker([51.50641581861187, -0.12590706086796585]).addTo(map);
marker7.bindPopup("Great Scotland Yard")

var marker8 = L.marker([51.51239825047433, -0.1110375031969715]).addTo(map);
marker8.bindPopup("Middle Temple Lane & Australia House")

var marker9 = L.marker([51.51398548499088, -0.09837206086740935]).addTo(map);
marker9.bindPopup("St. Paul's Cathedral & Millenium Bridge")

var marker10 = L.marker([51.514022147142356, -0.08836883203209839]).addTo(map);
marker10.bindPopup("Bank of England")

var marker11 = L.marker([51.513529840185214, -0.08637438600845597]).addTo(map);
marker11.bindPopup("Cornhill")

var marker12 = L.marker([51.51536863398654, -0.08647334552615736]).addTo(map);
marker12.bindPopup("Drapers' Hall")

var marker13 = L.marker([51.510720476617315, -0.08156223203224777]).addTo(map);
marker13.bindPopup("Minster Court")

var marker14 = L.marker([51.51285944952806, -0.08348598785565318]).addTo(map);
marker14.bindPopup("Leadenhall Market")

var marker15 = L.marker([51.53068647181858, -0.1232585436779456]).addTo(map);
marker15.bindPopup("King's Cross Station")

var markerGroup = L.featureGroup([
    marker1, marker2, marker3, marker4, marker5,
    marker6, marker7, marker8, marker9, marker10,
    marker11, marker12, marker13, marker14, marker15
]);
map.fitBounds(markerGroup.getBounds())