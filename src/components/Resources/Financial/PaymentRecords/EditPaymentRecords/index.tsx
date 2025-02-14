import { Button } from '../../../../_ui/Button'
import { ContainerMain } from '../../../containerMain'
import { useCurrentUser } from '../../../../../context/CurrentUser'

export const EditPaymentRecords = () => {

    const { currentUser } = useCurrentUser()

    console.log(currentUser)

    return (
        <>
            <ContainerMain title="EditPaymentRecords">
            <Button>Edit Payment Records</Button>
   

            </ContainerMain>
        </>
    )
}
