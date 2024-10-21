import React from 'react'
import {Button,Card,Avatar,Pagination} from 'antd'
import {PlusCircleFilled,DeleteFilled,EyeFilled,EditFilled} from '@ant-design/icons'
import ImgAvatar from '../../assets/images/avatar-default.jpg'
import ImgProduct from '../../assets/images/bg-profile.png'

const {Meta} = Card

function MyRecipeContent() {
    const data = [1,2,3,4,5,6,7,8]
  return (
    <div className='p-2'>
        <Button type='primary' icon={<PlusCircleFilled/>}>New recipe</Button>
        <div className='grid-container mt-3'>
            {
                data.map((item) => (
                    <Card
                        key={item}
                        cover={<img src={ImgProduct} alt='product' />}
                        actions={[
                            <EyeFilled  key="view" />,
                            <EditFilled key="edit" />,
                            <DeleteFilled key="delete" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={ImgAvatar} />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                ))
            }
        </div>
        <Pagination className='my-3' align="center" defaultCurrent={1} total={50} />
    </div>
  )
}

export default MyRecipeContent