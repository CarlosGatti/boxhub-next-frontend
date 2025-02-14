import { Container, WrapperIdentityOwner } from './style'

import { IdentityCurrentUser } from '../../../components/_ui/SideBar/IdentityCurrentUser'

export const SideBarFeed = () => {
  return (
    <Container>
      <WrapperIdentityOwner>
        <IdentityCurrentUser />
      </WrapperIdentityOwner>
      {/*   <GroupsOwner>
        <>
          <Title>Meus grupos</Title>
          {user.groups.length > 0 ? (
            <Empty>
              <p>Você ainda não faz parte de uma comunidade. Escolha uma:</p>
              <Button label="Escolha uma Comunidade" />
            </Empty>
          ) : (
            user.groups.map((value: any, index: number) => (
              <Card key={index}>
                <Avatar
                  alt={value.title}
                  src="https://images.unsplash.com/photo-1606022875614-29303faea9fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                />
                <CardBody>
                  <strong>{value.title}</strong>
                  <span>{value.menbers} membros</span>
                </CardBody>
              </Card>
            ))
          )}
        </>
      </GroupsOwner> */}
      {/*   <ContactsOwner>
        <Title>Conexões</Title>
        {user.contacts.length === 0 ? (
          <Empty>
            <p>Você ainda não possui conexões. Veja opções: </p>
            <Button label="Ver opções de conexões" />
          </Empty>
        ) : (
          user.contacts.map((value: any, index: number) => (
            <Card key={index}>
              <Avatar
                alt={value.name}
                src="https://images.unsplash.com/photo-1606022875614-29303faea9fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
              />
              <CardBody>
                <strong>{value.name}</strong>
              </CardBody>
            </Card>
          ))
        )}
      </ContactsOwner> */}
    </Container>
  )
}
