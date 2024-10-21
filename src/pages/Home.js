import React from 'react'
import {Typography,Flex,Button} from 'antd'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import localforage from 'localforage'
import {persistor} from '../store'
const {Title} = Typography

function Home() {
  const navigate = useNavigate()
  const onLogout = () => {
    persistor.purge()
    Cookies.remove("token");
    localStorage.clear();
    localforage.clear()
    navigate('/login')
  }
  return (
    <div className='mt-5'>
        <Flex justify='center' align='center'>
            <Title level={3} type='success'>Welcome</Title>
        </Flex>
    </div>
  )
}

export default Home