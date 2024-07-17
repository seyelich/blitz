import { Button, Flex, Segmented, Typography } from 'antd'
import { useState } from 'react'
import { apartmentCards } from '../../utils/constants.ts'
import styles from './index.module.css'
import { ArrowDownOutlined } from '@ant-design/icons'
import ApartmentCard from './ui/ApartmentCard'

export default function ApartmentsBlock() {
  const [apartments, setApartments] = useState(apartmentCards)
  const [filterValue, setFilterValue] = useState('all')
  const filterCards = (value: string) => {
    const min = +value.split('-')[0]
    const max = +value.split('-')[1]
    return apartmentCards.filter((el) => {
      const price = parseInt(el.priceAll.replace(' ', '')) / 1000
      return max ? price >= min && price <= max : price >= min
    })
  }
  const onTabChange = (value: string) => {
    setFilterValue(value)
    if (value === 'all') setApartments(apartmentCards)
    else {
      const newAp = filterCards(value)
      setApartments(newAp)
    }
  }
  const getMore = () => {
    if (filterValue === 'all') setApartments(apartments.concat(apartmentCards))
    else {
      const newAp = filterCards(filterValue)
      setApartments(apartments.concat(newAp))
    }
  }

  const segmentedOptions = [
    {
      label: (
        <div className={styles.segmentedItem}>
          <p>Показать все</p>
        </div>
      ),
      value: 'all',
    },
    {
      label: (
        <div className={styles.segmentedItem}>
          <p>От 20-30 млн</p>
        </div>
      ),
      value: '20-30',
    },
    {
      label: (
        <div className={styles.segmentedItem}>
          <p>От 30-50 млн</p>
        </div>
      ),
      value: '30-50',
    },
    {
      label: (
        <div className={styles.segmentedItem}>
          <p>От 50-100 млн</p>
        </div>
      ),
      value: '50-100',
    },
    {
      label: (
        <div className={styles.segmentedItem}>
          <p>Более 100 млн</p>
        </div>
      ),
      value: '100',
    },
  ]

  return (
    <Flex vertical align="center" style={{ maxWidth: 1140 }}>
      <Typography.Title level={2}>
        Выберите апартаменты в Москва-Сити
      </Typography.Title>
      <p className={styles.subTitle}>
        Мы включили в наш каталог все апартаменты доступные для покупки в
        Москва-Сити
      </p>
      <Segmented<string>
        size="large"
        block
        options={segmentedOptions}
        onChange={onTabChange}
        style={{
          marginTop: 40,
          border: '2px solid rgba(246, 246, 246, 1)',
          width: 1140,
        }}
      />
      <Flex wrap gap={30} align="center" style={{ marginTop: 30, width: 1140 }}>
        {apartments.map((el, i) => (
          <ApartmentCard key={i} el={el} />
        ))}
        <Button
          icon={<ArrowDownOutlined />}
          iconPosition="end"
          style={{
            background: 'rgba(246, 246, 246, .5)',
            width: '100%',
            height: 60,
            border: 'none',
            fontSize: 16,
          }}
          onClick={getMore}
        >
          Показать еще
        </Button>
      </Flex>
    </Flex>
  )
}
