let topDiv = document.querySelector('.album-art-container')
let middleDiv = document.querySelector('.album-info')

fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(data) {
    return data.json()
  }).then(function(results) {
    let finalPlaylist = [];

    for (let i = 0; i < results.results.length; i++) {
      let newImg = document.createElement('img')
      newImg.setAttribute('src', `./images/${results.results[i].cover_art}`);
      newImg.setAttribute('class', `album-art ${i}`)
      newImg.addEventListener('click', addToMiddle)
      topDiv.appendChild(newImg)

      function addToMiddle() {
        let albumInfo = document.createElement('p');
        albumInfo.innerText = `${results.results[i].artist}: ${results.results[i].title}`;
        middleDiv.appendChild(albumInfo)

        finalPlaylist.push(`${results.results[i].artist}: ${results.results[i].title}`)
      }
    }

    let clearButton = document.querySelector('.clear-tracks')
    clearButton.addEventListener('click', function() {
      middleDiv.innerText = '';
      finalPlaylist = []
    });

    let submitButton = document.querySelector('.submit-bin')
    submitButton.addEventListener('click', function(){
      let httpRequest = new XMLHttpRequest()
      httpRequest.open('POST', 'https://lit-fortress-6467.herokuapp.com/post', true);
      httpRequest.send(finalPlaylist);
      httpRequest.onreadystatechange = function()
        {
            if (httpRequest.readyState == 4)
                if (httpRequest.status == 200)
                console.log(httpRequest)
        };

    })

});

// $(document).ready(function() {
//
//   $.get('https://lit-fortress-6467.herokuapp.com/object', function(data) {
//     let albumPosition = $('.album-showcase .albumArt')
//     for (let j = 0; j < albumPosition.length; j++) {
//       for (let i = 0; i < data.results.length; i++) {
//       let albumImage = data.results[i].cover_art;
//       let albumTitle = data.results[i].title;
//       if (i === j) {
//       $(albumPosition[j]).attr("src", "images/" + albumImage);
//       $(albumPosition[j]).attr("alt", albumTitle);
//         }
//       }
//     }
//   })
//
//   $('.albumArt').click(function () {
//       let albumCover = $(this).attr("alt")
//       console.log(albumCover);
//       let albumTitle = this.alt;
//       let artistObject = {}
//       $.get('https://lit-fortress-6467.herokuapp.com/object', function(data) {
//          for (let i = 0; i < data.results.length; i++) {
//             if (albumCover == data.results[i].title) {
//               $('.album-info').append("<p>" + data.results[i].artist + ": " + data.results[i].title + "</p>")
//         }
//       }
//     })
//   })
// })
