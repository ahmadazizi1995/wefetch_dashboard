import apisauce from 'apisauce';

const API_BASE_URL = 'http://localhost.com';

const createBackendServer = (baseURL = API_BASE_URL) => {
    const api = apisauce.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 0
    });

    // log api responses for testing purposes
    // api.addMonitor((res) => { 
    //     console.log('api response', res); 
    // });

    // encode request url
    api.addRequestTransform((req) => {
        req.url = encodeURI(req.url);
    });

    const login = (body) => api.post('/login', body);
    const signup = (body) => api.post('/signup', body);

    return {
        login,
        signup
    };
};

export default { createBackendServer };