import { Card, Flex } from 'antd'
import styles from './index.module.css'
import { apartmentCards } from '../../../../utils/constants.ts'

export default function ApartmentCard({
  el,
}: {
  el: (typeof apartmentCards)[0]
}) {
  return (
    <Card
      cover={<img className={styles.img} src={el.img} alt="Апартаменты" />}
      hoverable
      style={{ width: 555 }}
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      <div style={{ margin: 30 }}>
        <Card.Meta title={<p className={styles.title}>{el.title}</p>} />
        <p
          className={`${styles.text} ${styles.textGrey}`}
          style={{ marginTop: 10 }}
        >
          Лот № {el.lotNum}
        </p>
        <Flex justify="space-between">
          <Flex vertical>
            <p className={styles.priceAll}>{el.priceAll} ₽</p>
            <p className={`${styles.text} ${styles.textGrey}`}>
              {el.pricePerMetre} ₽ за м²
            </p>
          </Flex>
          <Flex vertical gap={10} justify="flex-end">
            <p className={styles.text}>Площадь {el.area} м²</p>
            <p className={styles.text}>Этаж {el.floor}</p>
          </Flex>
        </Flex>
      </div>
      <button className={styles.btn}>Назначить просмотр</button>
    </Card>
  )
}
