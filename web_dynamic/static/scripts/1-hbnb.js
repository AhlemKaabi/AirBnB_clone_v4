$('document').ready(
	function () {
    let keep_amenities = {}

		$('input[type="checkbox"]').click(
			function () {

				if($(this).is(":checked")){
          // console.log(amenities[$(this)])
					console.log("Checkbox is checked.");
					keep_amenities[$(this).attr("data-id")] =  $(this).attr("data-name")
				}
				else if ($(this).is(":not(:checked)")){
					console.log("Checkbox is unchecked.");
          delete keep_amenities[$(this).attr("data-id")]
				}
        console.log(Object.values(keep_amenities));
        $('.amenities h4' ).text(Object.values(keep_amenities))
			}
		);
	}
);
