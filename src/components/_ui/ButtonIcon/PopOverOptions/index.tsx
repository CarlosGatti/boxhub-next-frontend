import { BtnOptions, WrapperBtn } from './styles'
import {
  ButtonPopOver,
  ContentPopOver,
  PopOver,
} from '../../../../components/_ui/PopOver'

import { BsThreeDots } from 'react-icons/bs'

interface PopOverOptionsProps {
  children: JSX.Element | JSX.Element[]
  typeButton?: 'primary' | 'secondary'
}

export const PopOverOptions = ({
  typeButton = 'primary',
  children,
}: PopOverOptionsProps) => {
  return (
    <PopOver>
      <ButtonPopOver>
        <WrapperBtn>
          <BtnOptions
            className={`${typeButton}`}
            aria-label="opções"
            title="opções"
          >
            {/* <BsThreeDotsVertical /> */}
            <BsThreeDots />
          </BtnOptions>
        </WrapperBtn>
      </ButtonPopOver>
      <ContentPopOver>{children}</ContentPopOver>
    </PopOver>
  )
}
