import axios from 'axios';

const KEY = 'AIzaSyA_ah7Czflufv7Gg0tSx3k-zhdJn6bFzB4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});