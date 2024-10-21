import React from 'react'
import {Modal} from 'antd'
import styled from 'styled-components'
import {CloseCircleFilled} from '@ant-design/icons'

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 16px !important;
    padding: 0 !important;
  }
  .ant-modal-header {
    border-top-left-radius: 16px !important;
    border-top-right-radius: 16px !important;
    background-color: #F5F7F8 !important;
    padding-left: 30px !important;
    padding-top: 15px !important;
    padding-bottom: 15px !important;
  }
`;

function CustomeModal({ title, open, onCancel, children,visible, ...rest }) {
  return (
    <StyledModal
      title={title}
      open={open}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      closeIcon={<CloseCircleFilled/>}
      {...rest}
    >
      <div className="px-3 py-2">
        {children}
      </div>
    </StyledModal>
  )
}

export default CustomeModal