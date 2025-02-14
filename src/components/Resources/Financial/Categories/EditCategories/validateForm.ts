import * as yup from 'yup'
export const editFormSchema = yup.object().shape({
  name: yup.string().required('Categories is required'),
  type: yup.string().required('Transaction Type is required'),
})
