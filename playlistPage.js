$(document).ready(function() {

  $.get('https://lit-fortress-6467.herokuapp.com/object', function(data) {
    let albumPosition = $('.album-showcase .albumArt')
    for (let j = 0; j < albumPosition.length; j++) {
      for (let i = 0; i < data.results.length; i++) {
      let albumImage = data.results[i].cover_art;
      let albumTitle = data.results[i].title;
      if (i === j) {
      $(albumPosition[j]).attr("src", "images/" + albumImage);
      $(albumPosition[j]).attr("alt", albumTitle);
        }
      }
    }
  })

  $('.albumArt').click(function () {
      let albumCover = $(this).attr("alt")
      console.log(albumCover);
      let albumTitle = this.alt;
      let artistObject = {}
      $.get('https://lit-fortress-6467.herokuapp.com/object', function(data) {
         for (let i = 0; i < data.results.length; i++) {
            if (albumCover == data.results[i].title) {
              $('.album-info').append("<p>" + data.results[i].artist + ": " + data.results[i].title + "</p>")
        }
      }
    })
  })
})
