import { Button } from '../../_ui/Button'
import { ContainerMain } from '../containerMain'
import { useCurrentUser } from '../../../context/CurrentUser'

export const Financial = () => {

    const { currentUser } = useCurrentUser()

    console.log(currentUser)

    return (
        <>
            <ContainerMain title="Transactions">
            <Button>xxx</Button>
   

            </ContainerMain>
        </>
    )
}
