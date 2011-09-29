var geocoder;
  var map;
  var markersArray = [];
  var markersaddArray = [];
var output = "";
  
  var fav1 = new google.maps.LatLng(40.735167, -73.99375580000003);
    var fav2 = new google.maps.LatLng(40.73539000498421, -73.99825125864413);
    var fav3 = new google.maps.LatLng(40.73065029332028, -73.99724274805453);
  
  function initialize() {
    geocoder = new google.maps.Geocoder();
    
    var newyorkcity = new google.maps.LatLng(40.737085, -73.99210900000003);
    var myOptions = {
      zoom: 14,
      center: newyorkcity,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
    google.maps.event.addListener(map, 'click', function(event) {
      addMarker(event.latLng);
    });
    
    
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        /* '<h1 id="firstHeading" class="firstHeading">Parsons The Newschool for Design</h1>'+ */
        '<div id="bodyContent">'+
        '<img src="img/03.jpg" alt="">'+
        '<p>A pioneer in art and design education since its founding in 1896, Parsons has cultivated outstanding artists, designers, scholars, businesspeople, and community leaders for more than a century. Today, when design thinking is increasingly being employed to solve complex global problems, Parsons is leading new approaches to art and design education.</p>'+
        '</div>'+
        '</div>';
        
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
        
    var marker1 = new google.maps.Marker({
            map: map, 
            position: newyorkcity,
            animation: google.maps.Animation.DROP,
            title: "You are in Parsons 12th Floor Open Lab"
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
        //console.log( results[0].geometry.location);
        var geoinfo = results[0].geometry.location;
        /*
console.log("variable");
        console.log(geoinfo);
*/
        console.log(results[0].geometry.location.Ja);
        console.log(results[0].geometry.location.Ka);
        
        var longt = results[0].geometry.location.Ja;
        var latt = results[0].geometry.location.Ka;
        
        var url = "http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&per_page=500&lat="+ longt + "&lon="+latt+"&privacy_filter=1&api_key=d3ad23858f4d38ef73313214bfd49177&nojsoncallback=1";
				console.log(url);


				getFlickr(url);
	
	
	
	var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'
        /* '<h1 id="firstHeading" class="firstHeading">Parsons The Newschool for Design</h1>'+ */
        /* '<div id="pics">'+ */
        /* '<img alt="'+photo.title+ '"src="' + t_url+'" width="auto" height="100"/>'+   */
        '<p>A pioneer in art and design education since its founding in 1896, Parsons has cultivated outstanding artists, designers, scholars, businesspeople, and community leaders for more than a century. Today, when design thinking is increasingly being employed to solve complex global problems, Parsons is leading new approaches to art and design education.</p>'+
        '</div>'+
        '</div>';
        
        
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

        
    //document.write('<div id="oylum">'+results[0].geometry.location+'</div>');
    var marker = new google.maps.Marker({
        map: map, 
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
			console.log(data);

			//var output = "";

			for(var i=0; i<10; i++){
				photo = data.photos.photo[i];

				t_url = "http://farm" + photo.farm + 
			  ".static.flickr.com/" + photo.server + "/" + 
			  photo.id + "_" + photo.secret + "_" + "t.jpg";

				p_url = "http://www.flickr.com/photos/" + 
			  photo.owner + "/" + photo.id;
				
				console.log(photo.id);
				
				getPhotoLatLong(photo.id, t_url, photo.title);
				
				output += '<a href="' + p_url + '">'+'<img alt="'+photo.title+ '"src="' + t_url+'" width="auto" height="100"/>'+'</a>';

			}

			//$("#pics").append(output);

		 }, "JSON");
		
	}
	
	function getPhotoLatLong(id, img, title){
		geo_url="http://api.flickr.com/services/rest/?format=json&method=flickr.photos.geo.getLocation&api_key=d3ad23858f4d38ef73313214bfd49177&photo_id="+id+"&nojsoncallback=1";
		$.get(geo_url, null, function(data){
			console.log(data);
			
			var info = data.photo.location;
			
			var lat = info.latitude;
			var lon = info.longitude;
			
			console.log("lat = " + lat + ", long = " + lon);
			
			mapPhotos(lat,lon,img, title);
			
			}, "JSON");
		
	}
	
	function mapPhotos(lat,lon,img, title){
		var image = new google.maps.MarkerImage(img, new google.maps.Size(50,50), new google.maps.Point(0,0), new google.maps.Point(0,32));
		var myLatlng = new google.maps.LatLng(lat,lon);
		var marker = new google.maps.Marker({
        map: map, 
        position: myLatlng,
				icon:image,
				title:title
    });
		
	}
    
    