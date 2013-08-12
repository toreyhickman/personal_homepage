function updateText(page) {
  $.get(page, function(data) {
    $(".text").html("")
    $(".text").html(data)
  })
}

$(document).ready(function() {

  updateText('aboutme.html')

})
