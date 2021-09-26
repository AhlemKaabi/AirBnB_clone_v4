// $('document').ready(function(){
// console.log("hi there!")
// $.ajax({
// 	url: 'http://0.0.0.0:5001/api/v1/places_search',
// 	type: "POST",
// 	data: '{}',
// 	contentType: "application/json",
// 	dataType: "json",
// 	success: function(data){
// 		console.log(data);
// 		}
// 	});
// });


$('document').ready(function(){
	// function get_user(user_id){
	// 	$.ajax({
	// 		url: 'http://0.0.0.0:5001/api/v1/users/' + user_id,
	// 		type: 'GET',
	// 		dataType: 'json',
	// 		success: function(data){
	// 			console.log(data.first_name + ' ' + data.last_name);
	// 			$('section.places').append('<div class="user"><b>Owner: </b>' + data.first_name + ' ' + data.last_name + '</div>');
	// 		}
	// 	});
	// }
	function get_user(user_id){
		$.ajax({
			url: 'http://0.0.0.0:5001/api/v1/users/' + user_id,
			type: 'GET',
			dataType: 'json',
			success: function(data){
				//return(data.first_name + ' ' + data.last_name)
				$('section.places article').append('<div class="user"><b>Owner: </b>' + data.first_name + ' ' + data.last_name + '</div>'
				+ '<div class="description">' + data[i].description + '</div>');
			}
		});
	}
	$.ajax({
		url: 'http://0.0.0.0:5001/api/v1/places_search',
		type: 'POST',
		data: '{}',
		contentType: 'application/json',
		dataType: 'json',
		success: function(data){
			// console.log(data);
			// console.log(data[0].user_id);
			for(let i = 0; i < data.length; i++){
				$('section.places').append(
				'<article>' + '<div class="title_box"><h2>' + data[i].name
				+ '</h2>\n<div class="price_by_night">$' + data[i].price_by_night +
				'</div>\n</div>\n<div class="information"><div class="max_guest">' + data[i].max_guest +
				' guests </div>\n<div class="number_rooms">' + data[i].number_rooms +
				' Bedrooms</div><div class="number_bathrooms">' + data[i].number_bathrooms +
				' Bathrooms</div>' + '</div>' + '</article>');
			}
			get_user(data[0].user_id);

		}
	});
});
