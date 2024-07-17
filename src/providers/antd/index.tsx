import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'
import ru from 'antd/locale/ru_RU'

export default function AntdProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      locale={ru}
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
          Segmented: {
            itemSelectedBg: 'rgba(42, 148, 226, 1)',
            itemSelectedColor: 'white',
            itemColor: 'rgba(0, 0, 0, 1)',
            itemHoverBg: 'rgba(246, 246, 246, 1)',
            trackBg: 'rgba(255, 255, 255, 1)',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
