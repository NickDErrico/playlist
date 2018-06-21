let topAlbum = document.getElementById('one')
let middleAlbum = document.getElementById('two')
let bottomAlbum = document.getElementById('three')

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(data) {
    return data.json()
  }).then(function(results) {
    let random1 = getRandom(0,4)
    let random2 = getRandom(0,4)
    let random3 = getRandom(0,4)

    topAlbum.setAttribute('src', `./images/${results.results[random1].cover_art}`)

    if (random2 !== random1) {
      middleAlbum.setAttribute('src', `./images/${results.results[random2].cover_art}`)
    }else {
      for(let i=0; i<5; i++){
        if(random1 !== i){
          random2 = i;
          middleAlbum.setAttribute('src', `./images/${results.results[random2].cover_art}`)
        }
      }
    }
    if(random3 !== random2 && random3 !== random1) {
      bottomAlbum.setAttribute('src', `./images/${results.results[random3].cover_art}`)
    }else {
      for(let j=0; j<5; j++){
        if(random1 !== j && random2 !== j){
          random3 = j
          bottomAlbum.setAttribute('src', `./images/${results.results[random3].cover_art}`)
        }
      }
    }
  })



// $(document).ready(function() {
//
//   $.get('https://lit-fortress-6467.herokuapp.com/object', function(data) {
//     let albumLocation = $('.railroad-container .album')
//     let albumArt = []
//     for (let i = 0; i < data.results.length; i++) {
//       albumArt.push(data.results[i].cover_art);
//         for (let j = 0; j < albumLocation.length; j++) {
//           let randomImage = albumArt[Math.floor(Math.random() * albumArt.length)];
//           $(albumLocation[j]).attr("src", "images/" + randomImage)
//      }
//    }
// })
//   $('#new-page').click(function() {
//     location.href = "playlistPage.html"
//   })
// })
