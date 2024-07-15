import { Button, Carousel, Divider, Flex } from 'antd'
import { checkboxCards } from '../../utils/constants.ts'
import CheckboxCard from './ui/CheckboxCard'
import ru from 'assets/images/RUSSIA.png'
import notRu from 'assets/images/abroad.png'
import styles from './index.module.css'
import { useRef, useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { CarouselRef } from 'antd/es/carousel'

export default function TestBlock() {
  const [question, setQuestion] = useState(0)
  const ref = useRef<CarouselRef>(null)
  const onNextButtonCLick = () => {
    question < 5 && setQuestion(question + 1)
    ref.current?.next()
  }
  const onBackButtonCLick = () => {
    question > 0 && setQuestion(question - 1)
    ref.current?.prev()
  }
  return (
    <Flex vertical style={{ maxWidth: 1140 }}>
      <Flex vertical align="center" gap={20} style={{ marginBottom: 42 }}>
        <h2 className={styles.title}>Пройдити тест из 5 вопросов</h2>
        <p className={styles.subTitle}>
          Мы подберём 20 покупателей готовых купить вашу недвижимость в течение
          24 часов
        </p>
      </Flex>
      <Flex>
        <Flex
          vertical
          style={{
            boxSizing: 'border-box',
            padding: '40px 37px 15px 33px',
            border: '3px solid rgba(246, 246, 246, 1)',
            borderRight: 'none',
            width: '68%',
          }}
        >
          <div>
            <Carousel infinite={false} dots={false} ref={ref}>
              <div>
                <p className={styles.testTitle}>
                  Выберите местоположение объекта
                </p>
                <Flex gap={30} style={{ marginTop: 30 }}>
                  <div>
                    <img src={ru} alt="В России" />
                    <p className={styles.placeTitle}>В России</p>
                  </div>
                  <div>
                    <img src={notRu} alt="За границей" />
                    <p className={styles.placeTitle}>За границей</p>
                  </div>
                </Flex>
              </div>
              <p>Вопрос 2</p>
              <p>Вопрос 3</p>
              <p>Вопрос 4</p>
              <p>Вопрос 5</p>
            </Carousel>
          </div>
          <Divider />
          <Flex align="center" justify="space-between">
            <p>Вы ответили на: {question}/5 вопросов</p>
            <div>
              {question > 0 && question <= 4 && (
                <Button
                  type="link"
                  onClick={onBackButtonCLick}
                  icon={<ArrowLeftOutlined />}
                  style={{ fontSize: 16 }}
                >
                  Назад
                </Button>
              )}
              {question >= 4 ? (
                <Button
                  type="link"
                  onClick={onNextButtonCLick}
                  style={{ fontSize: 16 }}
                >
                  Завершить
                </Button>
              ) : (
                <Button
                  type="link"
                  onClick={onNextButtonCLick}
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  style={{ fontSize: 16 }}
                >
                  Продолжить
                </Button>
              )}
            </div>
          </Flex>
        </Flex>
        <Flex
          vertical
          gap={30}
          style={{
            boxSizing: 'border-box',
            padding: '37px 41px 28px 37px',
            border: '3px solid rgba(246, 246, 246, 1)',
          }}
        >
          {checkboxCards.map((el, i) => (
            <CheckboxCard key={i} text={el} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
