import { Divider, SideBarRight, Title, Wrapper } from './styles'

import { useCallback } from 'react'

export const SideBarFinancial = () => {
  const handleExpandText = useCallback((e: any) => {
    if (e.target.parentElement.classList.value === 'text-expanded') {
      return e.target.parentElement.classList.remove('text-expanded')
    }
  }, [])
  return (
    <SideBarRight title="Warnings">
      <Wrapper>
        <Title>Lorem ipsum dolor</Title>
        <div>
          <div>
            Nunc sagittis ut dui laoreet condimentum. Nullam porttitor suscipit
            dolor, non hendrerit leo rhoncus sed. Mauris purus orci, pretium
            eget placerat in, aliquet non dolor Nunc sagittis ut dui laoreet
            condimentum ullam porttitor suscipit dolor, non hendrerit leo
            rhoncus sed. Mauris purus orci, pretium eget placerat in, aliquet
            non dolor
          </div>
          <button
            onClick={(e) => handleExpandText(e)}
            aria-label="ler texto"
          ></button>
        </div>
      </Wrapper>
      <Divider />
      <Wrapper>
        <Title>Lorem ipsum dolor</Title>
        <div>
          <div>
            Nunc sagittis ut dui laoreet condimentum. Nullam porttitor suscipit
            dolor, non hendrerit leo rhoncus sed. Mauris purus orci, pretium
            eget placerat in, aliquet non dolor Nunc sagittis ut dui laoreet
            condimentum ullam porttitor suscipit dolor, non hendrerit leo
            rhoncus sed. Mauris purus orci, pretium eget placerat in, aliquet
            non dolor
          </div>
          <button
            onClick={(e) => handleExpandText(e)}
            aria-label="ler texto"
          ></button>
        </div>
      </Wrapper>
      <Divider />
      <Wrapper>
        <Title>Lorem ipsum dolor</Title>
        <div>
          <div>
            Nunc sagittis ut dui laoreet condimentum. Nullam porttitor suscipit
            dolor, non hendrerit leo rhoncus sed. Mauris purus orci, pretium
            eget placerat in, aliquet non dolor Nunc sagittis ut dui laoreet
            condimentum ullam porttitor suscipit dolor, non hendrerit leo
            rhoncus sed. Mauris purus orci, pretium eget placerat in, aliquet
            non dolor
          </div>
          <button
            onClick={(e) => handleExpandText(e)}
            aria-label="ler texto"
          ></button>
        </div>
      </Wrapper>
    </SideBarRight>
  )
}
