import React from 'react'
import {Form,Input,Button,Row,Col,InputNumber,Upload} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import useProfile from '../../hooks/useProfile'
import '../../assets/styles/pages/profile-page.scss'
function FormProfile({form,initialValues,onFinish}) {
    const {isLoading} = useProfile()
  return (
    <Form layout='vertical' form={form} initialValues={initialValues} onFinish={onFinish}>
        <Row gutter={8}>
            <Col span={12}>
                <Form.Item 
                    name='firstName'
                    required={false}
                    rules={[
                        {required: true,message: 'First name is required field!'}
                    ]}
                    label={<b>First name</b>} 
                >
                    <Input/>
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item 
                    name='lastName'
                    required={false}
                    rules={[
                        {required: true,message: 'Last name is required field!'}
                    ]}
                    label={<b>Last name</b>} 
                >
                    <Input/>
                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item 
                    name='age'
                    required={false}
                    rules={[
                        {required: true,message: 'Age is required field!'}
                    ]}
                    label={<b>Age</b>}
                >
                    <InputNumber min={1} className='w-100' />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item 
                    name='address'
                    required={false}
                    rules={[
                        {required: true,message: 'Address is required field!'}
                    ]}
                    label={<b>Address</b>} 
                >
                    <Input/>
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item label={<b>Update photo profile</b>} name='photo'>
                    <Upload
                        listType="picture-circle"
                        maxCount={1}
                        beforeUpload={() => false}
                        showUploadList={{
                            showPreviewIcon: false,
                            showRemoveIcon: true,
                        }}
                    >
                        <button className='btn-upload' type="button">
                            <PlusOutlined />
                            <div className='btn-upload-title'>
                                Upload
                            </div>
                        </button>
                    </Upload>
                </Form.Item>
            </Col>
        </Row>
        <Button type='primary' htmlType='submit' block className='my-3'>
        {isLoading ? (
            <span className="spinner-border spinner-border-sm" />
        ) : (
            "Update"
        )}
        </Button>
    </Form>
  )
}

export default FormProfile