import styled from 'styled-components'

export const WrapperDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  padding-bottom: 2.5rem;
`

export const WrapperContract = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: #f4f3f6;
  border-radius: var(--border-radius-default);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
`

export const Contract = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    font-weight: 600;
    font-size: var(--font-size-md);
    color: #3a393b;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: var(--color-primary);
    padding: 9px;

    svg {
      font-size: 1.5rem;
      color: #fff;
    }
  }
`

export const PersonalDocuments = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`

export const Document = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 1rem 0.5rem;

  :not(:last-child) {
    border-bottom: 1px solid #c7c6c8;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`
export const IconDocument = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #878688;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #fff;
  font-weight: 600;
`
export const InfoDocument = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
`
export const About = styled.div`
  span {
    font-size: var(--font-size-sm);
  }
  p {
    color: #3a393b;
    background: #dddcdf;
    border: 0.5px solid #dddcdf;
    border-radius: var(--border-radius-input);
    padding: 9.5px 16px;
    cursor: not-allowed;
  }
`
export const TextCopy = styled.div`
  width: 100%;
  position: relative;
  button {
    position: absolute;
    top: 27px;
    right: 20px;
    background: transparent;
    border: none;
    padding: 1px 3px;

    color: var(--color-link);
    font-size: 1.5rem;
    transition: var(--transition);

    :hover {
      color: var(--color-link-hover);
    }

    :hover span {
      display: block;
    }

    span {
      display: none;
      position: absolute;
      left: -60px;
      bottom: 40px;
      font-size: var(--font-size-sm);
      color: #000;
      background: #fff;
      width: 120px;
      border-radius: var(--border-radius-default);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  }
`
