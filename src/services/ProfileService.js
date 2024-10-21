import api from "./API";


export const getProfile = async() => {
    try {
        const response = await api.get('/profile')
        return response.data
    } catch (error) {
        throw new Error("Get profile failed!");     
    }
}

export const editProfile = async(credential) => {
    try {
        const response = await api.put('/profile', credential, {headers: {'Content-Type': 'multipart/form-data'}})
        return response
    } catch (error) {
        throw new Error("Update profile failed!");        
    }
}
