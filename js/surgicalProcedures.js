var items = [];

$(function() {
  $.getJSON("refrences/surgicalProcedures.json", function(data) {items = data});

  $('#exampleModal').on('show.bs.modal', function(event) {
      var activator = $(event.relatedTarget)
      var recipient = activator.data('information')
      var title =  activator[0].innerHTML

      var modal = $(this)
      modal.find('.modal-title').text('Information about ' + title)
      modal.find('.modal-info').text(items.information[recipient])
  })
});
