$('document').ready(
	function () {
		$('input[type="checkbox"]').click(
			function () {
				if($(this).is(":checked")){

					console.log("Checkbox is checked.");
					console.log(this.getAttribute("data-id"));
				}
				else if($(this).is(":not(:checked)")){
					console.log("Checkbox is unchecked.");
				}
			}
		);
	}
);

