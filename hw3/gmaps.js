	var geocoder;

  function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

	var map;
	var directionsDisplay;
	var stepDisplay;
	var directionsService = new google.maps.DirectionsService();
	var panorama;
	var home = new google.maps.LatLng(40.71583,-73.95985);
	var school = new google.maps.LatLng(40.73709,-73.99211);
	var amsterdam = new google.maps.LatLng(52.37644,4.89887);
	var chino = new google.maps.LatLng(34.00450,-117.73344);
	var chicago = new google.maps.LatLng(41.97906,-87.66674);
	

	function initialize() {
		geocoder = new google.maps.Geocoder();
		directionsDisplay = new google.maps.DirectionsRenderer();
		// Instantiate an info window to hold step text.
		  stepDisplay = new google.maps.InfoWindow();
	  // Set up the map
	  var mapOptions = {
	    center: home,
	    zoom: 3,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    streetViewControl: false
	  };
	  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	  directionsDisplay.setMap(map);

	  // Setup the markers on the map
		var homeMarker = new google.maps.Marker({
	      position: home,
	      map: map,
	      title: 'Home'
	  });
	
		var schoolMarker = new google.maps.Marker({
	      position: school,
	      map: map,
	      title: 'School'
	  });

	  var amsterdamMarker = new google.maps.Marker({
	      position: amsterdam,
	      map: map,
	      title: 'Amsterdam'
	  });

	  var chinoMarker = new google.maps.Marker({
	      position: chino,
	      map: map,
	      title: 'Chino'
	  });

	  
	  var chicagoMarker = new google.maps.Marker({
	      position: chicago,
	      map: map,
	      title: 'Chicago'
	  });

	  // We get the map's default panorama and set up some defaults.
	  // Note that we don't yet set it visible.
	  panorama = map.getStreetView();
	  panorama.setPosition(home);
	  panorama.setPov({
	    heading: 265,
	    zoom:1,
	    pitch:0}
	  );
	
	
	}

	function toggleStreetView() {
	  var toggle = panorama.getVisible();
	  if (toggle == false) {
	    panorama.setVisible(true);
	  } else {
	    panorama.setVisible(false);
	  }
	}


	function calcRoute() {
	  var start = document.getElementById("start").value;
	  var end = document.getElementById("end").value;
	  var request = {
	    origin:start,
	    destination:end,
	    travelMode: google.maps.TravelMode.DRIVING
	  };
	  directionsService.route(request, function(result, status) {
	    if (status == google.maps.DirectionsStatus.OK) {
	      directionsDisplay.setDirections(result);
	    }
	  });
	}

