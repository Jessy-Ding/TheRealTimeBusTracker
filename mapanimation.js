mapboxgl.accessToken = '--INSertYourAccessTokenHere--'; 

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091542, 42.358862], // Boston, MA
    zoom: 12
});

function updateMap(vehicles) {
    vehicles.forEach(vehicle => {
        const el = document.createElement('div');
        el.className = 'marker';

        console.log(`Creating marker at [${vehicle.attributes.longitude}, ${vehicle.attributes.latitude}]`); // See the bus coordinates in the console; here we use route1 as an example

        new mapboxgl.Marker(el)
            .setLngLat([vehicle.attributes.longitude, vehicle.attributes.latitude])
            .addTo(map);
    });
}

async function fetchVehiclePositions() {
    try {
        const response = await fetch('https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip'); // Decide which route you want to track here
        const jsonResponse = await response.json();
        updateMap(jsonResponse.data);
    } catch (error) {
        console.error('Error fetching vehicle positions:', error);
    }
}

fetchVehiclePositions();

setTimeout(function() {
    window.location.reload();
}, 10000); // Refresh the page every 10 seconds