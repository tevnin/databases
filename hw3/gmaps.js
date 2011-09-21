	var geocoder;



	var map;
	var directionsDisplay;
	var stepDisplay;
	var markerArray = [];
	var directionsService = new google.maps.DirectionsService();
	var panorama;
	var home = new google.maps.LatLng(40.71583,-73.95985);
	var school = new google.maps.LatLng(40.73709,-73.99211);
	var amsterdam = new google.maps.LatLng(52.37644,4.89887);
	var chino = new google.maps.LatLng(34.00450,-117.73344);
	var chicago = new google.maps.LatLng(41.97906,-87.66674);
	
	var newIcon = MapIconMaker.createMarkerIcon({width: 20, height: 34, primaryColor: "#0000FF", cornercolor:"#0000FF"});
	

	function initialize() {
		geocoder = new google.maps.Geocoder();
		directionsDisplay = new google.maps.DirectionsRenderer();
		// Instantiate an info window to hold step text.
		  stepDisplay = new google.maps.InfoWindow();
	  // Set up the map
	  var mapOptions = {
	    center: chicago,
	    zoom: 4,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    streetViewControl: false
	  };
	  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	  directionsDisplay.setMap(map);

	  // Setup the markers on the map
		var homeMarker = new google.maps.Marker({
	      position: home,
	      map: map,
	      title: 'Brooklyn',
				//color: blue
	  });
	
		var schoolMarker = new google.maps.Marker({
	      position: school,
	      map: map,
	      title: 'School'
	  });

	  // var amsterdamMarker = new google.maps.Marker({
	  //     position: amsterdam,
	  //     map: map,
	  //     title: 'Amsterdam'
	  // });

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
	
	function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });

				//console.log(results[0].geometry.location);
				$("#start").append("<option value='"+results[0].geometry.location+"'>"+results[0].address_components[0].short_name+"</option>");
			  $("#end").append("<option value='"+results[0].geometry.location+"'>"+results[0].address_components[0].short_name+"</option>");
			//console.log(results[0].address_components[0].short_name);
			
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
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
	
		// First, clear out any existing markerArray
		  // from previous calculations.
		  for (i = 0; i < markerArray.length; i++) {
		    markerArray[i].setMap(null);
		  }

		  // Retrieve the start and end locations and create
		  // a DirectionsRequest using WALKING directions.
		  var start = document.getElementById("start").value;
		  var end = document.getElementById("end").value;
		  var request = {
		      origin: start,
		      destination: end,
		      travelMode: google.maps.TravelMode.WALKING
		  };

		  // Route the directions and pass the response to a
		  // function to create markers for each step.
		  directionsService.route(request, function(response, status) {
		    if (status == google.maps.DirectionsStatus.OK) {
		      var warnings = document.getElementById("warnings_panel");
		      warnings.innerHTML = "" + response.routes[0].warnings + "";
		      directionsDisplay.setDirections(response);
		      showSteps(response);
		    }
		  });
	}
	function showSteps(directionResult) {
	  // For each step, place a marker, and add the text to the marker's
	  // info window. Also attach the marker to an array so we
	  // can keep track of it and remove it when calculating new
	  // routes.
	  var myRoute = directionResult.routes[0].legs[0];

	  for (var i = 0; i < myRoute.steps.length; i++) {
	      var marker = new google.maps.Marker({
	        position: myRoute.steps[i].start_point,
	        map: map
	      });
	      attachInstructionText(marker, myRoute.steps[i].instructions);
	      markerArray[i] = marker;
	  }
	}

	function attachInstructionText(marker, text) {
	  google.maps.event.addListener(marker, 'click', function() {
	    stepDisplay.setContent(text);
	    stepDisplay.open(map, marker);
	  });
	}

