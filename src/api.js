import axios from 'axios';

const API_KEY = '=AIzaSyARaqwBRp0qu1IdX9p-wn-dAObUN_Wur5c';

export const getVideoDetails = async (videoId) => {
    const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,contentDetails`
);

    return response.data.items[0];
};