import axios from 'axios'
import Cookies from 'js-cookie'

export const login = async(credential) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          };
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,credential,config);
        Cookies.set('token', response.data.token)
        return response
    } catch (error) {
        throw new Error("Login failed!!!");        
    }
}
export const register = async(credential) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, credential,config)
    return response
  } catch (error) {
    throw new Error("Register failed!!!");
  }
}