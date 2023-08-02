// Axios
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TMDB_API,
});

instance.interceptors.request.use(
    config => {
        let params = {};

        if (!config.params) {
            params = {
                api_key: process.env.NEXT_PUBLIC_TMDB_SECRET_KEY,
                region: 'IN'
            }
        }

        config.params = { ...config?.params, ...params };

        return config;
    },
);

export default instance;