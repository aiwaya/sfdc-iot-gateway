function success(pos) {
    var crd = pos.coords;
    lat = crd.latitude;
    lon = crd.longitude;
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
    alert('ERROR(' + err.code + '): ' + err.message);
};

$(function() {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
});
