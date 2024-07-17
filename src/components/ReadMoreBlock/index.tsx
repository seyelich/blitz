import { Button, Flex, Image, Typography } from 'antd'
import ph1 from 'assets/images/photo1.png'
import ph2 from 'assets/images/photo2.jfif'
import ph3 from 'assets/images/photo3.jfif'
import ph4 from 'assets/images/photo4.jfif'
import ph5 from 'assets/images/photo5.jfif'
import styles from './index.module.css'

export default function ReadMoreBlock() {
  return (
    <div className={styles.container}>
      <Flex
        gap={30}
        justify="center"
        style={{ maxWidth: 1140, margin: '0 auto' }}
      >
        <Flex vertical style={{ width: '50%' }}>
          <Typography.Title level={2}>
            Blitz Estate - на рынке недвижимости с 2008 года
          </Typography.Title>
          <p className={styles.text}>
            Blitz Estate – международная компания по управлению недвижимостью и
            финансами. Основана в 2008 г. в Австрии. На сегодня представлена в
            Англии, Испании, Латвии, ОАЭ, Австрии и России, кроме того имеет
            партнерскую сеть более чем в десяти странах мира.
          </p>
          <p className={styles.text}>
            Мы предоставляем услуги полного цикла по приобретению и продаже
            недвижимости и управлению активами, предоставляя клиентам неизменно
            высокое качество сервиса. Наш подход позволяет оптимизировать
            инвестиционный портфель, диверсифицировать риски и обеспечить полную
            конфиденциальность сделки.
          </p>
          <Button
            type="primary"
            style={{ fontSize: 20, height: 60, width: 270 }}
          >
            Узнать больше
          </Button>
        </Flex>
        <div>
          <Image src={ph1} style={{ marginBottom: 10 }} />
          <Flex gap={10}>
            <Image width={130} height={106} src={ph2} />
            <Image width={130} height={106} src={ph3} />
            <Image width={130} height={106} src={ph4} />
            <Image width={130} height={106} src={ph5} />
          </Flex>
        </div>
      </Flex>
    </div>
  )
}
