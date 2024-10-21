import React from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Typography,Flex} from 'antd'
import ImgRegister from '../assets/images/auth.png'
import useAuth from '../hooks/useAuth'
import '../assets/styles/pages/login-page.scss'
// features
import {FormRegister} from '../features'

const {Title} = Typography

function Register() {
  const {onRegister} = useAuth()
  return (
    <div className='login-page'>
      <Row gutter={8}>
        <Col span={12}>
          <Title level={2} className='text-center mt-5'>Register</Title>
          <Flex justify='center' align='center'>
            <div style={{width: 400}}>
              <FormRegister onFinish={onRegister} />
            </div>
          </Flex>
          <p className='text-center mt-5'>
            Already have account ? <Link to={'/login'} className='text-decoration-none fw-bold text-dark'>Login</Link>
          </p>
        </Col>
        <Col span={12} className='p-0' style={{height: '100vh'}}>
          <img className='img-login' src={ImgRegister} alt='register' />
        </Col>
      </Row>
    </div>
  )
}

export default Register