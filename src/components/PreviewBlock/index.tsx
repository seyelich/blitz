import { Button, Flex } from 'antd'
import { infoCards } from '../../utils/constants.ts'
import InfoCard from './ui/InfoCard'
import bucket from 'assets/images/bucket.svg'
import styles from './index.module.css'

export default function PreviewBlock() {
  return (
    <Flex
      vertical
      gap={28}
      style={{ width: 1140, margin: '0 auto', fontWeight: 500 }}
    >
      <h2 className={styles.title}>
        АГЕНСТВО
        <br />С МЕЖДУНАРОДНЫМ ИМЕНЕМ BLITZ ESTATE
      </h2>
      <p className={styles.subTitle}>
        Поможем продать, купить и арендовать недвижимость в Москве, районе Сити
        и области
      </p>
      <Flex gap={50} style={{ width: 824 }}>
        {infoCards.map((el) => (
          <InfoCard number={el.num} text={el.text} />
        ))}
      </Flex>
      <Flex align="center" gap={20}>
        <img src={bucket} alt="Ведро" />
        <p className={styles.test}>
          Пройди тест и получи в подарок бутылку шампанского{' '}
          <span className={styles.bottleName}>Veuve Clicquot</span>
        </p>
      </Flex>
      <Button
        type="primary"
        style={{
          width: 360,
          height: 70,
          marginBottom: 70,
          fontSize: 20,
          lineHeight: '30px',
        }}
      >
        Подобрать недвижимость
      </Button>
    </Flex>
  )
}
