(function() {
  var lightSensorThreshold = 10;
  window.addEventListener('devicelight', function(event) {
      $('#light').text('light: ' + event.value);

  });
})();
