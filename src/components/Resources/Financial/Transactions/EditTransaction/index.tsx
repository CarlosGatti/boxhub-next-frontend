import { Button } from '../../../../_ui/Button'
import { ContainerMain } from '../../../containerMain'
import { useCurrentUser } from '../../../../../context/CurrentUser'

export const EditTransactions = () => {

    const { currentUser } = useCurrentUser()

    console.log(currentUser)

    return (
        <>
            <ContainerMain title="EditTransactions">
            <Button>Edit Transactions</Button>
   

            </ContainerMain>
        </>
    )
}
