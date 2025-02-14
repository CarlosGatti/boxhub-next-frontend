import * as yup from 'yup'
export const editFormSchema = yup.object().shape({
  firstName: yup.string().required('Nome obrigatório'),
  lastName: yup.string().required('Sobrenome obrigatório'),
  nickname: yup.string().required('Nome de usuário obrigatório'),
  email: yup.string().email('Digite um e-mail válido'),
  githubUrl: yup.string(),
  linkedinUrl: yup.string(),
  twitterUrl: yup.string(),
})
