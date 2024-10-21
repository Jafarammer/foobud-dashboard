import React from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Typography,Flex} from 'antd'
import ImgLogin from '../assets/images/auth.png'
import useAuth from '../hooks/useAuth'
import '../assets/styles/pages/login-page.scss'
// features
import {FormLogin} from '../features'

const {Title} = Typography

function Login() {

  const {onLogin} = useAuth()
      
  return (
    <div className='login-page'>
        <Row gutter={8}>
          <Col span={12}>
            <Title level={2} className='text-center mt-5'>Login</Title>
            <Flex justify='center' align='center'>
              <div style={{width: 400}}>
                <FormLogin onFinish={onLogin} />
              </div>
            </Flex>
            <p className='text-center mt-5'>
              Don't have an account ? <Link to={'/register'} className='text-decoration-none fw-bold text-dark'>Register</Link>
            </p>
          </Col>
          <Col span={12} className='p-0' style={{height: '100vh'}}>
            <img className='img-login' src={ImgLogin} alt='login' />
          </Col>
        </Row>
    </div>
  )
}

export default Login