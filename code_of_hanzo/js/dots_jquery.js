$(function(){
  $('input').change(function() {
    $('body').css('backgroundColor', $(this).val());
  })
});
