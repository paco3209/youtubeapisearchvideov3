var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

module.exports = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }

  var params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: 'video',
    safeSearch: 'strict',
    videoDuration: options.duration,
    videoEmbeddable: 'true',
    maxResults: '50',
    videoDefinition: 'standard',
    order: 'viewCount'
    
    
    
    

  };

  axios.get(ROOT_URL, { params: params })
    .then(function (response) {
      
      if (callback) {
        callback(response.data.items);
        
      }
    })
    .catch(function(error) {
      console.error(error);
    });
};
