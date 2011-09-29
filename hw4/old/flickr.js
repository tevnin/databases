
var url = "http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&per_page=500&lat=40.735167&lon=-73.993755&privacy_filter=1&api_key=d3ad23858f4d38ef73313214bfd49177&nojsoncallback=1";


	$.get(url, null, function(data){
		console.log(data);

		var output = "";
	
		for(var i=0; i<5; i++){
			photo = data.photos.photo[i];
		
			t_url = "http://farm" + photo.farm + 
		  ".static.flickr.com/" + photo.server + "/" + 
		  photo.id + "_" + photo.secret + "_" + "b.jpg";
	
			p_url = "http://www.flickr.com/photos/" + 
		  photo.owner + "/" + photo.id;
	
			output += '<a href="' + p_url + '">'+'<img alt="'+photo.title+ '"src="' + t_url+'"/>'+'</a>';
		
		}
	
		$("#pics").append(output);
	
	
	}, "JSON");