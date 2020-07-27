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

    /* Log api responses for testing purposes */
    // api.addMonitor((res) => { 
    //     console.log('api response', res); 
    // });

    /* Encode request url */
    api.addRequestTransform((req) => {
        req.url = encodeURI(req.url);
    });
    // onSignup body = {
    //     companyName: '',
    //     fullName: '',
    //     email: '',
    //     password: ''
    // }
    const onSignup = (body) => api.post('/api/signup', body);
    // onLogin body = {
    //     email: '',
    //     password: ''
    // }
    const onLogin = (body) => api.post('/api/login', body);
    // onUpdatePassword body = {
    //     id: '',
    //     currentPassword: '',
    //     newPassword: ''
    // }
    const onUpdatePassword = (body) => api.put('/api/updatePassword', body);
    
    return {
        onSignup,
        onLogin,
        onUpdatePassword
    };
};

export default { createBackendServer };