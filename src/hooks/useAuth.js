import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {fetchProfile} from '../reducer/ProfileReducer'
import {login,register} from '../services/AuthService'
import {useNavigate} from 'react-router-dom'
import { message } from "antd";
import {persistor} from '../store'
import Cookies from 'js-cookie'
import localforage from 'localforage'

const useAuth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const onLogin = (value) => {
      const data = {
        email: value.email,
        password: value.password,
      };
      setIsLoading(true);
      login(data)
        .then((res) => {
          if (res.status == 200) {
            message.success("Login successfully");
            dispatch(fetchProfile())
            setIsLoading(false);
            navigate('/')
          }
        })
        .catch((error) => {
          message.error(error.message);
          setIsLoading(false);
        });
    };
    
    const onRegister = (value) => {
      const data = {
        first_name: value.firstName,
        last_name: value.lastName,
        email: value.email,
        age: value.age,
        address: value.address,
        password: value.password
      }
      setIsLoading(true)
      register(data).then((res) => {
        if(res.status == 201) {
          message.success('Register successfully')
          setIsLoading(false)
          navigate('/login')
        }
      }).catch((error) => {
        message.error(error.message);
        setIsLoading(false);
      })
    }
    const onLogout = () => {
      persistor.purge()
      Cookies.remove("token");
      localStorage.clear();
      localforage.clear()
      navigate('/login')
    }
    return {
      onLogin,
      onRegister,
      isLoading,
      onLogout
    };
  };
  
  export default useAuth;