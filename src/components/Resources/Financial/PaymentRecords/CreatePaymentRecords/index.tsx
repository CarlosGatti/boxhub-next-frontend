import { Button } from '../../../../_ui/Button'
import { ContainerMain } from '../../../containerMain'
import { useCurrentUser } from '../../../../../context/CurrentUser'

export const CreatePaymentRecords = () => {

    const { currentUser } = useCurrentUser()

    console.log(currentUser)

    return (
        <>
            <ContainerMain title="CreatePaymentRecords">
            <Button>Create Payment Records</Button>
   

            </ContainerMain>
        </>
    )
}
