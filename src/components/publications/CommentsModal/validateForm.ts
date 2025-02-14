import * as yup from 'yup'
export const signInFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  lastname: yup.string().required('Sobre nome obrigatório'),
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  cellphone: yup.string().required('Telefone obrigatório'),
  cpf: yup.string(),
  birthdata: yup.string(),
  gender: yup.object().shape({
    value: yup.string().required('label is required'),
  }),
  nickname: yup.string(),
  profession: yup.string(),

  address: yup.string(),
  complement: yup.string(),
  region: yup.string(),
  cep: yup.string(),
  city: yup.string(),
  state: yup.string(),
  skills: yup.string(),
  preferences: yup.string(),
  facebook: yup.string(),
  twitter: yup.string(),
  instagram: yup.string(),
  linkedin: yup.string(),
  about: yup.string(),
})
