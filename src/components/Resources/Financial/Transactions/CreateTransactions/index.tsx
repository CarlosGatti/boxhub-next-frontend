import { Button } from '../../../../_ui/Button'
import { ContainerMain } from '../../../containerMain'
import { useCurrentUser } from '../../../../../context/CurrentUser'

export const CreateTransactions = () => {

    const { currentUser } = useCurrentUser()

    console.log(currentUser)

    return (
        <>
            <ContainerMain title="CreateTransactions">
            <Button>Create Transactions</Button>
   

            </ContainerMain>
        </>
    )
}
