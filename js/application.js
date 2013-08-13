var idPageMap = {
  'introduction': 'aboutme.html',
  'work':         'work.html',
  'education':    'education.html'
}

function updateText(page) {
  $.get(page, function(data) {
    $(".text").html("")
    $(".text").html(data)
  })
}

$(document).ready(function() {

  updateText('aboutme.html')

  $('nav span').on('click', function() {
    var id = ($(this).attr('id'))
    updateText(idPageMap[id])
  })

})
