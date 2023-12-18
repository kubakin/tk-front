import axios from 'axios';

export const adminAdminApiInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/admin/admin`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
    // headers: {"Access-Control-Allow-Origin": "*"}
});
