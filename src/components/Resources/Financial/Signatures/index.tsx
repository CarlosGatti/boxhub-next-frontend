import { Info, Signature, WrapperSignatures } from './styles'

import { Button } from '../../../_ui/Button'
import { ContainerMain } from '../../containerMain'
import { EditButton } from '../../../_ui/ButtonIcon/Edit'
import Image from 'next/image'
import {graphqlRequestClient} from '../../../../lib/graphql.request'
import moment from 'moment'
import { useGetSubscriptionsQuery } from '../../../../generated/graphql'

export const Signatures = () => {


  const { data: subscriptions } = useGetSubscriptionsQuery(graphqlRequestClient) 

  console.log(subscriptions)

  return (
    <ContainerMain title="My Subscriptions">

      <WrapperSignatures>

        {
          subscriptions?.getSubscriptions.map(subscription => (
            <Signature key={subscription.id}>
              <div>
                <Image
                  width={100}
                  height={100}
                  src={subscription.urlImage || '/images/placeholder.png'}
                  alt="assinatura"
                />
                <Info>
                  <h4>{subscription.provider}</h4>
                  <p>
                    {subscription.subscriptionPlans[0].name} - ${subscription.subscriptionPlans[0].amount} 
                  </p>
                  <span>Renews on {moment(subscription.subscriptionPlans[0].validTo).format('MMMM Do')}</span>
                </Info>
              </div>
              {/* <EditButton aria-label="editar assinatura" /> */}
            </Signature>
          ))
        }
      </WrapperSignatures>
    </ContainerMain>
  )
}
