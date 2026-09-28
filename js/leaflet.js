var map = L.map('map').setView([0, 0], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([51.51294734214868, -0.2018882608674749]).addTo(map); 
marker1.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Alice's Antiques</h3>
        <img src="imgs/alice_antiques.jpg" alt="Alice's Antiques" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/alice_antiques.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker2 = L.marker([51.49682852042813, -0.17634574552732035]).addTo(map);
marker2.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Natural History Museum</h3>
        <img src="imgs/natural_history_museum.jpg" alt="Natural History Museum" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/natural_history_museum.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker3 = L.marker([51.501457472920556, -0.1418685455270196]).addTo(map);
marker3.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Buckingham Palace & Queen Victoria Memorial</h3>
        <img src="imgs/buckingham_palace.jpg" alt="Buckingham Palace" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/buckingham_palace.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker4 = L.marker([51.503100540067415, -0.13389975902107132]).addTo(map);
marker4.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">The Mall & St. James's Park</h3>
        <img src="imgs/st_james_park.jpg" alt="The Mall & St. James's Park" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/st_james_park.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker5 = L.marker([51.50668961796999, -0.1334793743619605]).addTo(map);
marker5.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Reform Club</h3>
        <img src="imgs/reform_club.jpg" alt="Reform Club" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/reform_club.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker6 = L.marker([51.50805999342075, -0.12805427968010868]).addTo(map);
marker6.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Trafalgar Square</h3>
        <img src="imgs/trafalgar_square.jpg" alt="Trafalgar Square" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/trafalgar_square.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker7 = L.marker([51.50641581861187, -0.12590706086796585]).addTo(map);
marker7.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Great Scotland Yard</h3>
        <img src="imgs/great_scotland_yard.jpg" alt="Great Scotland Yard" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/great_scotland_yard.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker8 = L.marker([51.51239825047433, -0.1110375031969715]).addTo(map);
marker8.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Middle Temple Lane & Australia House</h3>
        <img src="imgs/middle_temple_lane.png" alt="Middle Temple Lane & Australia House" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/middle_temple_lane.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker9 = L.marker([51.51398548499088, -0.09837206086740935]).addTo(map);
marker9.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">St. Paul's Cathedral & Millenium Bridge</h3>
        <img src="imgs/st_paul.jpg" alt="St. Paul's Cathedral & Millenium Bridge" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/st_paul.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker10 = L.marker([51.514022147142356, -0.08836883203209839]).addTo(map);
marker10.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Bank of England</h3>
        <img src="imgs/bank_of_england.jpg" alt="Bank of England" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/bank_of_england.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker11 = L.marker([51.513529840185214, -0.08637438600845597]).addTo(map);
marker11.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Cornhill</h3>
        <img src="imgs/cornhill.jpg" alt="Cornhill" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/cornhill.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker12 = L.marker([51.51536863398654, -0.08647334552615736]).addTo(map);
marker12.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Drapers' Hall</h3>
        <img src="imgs/drapers_hall.jpg" alt="Drapers' Hall" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/drapers_hall.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker13 = L.marker([51.510720476617315, -0.08156223203224777]).addTo(map);
marker13.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Minster Court</h3>
        <img src="imgs/minster_court.jpg" alt="Minster Court" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/minster_court.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker14 = L.marker([51.51285944952806, -0.08348598785565318]).addTo(map);
marker14.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">Leadenhall Market</h3>
        <img src="imgs/leadenhall.jpg" alt="Leadenhall Market" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/leadenhall.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker15 = L.marker([51.53068647181858, -0.1232585436779456]).addTo(map);
marker15.bindPopup(`
    <div style="text-align: center; max-width: 200px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px;">King's Cross Station</h3>
        <img src="imgs/kings_cross_station.jpg" alt="King's Cross Station" style="width: 100%; height: 120px; margin-bottom: 8px;">
        <a href="locations/kings_cross_station.html" style="display: inline-block">
            Discover more
        </a>
    </div>
`);

var marker16 = L.marker([51.518556015389294, -0.20618526441926516]).addTo(map);
marker16.bindPopup("27 St. Lukes Mews")

var marker17 = L.marker([51.51531173120026, -0.20728066626958574]).addTo(map);
marker17.bindPopup("The Travel Bookshop Gift Shop")

var marker18 = L.marker([51.497834759759385, -0.174604720784802]).addTo(map);
marker18.bindPopup("Victoria and Albert Museum")

var marker19 = L.marker([51.50849462561429, -0.10916255363984603]).addTo(map);
marker19.bindPopup("Oxo Gallery")

var marker20 = L.marker([51.506439901518654, -0.09287482024161998]).addTo(map);
marker20.bindPopup("8 Bedale Street")

var marker21 = L.marker([51.51408898710483, -0.08947784537663035]).addTo(map);
marker21.bindPopup("Montblanc Royal Exchange")

var marker22 = L.marker([51.51891455225875, -0.09978219226747935]).addTo(map);
marker22.bindPopup("St Bartholomew the Great")

var marker23 = L.marker([51.473420992572684, -0.0017086615852271445]).addTo(map);
marker23.bindPopup("Ranger's House")

var marker24 = L.marker([51.50376291520743, -0.13918899041859908]).addTo(map);
marker24.bindPopup("Lancaster House")

var marker25 = L.marker([51.5262368467917, -0.13684100390969794]).addTo(map);
marker25.bindPopup("187 North Gower Street")

var markerGroup = L.featureGroup([
    marker1, marker2, marker3, marker4, marker5,
    marker6, marker7, marker8, marker9, marker10,
    marker11, marker12, marker13, marker14, marker15,
    marker16, marker17, marker18, marker19, marker20,
    marker21, marker22, marker23,marker24, marker25
]);
map.fitBounds(markerGroup.getBounds())