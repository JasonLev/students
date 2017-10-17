$(function() {
  $('form').submit(function (event) {
    event.preventDefault();
    if ($('#emptyList')) {
      $('#emptyList').remove();
    }
    var todoItem = $('#newTodo').val().trim();
    var todo = $('<li><label><input type="checkbox"><span>' + todoItem + '</span></label></li>');
    todo.appendTo($('#todoList'));
  })
});
