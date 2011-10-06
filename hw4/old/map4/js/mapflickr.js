/* 	Databases Fall2001 Homework 4
	By Tami Evnin, Nidhi Malhotra and Oylum Boran
	09/29/2011
*/

var geocoder;
var map;
var output = "";
  
  function initialize() {
  
  // Create an array of styles for the map.
  var flickrMapStyles = [
  {
    featureType: "road.local",
    stylers: [
      { hue: "#ff9900" },
      { saturation: -42 },
      { visibility: "off" }
    ]
  },{
    featureType: "road.arterial",
    stylers: [
      { visibility: "off" }
    ]
  },{
    elementType: "labels",
    stylers: [
      { hue: "#ffb300" },
      { visibility: "on" }
    ]
  },{
    featureType: "road.highway",
    stylers: [
      { visibility: "off" }
    ]
  },{
  },{
    elementType: "geometry",
    stylers: [
      { hue: "#005eff" },
      { saturation: -30 }
    ]
  },{
    featureType: "road.local",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "poi.park",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "transit.station",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "administrative.neighborhood",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "poi",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];
	
	var flickrMapType = new google.maps.StyledMapType(flickrMapStyles,
    {name: "Flickr Map"});
    
    geocoder = new google.maps.Geocoder();
    
    var newyorkcity = new google.maps.LatLng(40.7143528, -74.0059731);
    var myOptions = {
      zoom: 14,
      center: newyorkcity,
      mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'flickr_map']
    }
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
    map.mapTypes.set('flickr_map', flickrMapType);
  map.setMapTypeId('flickr_map');
    
    google.maps.event.addListener(map, 'click', function(event) {
      addMarker(event.latLng);
    });
    
    
    var contentString = "<h4>Manhattan, NY</h4>";
        
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    
    var iconImage1 = 'img/icon5.png';
    var marker1 = new google.maps.Marker({
            map: map, 
            icon: iconImage1,
            position: newyorkcity,
            animation: google.maps.Animation.DROP,
            title: "You are in Manhattan, NY"
    });
    
    
     google.maps.event.addListener(marker1, 'click', function() {
      infowindow.open(map,marker1);
    });
 }//end initialize


  function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        
        var geoinfo = results[0].geometry.location;
        //console.log(geoinfo);
        //console.log(results[0].geometry.location.Ja);
        //console.log(results[0].geometry.location.Ka);
        
        var longt = results[0].geometry.location.Ma;
        var latt = results[0].geometry.location.Na;
        
        var url = "http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&per_page=500&lat="+ longt + "&lon="+latt+"&privacy_filter=1&api_key=d3ad23858f4d38ef73313214bfd49177&nojsoncallback=1";
		//console.log(url);


		getFlickr(url);
	
	
	
	var contentString = "<h4>"+address+"</h4>";
        
        
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

        
    var iconImage = 'img/icon5.png';
    var marker = new google.maps.Marker({
        map: map, 
        icon: iconImage,
        animation: google.maps.Animation.DROP,
        position: results[0].geometry.location
    });
        
       
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
    
	}//end codeAddress
	
	function getFlickr(url){
		$.get(url, null, function(data){
			//console.log(data);

			for(var i=0; i<10; i++){
				photo = data.photos.photo[i];

				m_url = "http://farm" + photo.farm + 
			  ".static.flickr.com/" + photo.server + "/" + 
			  photo.id + "_" + photo.secret + "_" + "m.jpg";
			  
			  t_url = "http://farm" + photo.farm + 
			  ".static.flickr.com/" + photo.server + "/" + 
			  photo.id + "_" + photo.secret + "_" + "t.jpg";

				p_url = "http://www.flickr.com/photos/" + 
			  photo.owner + "/" + photo.id;
				
			//	console.log(photo.id);
				
				getPhotoLatLong(photo.id, m_url, t_url, photo.title);
				
				output += '<a href="' + p_url + '">'+'<img alt="'+photo.title+ '"src="' + t_url+'" width="auto" height="100"/>'+'</a>';

			}

		 }, "JSON");
		
	}
	
	function getPhotoLatLong(id, img, thumb, title){
		geo_url="http://api.flickr.com/services/rest/?format=json&method=flickr.photos.geo.getLocation&api_key=d3ad23858f4d38ef73313214bfd49177&photo_id="+id+"&nojsoncallback=1";
		$.get(geo_url, null, function(data){
			//console.log(data);
			
			var info = data.photo.location;
			
			var lat = info.latitude;
			var lon = info.longitude;
			
			//console.log("lat = " + lat + ", long = " + lon);
			
			mapPhotos(lat,lon,img, thumb, title);
			
			}, "JSON");
		
	}
	
	function mapPhotos(lat,lon,img,thumb, title){
		var image = new google.maps.MarkerImage(thumb, new google.maps.Size(50,50), new google.maps.Point(0,0), new google.maps.Point(0,32));
		var shadow = new google.maps.MarkerImage('img/shadow_wh.png', new google.maps.Size(58, 58), new google.maps.Point(0,0),new google.maps.Point(4, 36));
		var myLatlng = new google.maps.LatLng(lat,lon);
		var marker = new google.maps.Marker({
        map: map, 
        position: myLatlng,
        animation: google.maps.Animation.DROP,
		icon:image,
		shadow: shadow,
		title:title
    });
    
    var windowContent = "<h4>"+title+"</h4><br /><img src='"+img+"' alt='"+title+"' />";
               
       	var infowindow = new google.maps.InfoWindow({
       	content: windowContent
     });
     
     	google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
    });
		
	}
    
    