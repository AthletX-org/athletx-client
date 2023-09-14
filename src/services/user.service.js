import axiosInstance from '@/utils/axios';
import authHeader from './auth-header';

class UserService{
    getUserInfo(userId){
        return axiosInstance.get("/users/info/"+userId, {headers: authHeader() })
            .then(response => {
                return response.data
            })
    }
    updateUserInfo(userId, userInfo){
        const contentType = {'Content-Type': 'multipart/form-data'}
        return axiosInstance.patch("/users/info/"+userId, userInfo,
            {headers: {...authHeader(),...contentType }})
    }
}

export default new UserService(); 