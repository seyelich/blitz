import { Flex, Typography } from 'antd'
import { directionCards } from '../../utils/constants.ts'
import { Card } from 'antd'
import styles from './index.module.css'

export default function DirectionsBlock() {
  return (
    <Flex vertical align="center" style={{ maxWidth: 1140 }}>
      <Typography.Title level={2}>
        Направления нашего агентства
      </Typography.Title>
      <Flex wrap={true} gap={30} justify="center">
        {directionCards.map((el) => (
          <Card
            title={el.title}
            styles={{
              header: { border: 'none', fontSize: 22 },
              title: { whiteSpace: 'wrap' },
            }}
            style={{ borderColor: 'rgba(42, 148, 226, .5)', width: 555 }}
          >
            <Flex justify="space-between">
              <Flex vertical>
                <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                  Руководитель:
                </Typography.Text>
                <p className={styles.lead}>{el.lead}</p>
                <p className={styles.tel}>{el.tel}</p>
                <Typography.Text underline>{el.email}</Typography.Text>
              </Flex>
              <img src={el.icon} alt="Иконка" />
            </Flex>
          </Card>
        ))}
      </Flex>
    </Flex>
  )
}
