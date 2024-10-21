import React from 'react'
import {Form,Input,Button} from 'antd'
import {EyeFilled,EyeInvisibleFilled} from '@ant-design/icons'
// hooks
import useAuth from '../../hooks/useAuth'

function FormLogin({onFinish}) {
    const {isLoading} = useAuth()
  return (
    <Form layout='vertical' onFinish={onFinish}>
        <Form.Item 
            label={<b>Email</b>}
            name='email'
            required={false}
            rules={[
                {
                type: 'email',
                message: 'Email is required field!',
                required: true
                }
            ]}
        >
            <Input size='large'/>
        </Form.Item>
        <Form.Item 
            label={<b>Password</b>}
            name="password"
            required={false}
            rules={[
                {
                type: "string",
                message: "Password is required field!",
                required: true,
                },
            ]}
        >
            <Input.Password iconRender={(visible) => (visible ? <EyeFilled /> : <EyeInvisibleFilled />)} size='large'/>
        </Form.Item>
        <Button htmlType='submit' type='primary' size='large' block className='mt-3'>
            {isLoading ? (
                <span className="spinner-border spinner-border-sm" />
            ) : (
                "LOGIN"
            )}
        </Button>
    </Form>
  )
}

export default FormLogin