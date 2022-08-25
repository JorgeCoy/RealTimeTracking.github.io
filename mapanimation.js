// This array contains the coordinates for all bus stops between MIT and Harvard
const momHouse = [
  [-74.10614962356715, 4.73751320486565],
  [-74.10575209626336, 4.738147927203528],
  [-74.10737640136512,4.7388508069672355],
  [-74.10734493873514,4.738829576409188],
  [-74.10687925491277,4.739764485628726],
  [-74.10715371590948,4.739970748406762],
  [-74.10688150459396,4.740340676055922],
  [-74.10698255603108,4.740444507922376],
];
const myGarden = [
  [-74.10614962356715, 4.73751320486565],
  [-74.10575209626336, 4.738147927203528],
  [-74.10737640136512,4.7388508069672355],
  [-74.10806886827629,4.738518536623076],
  [-74.10875620447246,4.739222264891936],
  [-74.10802099269176,4.741211693594437],
  [-74.10831298053972,4.741316236394226],
  [74.10820122845854,4.741594048593186],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZ2Vjb3kiLCJhIjoiY2w2b2RpYThkMDl1bjNsbWpqMTl5ZGNuciJ9.AcwlxkvNg3rPl9tqHtEYvw';
const hogar = [-74.10614962356715, 4.73751320486565];
// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: hogar,
  zoom: 17,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let marker = new mapboxgl.Marker().setLngLat(hogar).addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(() =>{
    if(counter >=myGarden.length) return;
    marker.setLngLat(myGarden[counter]);
    counter++;
    move();
  },1000)
  
  setTimeout(() =>{
    if(counter >=stops.length) return;
    marker.setLngLat(stops[counter]);
    counter++;
    move();
  },1000)


  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}

function move1() {
  setTimeout(() =>{
    if(counter >=momHouse.length) return;
    marker.setLngLat(momHouse[counter]);
    counter++;
    move();
  },1000)
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
