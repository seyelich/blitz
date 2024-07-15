import { Flex } from 'antd'
import { CheckSquareOutlined } from '@ant-design/icons'

export default function CheckboxCard({ text }: { text: string }) {
  return (
    <Flex
      style={{
        fontSize: 16,
        lineHeight: '27px',
      }}
      gap={24}
    >
      <CheckSquareOutlined
        style={{ fontSize: 39, color: 'rgba(42, 148, 226, 1)' }}
      />
      <p>{text}</p>
    </Flex>
  )
}
