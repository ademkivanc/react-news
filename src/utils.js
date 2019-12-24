import axios from 'axios'

const ApiKey = 'f60cd1ba47474d0e948e30a8273b2207';

const fetchNews = (category) => {
    const url = 'https://newsapi.org/v2/top-headlines?country=tr&category=' + category + '&apiKey=' + ApiKey
    return axios.get(url);
};

export default {fetchNews};

