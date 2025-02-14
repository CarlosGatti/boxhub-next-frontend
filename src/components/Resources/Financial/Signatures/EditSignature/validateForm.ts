import * as yup from 'yup'
export const editFormSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    amount: yup.number().required('Amount is required'),
    validFrom: yup.date().required('Valid from is required'),
    validTo: yup.date().required('Valid to is required'),
})
