$(function(){
  var baseSrcUrl = "https://www.thinkful.com/learn/static/guides/intro-to-jquery/images/";
  $("main > img").hover(function () {
    this.src = baseSrcUrl + 'ryu_animated.gif';
  }, function() {
    this.src = baseSrcUrl + 'ryu_stand_still.png';
  })
  .mousedown(function(){
    $(".hadouken").remove();
    var flameString = '<img class="hadouken" src="' + baseSrcUrl + 'hadouken.gif">';
    this.src = baseSrcUrl + 'ryu_hadoken_pose.png';
    var flameImg = $(this).after(flameString).next();
    $(flameImg).animate({
      marginLeft: "600px",
    }, 800, 'swing', function(){
      this.remove();
    });
  })
  .mouseup(function() {
    this.src = baseSrcUrl + 'ryu_stand_still.png';
  });

})