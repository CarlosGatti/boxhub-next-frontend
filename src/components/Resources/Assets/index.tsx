import {
    DataPayment,
    ViewButton,
    Wrapper,
    WrapperFormOfPayment,
} from './styles'

import { Button } from '../../_ui/Button'
import { ContainerMain } from '../containerMain'
import { GrView } from 'react-icons/gr'
import Image from 'next/image'
import moment from 'moment'
import { useCurrentUser } from '../../../context/CurrentUser'

export const Assets = () => {

    const { currentUser } = useCurrentUser()

    const payment = [
        { image: '/image/visa_icon.png', number: '### ### 999' },
        { image: '/image/visa_icon.png', number: '### ### 888' },
        { image: '/image/visa_icon.png', number: '### ### 777' },
    ]

    return (
        <>
            <ContainerMain title="Assets">

            <Button>Add Asset</Button>
                <Wrapper>
                    {currentUser?.assetTransactions?.map((value, index) => (
                        <WrapperFormOfPayment key={index}>
                            <DataPayment>
                                {/* <div>
                                    <Image
                                        width={76}
                                        height={24}
                                        src={"/image/visa_icon.png"}
                                        alt="cartão visa"
                                    />
                                </div> */}
                                <span>{value.assetSymbol}</span>

                                <span>{value.quantity}</span>

                                <span>{value.price}</span>

                                <span>${value.price * value.quantity}</span>


                                <span>{moment(value.transactionDate).format('DD/MM/YYYY')}</span>

                            </DataPayment>
                            <ViewButton aria-label="excluir forma de pagamento">
                                <GrView />
                            </ViewButton>
                        </WrapperFormOfPayment>
                    ))}
                </Wrapper>
           

            </ContainerMain>
        </>
    )
}
