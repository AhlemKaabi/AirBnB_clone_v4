// $('document').ready(function(){
//     // console.log('Hello world');
//     $('INPUT[type="checkbox"]').on('change', function(){
//         // console.log('state changed');
//         //amenity_name = $(this).attr('data-name');
//         console.log('hello world');
//     });
// });

$('document').ready(function () {
    var amenities = {};
    $('INPUT[type="checkbox"]').change(function () {
      if ($(this).is(':checked')) {
        amenities[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete amenities[$(this).attr('data-id')];
      }
      $('.amenities H4').text(Object.values(amenities).join(', '));
    });
});