import Image from 'next/image'
import { Title } from './styles'

interface EmptyCommunityProps {
  title: string
}

export const EmptyCommunity = ({ title }: EmptyCommunityProps) => {
  return (
    <>
      <Title
        style={{
          margin: '0 auto',
          fontWeight: '400',
          fontSize: '16px',
        }}
      >
        {title}
      </Title>
      <Image
        style={{
          margin: '0 auto',
          marginTop: '40px',
        }}
        src="/image/chatting.png"
        alt="No suggestions of communities"
        width={300}
        height={300}
      />
    </>
  )
}
