import apisauce from 'apisauce';

const API_BASE_URL = 'http://localhost:1337';

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

    /* encode request url */
    api.addRequestTransform((req) => {
        req.url = encodeURI(req.url);
    });

    const onSignup = (body) => api.post('/api/signup', body);
    /* const body = {
        companyName: '',
        fullName: '',
        email: '',
        password: ''
    } */
    const onLogin = (body) => api.post('/api/login', body);
    /* const body = {
        email: '',
        password: ''
    } */
    const onUpdatePassword = (body) => api.put('/api/updatePassword', body);
    /* const body = {
        id: '',
        currentPassword: '',
        newPassword: ''
    } */
    
    return {
        onSignup,
        onLogin,
        onUpdatePassword
    };
};

export default { createBackendServer };