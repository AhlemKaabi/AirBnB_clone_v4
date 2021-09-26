$('document').ready(function(){
$.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    type: 'POST',
    data: '{}',
    contentType: 'application/json',
    dataType: 'json',
    success: function(data){
        console.log(data);
        for(let i = 0; i < data.length; i++)
        {
        $('section.places').append('<article>' + '<div class="title_box"><h2>' + data[i].name
        + '</h2>\n<div class="price_by_night">$' + data[i].price_by_night +
        '</div>\n</div>\n<div class="information"><div class="max_guest">' + data[i].max_guest +
        ' guests </div>\n<div class="number_rooms">' + data[i].number_rooms +
        ' Bedrooms</div><div class="number_bathrooms">' + data[i].number_bathrooms +
        ' Bathrooms</div>' + '</div>' +
        '<div class="user"><b>Owner: </b>' + data[i].first_name  + //data[i].place.user.last_name//
        '</div>' + '<div class="description">' + data[i].description + '</div>'
        );
        }
    }
});
});