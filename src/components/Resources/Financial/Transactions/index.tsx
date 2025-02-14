import { Button } from '../../../_ui/Button'
import { ContainerMain } from '../../containerMain'
import { useCurrentUser } from '../../../../context/CurrentUser'

export const Transactions = () => {

    const { currentUser } = useCurrentUser()

    console.log(currentUser)

    return (
        <>
            <ContainerMain title="Transactions">
            <Button>Transactions</Button>
   

            </ContainerMain>
        </>
    )
}
