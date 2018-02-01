var searchYouTube = (options, callback) => {

  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key, 
      q: options.query, 
      maxResults: options.max, 
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
