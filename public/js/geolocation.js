function success(pos) {
    var crd = pos.coords;
    lat = crd.latitude;
    lon = crd.longitude;
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
