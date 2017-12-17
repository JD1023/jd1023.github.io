function makeGrid() {
	$('#pixel_canvas').children().remove()
  for (x = 0; x < $('#input_height').val(); x++) {
	$('#pixel_canvas').append('<tr></tr>');
	}

  for (x = 0; x < $('#input_width').val(); x++) {
	$('tr').append('<td></td>');
	}

    $('#pixel_canvas').find('td').click(function() {
		$(this).attr('bgcolor', $("#colorPicker").val());
	});
}

$('input[type="submit"]').click(function(event) {
  event.preventDefault();
  makeGrid();
});
