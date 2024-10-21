import React from 'react'
import {Form,Input,Button,Row,Col,InputNumber} from 'antd'
import {EyeFilled,EyeInvisibleFilled} from '@ant-design/icons'
// hooks
import useAuth from '../../hooks/useAuth'

const {TextArea} = Input

function FormRegister({onFinish}) {
    const {isLoading} = useAuth()
    const [useFormRegister] = Form.useForm()
  return (
    <Form layout='vertical' onFinish={onFinish} form={useFormRegister}>
        <Row gutter={8}>
            <Col span={12}>
                <Form.Item
                    name='firstName'
                    label={<b>First name</b>}
                    required={false}
                    rules={[
                        {
                            required: true,
                            message: 'First name is required field!',
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    name='lastName'
                    label={<b>Last name</b>}
                    required={false}
                    rules={[
                        {
                            required: true,
                            message: 'Last name is required field!',
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item
                    name='email'
                    label={<b>Email</b>}
                    required={false}
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Eamil is required field!',
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    name='age'
                    label={<b>Age</b>}
                    required={false}
                    rules={[
                        {
                            required: true,
                            message: 'Age is required field!',
                        }
                    ]}
                >
                    <InputNumber min={1} minLength={2} className='w-100' />
                </Form.Item>
            </Col>

            <Col span={24}>
                <Form.Item
                    name='address'
                    label={<b>Address</b>}
                    required={false}
                    rules={[
                        {
                            required: true,
                            message: 'Address is required field!',
                        }
                    ]}
                >
                    <TextArea rows={4} style={{resize: 'none'}} />
                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item 
                    label={<b>Password</b>}
                    name="password"
                    required={false}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password iconRender={(visible) => (visible ? <EyeFilled /> : <EyeInvisibleFilled />)}/>
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item 
                    label={<b>Confirm password</b>}
                    name="confirmPassword"
                    required={false}
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password iconRender={(visible) => (visible ? <EyeFilled /> : <EyeInvisibleFilled />)}/>
                </Form.Item>
            </Col>
        </Row>
        <Button type='primary' htmlType='submit' block>
            {isLoading ? (
                <span className="spinner-border spinner-border-sm" />
            ) : (
                "REGISTER"
            )}
        </Button>
    </Form>
  )
}

export default FormRegister