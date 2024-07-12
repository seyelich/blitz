import { Flex } from 'antd'
import styles from './index.module.css'

type TInfoCard = {
  number: number
  text: string
}

export default function InfoCard({ number, text }: TInfoCard) {
  return (
    <Flex align="center" gap={20}>
      <p className={styles.num}>{number}</p>
      <p className={styles.text}>{text}</p>
    </Flex>
  )
}
