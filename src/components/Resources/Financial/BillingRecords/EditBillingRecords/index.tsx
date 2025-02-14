import { Button } from '../../../../_ui/Button'
import { ContainerMain } from '../../../containerMain'
import { useCurrentUser } from '../../../../../context/CurrentUser'

export const EditBillingRecords = () => {

    const { currentUser } = useCurrentUser()

    console.log(currentUser)

    return (
        <>
            <ContainerMain title="EditBillingRecords">
            <Button>Edit Billing Records</Button>
   

            </ContainerMain>
        </>
    )
}
