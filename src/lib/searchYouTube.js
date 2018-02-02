var searchYouTube = ({key, query, max}, callback) => {

  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: key, 
      q: query, 
      maxResults: max, 
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    success: function (response) {
      callback(response.items);
    }
  });

};

window.searchYouTube = searchYouTube;
