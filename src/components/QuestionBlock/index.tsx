import { Button, Flex, Typography } from 'antd'
import dir from 'assets/images/dir.png'
import styles from './index.module.css'

export default function QuestionBlock() {
  return (
    <div className={styles.container}>
      <Flex
        justify="center"
        style={{ maxWidth: 1140, margin: '0 auto' }}
        gap={30}
      >
        <Flex vertical style={{ width: '60%' }}>
          <Typography.Title level={2}>
            Руководитель агентства
            <br /> Blitz Estate
          </Typography.Title>
          <Flex vertical gap={20}>
            <p className={styles.dir}>Георгий Мебония</p>
            <p className={styles.text}>
              {' '}
              Вице-президент по проектам в ММДЦ «Москва-Сити», Генеральный
              директор компании Blitz Estate в России.
            </p>
            <p className={styles.text}>
              Имея европейский опыт работы и показывая верность своему делу
              являемся стратегическим партнером ММДЦ «Москва-Сити с 2013 года на
              эксклюзивной реализации объектов приватных к продаже.
            </p>
            <p>
              Благодаря кропотливому и теплому отношению нам удается быстро и
              эффективно оказывать нашим клиентам услуги высочайшего уровня в
              сфере недвижимости.
            </p>
            <Button
              type="primary"
              style={{ fontSize: 20, height: 60, width: 270 }}
            >
              Задать вопрос
            </Button>
          </Flex>
        </Flex>
        <img src={dir} alt="Директор" />
      </Flex>
    </div>
  )
}
