$(function() {
  function updateCounters() {
    $("#total").text($('#todoList li').length);
    $('#completed').text($('input:checked').length);
    $('#remaining').text($('#total').text() - $('#completed').text());
  }
  $('form').submit(function (event) {
    event.preventDefault();
    var todoArr = $('#newTodo').val().split(",");
    todoArr.forEach(function (task) {
      if (task.trim()) {
        if ($('#emptyList')) {
          $('#emptyList').remove();
        }
        var todo = $('<li><label><input type="checkbox"><span>' + task.trim() + '</span></label></li>');
        todo.appendTo($('#todoList'));
        updateCounters();
      }
    })
    $('#newTodo').val("");
  });
  $('#todoList').change(updateCounters);
});
