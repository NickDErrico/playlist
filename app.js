$(document).ready(function() {

  let albumArray = ["images/21.jpg", "images/ghost_in_the_machine.jpg", "images/red.jpg", "images/the_division_bell.jpg", "images/thriller.jpg"];
  let albumCovers = $('.album-list .album')
  for (let i = 0; i < albumCovers.length; i++) {
    let randomImage = albumArray[Math.floor(Math.random() * albumArray.length)];
    albumCover = albumCovers[i]
    console.log(albumCover);
    $(albumCovers[i]).attr("src", randomImage)
  }
})
