import { Button, Flex } from 'antd'
import { useState } from 'react'
import { MenuOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import Logo from '../Logo'

export default function Header() {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Flex justify="center" style={{ margin: '30px auto' }}>
      <Flex align="center" justify="space-between" style={{ width: 1140 }}>
        <Flex style={{ padding: 10 }}>
          <Button type="text" onClick={toggleCollapsed}>
            <MenuOutlined />
            <span className={styles.menu}>Меню</span>
          </Button>
        </Flex>
        <div style={{ paddingLeft: 250 }}>
          <Logo />
        </div>
        <Flex vertical>
          <p className={styles.numText}>+7 (495) 199-19-99</p>
          <Button
            style={{
              height: 55,
              fontSize: 16,
              background: 'none',
              borderColor: 'rgba(42, 148, 226, 1)',
            }}
          >
            <p style={{ fontWeight: 'bold' }}>Заказать звонок</p>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
