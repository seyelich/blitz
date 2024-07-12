import Header from './components/Header'
import Footer from './components/Footer'
import { Flex } from 'antd'
import AntdProvider from './providers/antd'

function App() {
  return (
    <AntdProvider>
      <Flex vertical style={{ height: '100%' }}>
        <Header />
        <div style={{ flex: 1 }}></div>
        <Footer />
      </Flex>
    </AntdProvider>
  )
}

export default App
