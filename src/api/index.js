import apisauce from 'apisauce';

const API_BASE_URL = 'http://localhost:1337';
// const API_BASE_URL = 'https://devapi.wefetchapp.com';
// const API_BASE_URL = 'https://api.wefetchapp.com';

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
    
    const signup = (body) => api.post(`/api/dashboard-user/signup`, body);
    const login = (body) => api.post(`/api/dashboard-user/login`, body);
    // onUpdatePassword body = {
    //     id: '',
    //     currentPassword: '',
    //     newPassword: ''
    // }
    const updatePassword = (body) => api.put(`/api/dashboard/user/updatePassword`, body);
    const getCompaniesAndFacilities = () => api.get(`/api/company/getCompaniesAndFacilities`);
    const updateCompany = (body) => api.put(`/api/company/updateCompany`, body);
    const createFacility  = (body) => api.post(`/api/facility/createFacility`, body);
    const updateFacility = (body) => api.put(`/api/facility/updateFacility`, body);
    const deleteFacility = (body) => api.delete(`/api/facility/deleteFacility`, body);
    
    return {
        signup,
        login,
        updatePassword,
        getCompaniesAndFacilities,
        updateCompany,
        createFacility,
        updateFacility,
        deleteFacility
    };
};

export default { createBackendServer };