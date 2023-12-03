import * as yup from "yup";

export const formSchema = yup.object().shape({
    name: yup.string().required("Please add a name"),
    email: yup.string().email("Please enter a valid email").required("Please add an email"),
    subject: yup.string().required("Please add a subject"),
    message: yup.string().required("Please add a message")
})