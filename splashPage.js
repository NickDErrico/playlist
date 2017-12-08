$(document).ready(function() {

  $.get('https://lit-fortress-6467.herokuapp.com/object', function(data) {
    let albumLocation = $('.railroad-container .album')
    let albumArt = []
    for (let i = 0; i < data.results.length; i++) {
      albumArt.push(data.results[i].cover_art);
        for (let j = 0; j < albumLocation.length; j++) {
          let randomImage = albumArt[Math.floor(Math.random() * albumArt.length)];
          $(albumLocation[j]).attr("src", "images/" + randomImage)
     }
   }
})
  $('#new-page').click(function() {
    location.href = "playlistPage.html"  
  })
})
