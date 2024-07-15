import Header from '../Header'
import Footer from '../Footer'
import { Flex } from 'antd'
import AntdProvider from '../../providers/antd'
import PreviewBlock from '../PreviewBlock'
import styles from './index.module.css'
import TestBlock from '../TestBlock'

function App() {
  return (
    <AntdProvider>
      <Flex vertical style={{ height: '100%' }}>
        <div className={styles.previewBlock}>
          <Header />
          <PreviewBlock />
        </div>
        <Flex
          vertical
          align="center"
          gap={60}
          style={{ flex: 1, margin: '60px 0 50px 0' }}
        >
          <TestBlock />
        </Flex>
        <Footer />
      </Flex>
    </AntdProvider>
  )
}

export default App
