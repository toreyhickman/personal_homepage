function getIntro() {
  $.get('aboutme.html', function(data) {
    $(".text").html(data)
  })
}

$(document).ready(function() {

  getIntro()
   
})
