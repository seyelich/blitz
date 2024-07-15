import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'

export default function AntdProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Geometria, sans-serif',
          colorPrimary: 'rgba(42, 148, 226, 1)',
          fontSizeHeading2: 35,
          fontWeightStrong: 900,
          lineHeightHeading2: 1.42,
        },
        components: {
          Typography: {
            titleMarginBottom: 20,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
