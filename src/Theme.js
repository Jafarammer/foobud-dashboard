import React from 'react'
import { ConfigProvider } from "antd";

function Theme({children}) {
  return (
    <ConfigProvider
        theme={{
            token: {
                fontFamily: "Segoe UI",
            },
            components: {
                Button: {
                    colorPrimary: '#F3C623',
                    colorPrimaryHover: '#F3C623',
                    colorPrimaryActive: '#cca61d'
                },
                Input: {
                    colorPrimary: "#F5F7F8",
                    colorPrimaryHover: "#F5F7F8",
                },
                InputNumber: {
                    colorPrimary: "#F5F7F8",
                    colorPrimaryHover: "#F5F7F8",
                },
                Upload: {
                    colorPrimary: '#F3C623',
                    colorPrimaryHover: '#F3C623',
                },
                Tabs: {
                    colorPrimary: '#F3C623',
                    colorPrimaryHover: '#F3C623'
                },
                Pagination: {
                    colorPrimary: '#F3C623',
                    colorPrimaryHover: '#F3C623'
                }
            }
        }}
    >
        {children}
    </ConfigProvider>
  )
}

export default Theme