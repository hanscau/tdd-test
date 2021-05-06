import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/xznSCDkhEXRNFAYjbuwUYWjJc7QnMj2N',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
