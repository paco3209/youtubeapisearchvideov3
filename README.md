# What is this?

Easily search for videos on Youtube using their v3 API.

# Installation

`npm i youtubeapisearcvideov3 --save`

# Options

* part: snippet|part, default: snippet
* key: API_KEY,
* q: 'the query term to search for',
* type: video | channel | playlist , default: video
* safeSearch: strict | moderate | none, default: strict
* videoDuration: any | long | medium | short,
* videoEmbeddable: true | any, default: true
* maxResults: '50',
* videoDefinition: standard | any | high, defauly: standard
* order: 'videoCount' 

# JavaScript Usage


...
import YTSearch from 'youtube-api-search';

 const [videos, setVideos] = useState([]);

const fetchResource = async () => {
    await YTSearch({
      key: API_KEY,
      term: filename,
      duration: 'short'
      

    }, (data) => {
          setVideos(data);
        
        
          
      });
  }

...