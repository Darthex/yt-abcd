import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';

export const getVideoDetails = async (videoId) => {
    const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,contentDetails`
);

    return response.data.items[0];
};