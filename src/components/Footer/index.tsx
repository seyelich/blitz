import { Button, Flex } from 'antd'
import Logo from '../Logo'
import styles from './index.module.css'
import Link from 'antd/es/typography/Link'

export default function Footer() {
  return (
    <Flex
      justify="center"
      style={{
        background: 'rgba(83, 88, 96, 1)',
        padding: '30px 0 40px 0',
        color: 'white',
      }}
    >
      <Flex align="center" justify="space-between" style={{ width: 1140 }}>
        <Flex vertical gap={20} style={{ maxWidth: 322 }}>
          <p className={styles.desc}>
            Время работы: Пн-Пт: 8:00-23:00, Сб-Вс: 9:00-21:00
          </p>
          <p className={styles.address}>
            Пресненская набережная, дом 12 Башня "Федерация" Восток, 31 этаж,
            Офис Р
          </p>
          <p className={styles.desc}>ОГРН: 1187746683464 ИНН: 7703462548</p>
        </Flex>
        <Logo theme="dark" />
        <Flex vertical align="center" gap={7}>
          <p className={styles.numText}>+7 (495) 199-19-99</p>
          <Link
            style={{
              fontSize: 22,
              lineHeight: 1,
              marginBottom: 16,
              color: 'white',
              textDecoration: 'underline',
              verticalAlign: 'top',
            }}
          >
            moscow@blitz.estate
          </Link>
          <Button style={{ width: '100%', height: 55, fontWeight: 'bold' }}>
            Заказать звонок
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
