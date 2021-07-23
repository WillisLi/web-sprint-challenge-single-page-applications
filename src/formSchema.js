import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['monster', 'large', 'medium', 'small', 'petite'], 'Size is required'),
    special: yup
        .string(),

    mushrooms: yup.boolean(),
    olives: yup.boolean(),
    pineapple: yup.boolean(),
    jalapeno: yup.boolean(),
    anchovies: yup.boolean(),
    candy: yup.boolean(),
    onions: yup.boolean(),
    pepper: yup.boolean(),
    sausage: yup.boolean(),
    garlic: yup.boolean(),
})

export default formSchema