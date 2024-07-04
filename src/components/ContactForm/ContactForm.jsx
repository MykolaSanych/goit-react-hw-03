import { Field, Formik, Form } from "formik"
import css from "./ContactForm.module.css"
import { ErrorMessage } from "formik"
import * as Yup from "yup"



export default function ContactForm({ handleSubmit}) {
    const initialValues ={
        id:"",
        name:"",
        number:"",
    }
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(7, "Too Short!").max(14, "Too Long!").required("Required")
    });


    return (<Formik initialValues={initialValues} onSubmit={ handleSubmit} validationSchema={FeedbackSchema} >
        <Form>
            <div className={css.formContainer}>
                <label>Name</label>
                <Field name="name" />
                <div className={css.error}>
                <ErrorMessage  name="name" component="span" />
                </div>
                <label>Number</label>
                <Field type="tel" name="number" />
                <div className={css.error}>
                <ErrorMessage  name="number" component="span" />
                </div>
                <button type="submit">Add contact</button>
            </div >
        </Form>

    </Formik>
    )
}