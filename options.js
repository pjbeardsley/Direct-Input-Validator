$(function() {
  $('#show_results_in').val(localStorage["show_results_in"]);

  $('#save').click(function() {
    localStorage['show_results_in'] = $('#show_results_in').val();
    $('#status').html('Options Saved.');

    setTimeout(function() {
      $('#status').html('');
    }, 750);
  ;});
});
