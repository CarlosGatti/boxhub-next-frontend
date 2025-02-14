import {
  ButtonDiv,
  DataPayment,
  TrashButton,
  ViewButton,
  Wrapper,
  WrapperFormOfPayment,
} from './styles'
import { FiEye, FiTrash2 } from 'react-icons/fi'

import { Button } from '../../_ui/Button'
import { ContainerMain } from '../containerMain'
import Image from 'next/image'

export const Payments = () => {
  const payment = [
    { image: '/image/visa_icon.png', number: '### ### 999' },
    { image: '/image/visa_icon.png', number: '### ### 888' },
    { image: '/image/visa_icon.png', number: '### ### 777' },
  ]
  return (
    <ContainerMain title="Cards">

      <Button>Add Card</Button>

      <Wrapper>
        {payment.map((value, index) => (
          <WrapperFormOfPayment key={index}>
            <DataPayment>
              <div>
                <Image
                  width={76}
                  height={24}
                  src={value.image}
                  alt="cartão visa"
                />
              </div>
              <span>{value.number}</span>
            </DataPayment>

            <ButtonDiv>
              <TrashButton aria-label="delete card">
                <FiTrash2 />
              </TrashButton>

              <ViewButton aria-label="view card">
                <FiEye />
              </ViewButton>
            </ButtonDiv>
          </WrapperFormOfPayment>
        ))}
      </Wrapper>

    </ContainerMain>
  )
}
