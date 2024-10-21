import React,{useState} from 'react'
import {Avatar,Typography,Button,Form,Upload,Tooltip,Tabs} from 'antd'
import {EditFilled} from '@ant-design/icons'
import '../assets/styles/pages/profile-page.scss'
// component
import {CustomeModal} from '../components/common'
// features
import {FormProfile} from '../features'
// hooks
import useProfile from '../hooks/useProfile'

const {Title} = Typography
const {TabPane} = Tabs

function Profile() {
  // hooks
  const {onUpdateProfile,profileItems,setFormProfile,formProfile,onChangeCover} = useProfile()
  // useStae
  const [useFormProfile] = Form.useForm()
  const [initialValue,setInitialValue] = useState({})
  // function
  const openForm = () => {
    setFormProfile(true)
    const data = {
      firstName: profileItems.first_name,
      lastName: profileItems.last_name,
      email: profileItems.email,
      age: profileItems.age,
      address: profileItems.address,
    }
    setInitialValue(data)
  }
  const closeForm = () => {
    setFormProfile(false)
  }


  return (
    <div className='profile-container'>
      <div className='bg-photo'>
        <Avatar className='avatar' size={150} src={`http://localhost:8000/${profileItems.profile_img}`} />
        <Title level={2} className='title'>{profileItems.first_name} {profileItems.last_name}</Title>
        <Button onClick={openForm} type='primary' className='button'>Updata profile</Button>
          <Upload
            customRequest={onChangeCover}
            showUploadList={false}
            listType="picture"
            maxCount={1}
            className='upload'
          >
            <Tooltip title="Edit cover">
              <Button type="primary" shape="circle" icon={<EditFilled />} />
            </Tooltip>
          </Upload>
        <img src={`http://localhost:8000/${profileItems.cover_img}`} className='image' alt='bg-photo'/>
      </div>
      <Tabs defaultActiveKey='1' centered>
        <TabPane key='1' tab={<div className='tab-pane'>My recipe</div>}>
            <Title level={3}>MY RECIPE</Title>
        </TabPane>
        <TabPane key='2' tab={<div className='tab-pane'>Saved recipe</div>}>
            <Title level={3}>SAVED RECIPE</Title>
        </TabPane>
        <TabPane key='3' tab={<div className='tab-pane'>Liked recipe</div>}>
            <Title level={3}>LIKED RECIPE</Title>
        </TabPane>
      </Tabs>
      {/* form  update profile */}
      <CustomeModal
        title='Update profile'
        visible={formProfile}
        onCancel={() => {
          closeForm()
          useFormProfile.resetFields()
        }}
      >
        <FormProfile 
          onFinish={(value) => {
            onUpdateProfile(value)
            useFormProfile.resetFields()
          }} 
          form={useFormProfile} 
          initialValues={initialValue} 
        />
      </CustomeModal>
    </div>
  )
}

export default Profile