import axios, {AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

export const domain = process.env.DOMAIN;
export const url = process.env.DOMAIN + '/api';
export const storage =  domain + '/public/uploads'
 
const api = axios.create({
    baseURL:url,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken && config.headers) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error: AxiosError) => {
        Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response : AxiosResponse) => {
        return response;
    },
    async function  (error: AxiosResponse  ) {
        const originalRequest = error.config;
        //@ts-ignore
        if (error.response.status === 401 || error.response.status === 403 && !originalRequest._retry) { // 403
            //@ts-ignore
            originalRequest._retry = true;
            const access_token = await refreshAccessToken();            
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
            return api(originalRequest);
          }

        return Promise.reject(error);
    }
);

const refreshAccessToken = async () => {
    let refreshToken = localStorage.getItem("refreshToken");

    await api
        .post(`/auth/refresh`, { refreshToken })
        .then(async (res: AxiosResponse) => {
            const {accessToken,refreshToken} = res.data;
            console.log({accessToken,refreshToken})
            if(accessToken){
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
            }else{
                // store.dispatch(setSession(true))
            }

           //  if (res.status === 200 && accessToken && refreshToken ) {
           //      await resetToken(accessToken, refreshToken)
           //  }

            return accessToken;
        });

}

const resetToken = async (access='',refresh='') => {
    if(access && refresh){
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
    }else{
        // store.dispatch(setSession(true))
    }
}

export default api;