import { Flex } from 'antd'
import logo from 'assets/images/logo.svg'
import logoDark from 'assets/images/logo-dark.svg'
import styles from './index.module.scss'

type TLogoProps = {
  theme?: 'light' | 'dark'
}

export default function Logo({ theme }: TLogoProps) {
  return (
    <Flex gap={30} align="center">
      <img src={theme === 'dark' ? logoDark : logo} alt="Логотип" />
      <p
        className={`${styles.logoText} ${theme === 'dark' && styles.logoText_dark}`}
      >
        Продажа недвижимости в Москва-Сити
      </p>
    </Flex>
  )
}
