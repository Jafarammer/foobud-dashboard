import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import { Layout, Menu,Flex,Avatar,Typography,Dropdown,Button } from 'antd';
import { MenuItems } from '../utils/MenuItems';
import {Link} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import '../assets/styles/layouts/app-header.scss'
// component
import {CustomeModal} from '../components/common'

const { Header } = Layout;
const {Text,Title} = Typography


function AppHeader() {
  // hooks
  const {onLogout} = useAuth()
  // redux
  const { profileItems } = useSelector((state) => state.foodBud.profile);
  // useState
  const [confirmLogout,setConfirmLogout] = useState(false)
  // function
  const openConfirmLogout = () => {
    setConfirmLogout(true)
  }
  const closeConfirmLogout = () => {
    setConfirmLogout(false)
  }
  // data
  const items = [
    {
      key: '1',
      label: <Link to="/profile" className='text-decoration-none'><Text type='secondary'>Profile</Text></Link>
    },
    {
      key: '2',
      label: (
        <Text type='secondary' onClick={openConfirmLogout}>Logout</Text>
      ),
    },
  ]
  return (
    <Header className='app-header-container'>
      <Flex justify='space-between' align='center' className='w-100'>
        <Menu
          className='menu'
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={MenuItems}
        />
        <Title level={4} className='me-3'>{profileItems?.first_name} {profileItems?.last_name}</Title>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          trigger={['click']}
        >
          {/* <Avatar className='avatar' size={'large'}>
            {profileItems?.first_name.charAt(0)}{profileItems?.last_name.charAt(0)}
          </Avatar> */}
          <Avatar className='avatar' size={'large'} src={`http://localhost:8000/${profileItems.profile_img}`} />
        </Dropdown>
      </Flex>
      {/* modal logout */}
      <CustomeModal
        title={'Logout'}
        visible={confirmLogout}
        onCancel={closeConfirmLogout}
        width={400}
      >
        <Flex justify='center' align='center' vertical>
          <Text>Are you sure, you want to logout ?</Text>
          <Button onClick={onLogout} type='primary' className='px-5 mt-5'>Yes</Button>
        </Flex>
      </CustomeModal>
    </Header>
  )
}

export default AppHeader