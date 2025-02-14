import { Button } from '../../../../_ui/Button'
import { ContainerMain } from '../../../containerMain'
import { useCurrentUser } from '../../../../../context/CurrentUser'

export const CreateBillingRecords = () => {

    const { currentUser } = useCurrentUser()

    console.log(currentUser)

    return (
        <>
            <ContainerMain title="CreateBillingRecords">
            <Button>Create Billing Records</Button>
   

            </ContainerMain>
        </>
    )
}
