import Header from '../Header'
import Footer from '../Footer'
import { Flex } from 'antd'
import AntdProvider from '../../providers/antd'
import PreviewBlock from '../PreviewBlock'
import styles from './index.module.css'

function App() {
  return (
    <AntdProvider>
      <Flex vertical style={{ height: '100%' }}>
        <div className={styles.previewBlock}>
          <Header />
          <PreviewBlock />
        </div>
        <div style={{ flex: 1 }}></div>
        <Footer />
      </Flex>
    </AntdProvider>
  )
}

export default App
