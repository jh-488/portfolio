import { useFormik } from "formik";
import { formSchema } from "./Schemas";
import emailjs from '@emailjs/browser';


const ContactForm = ({setIsFormSubmitted}) => {

  const {
    values,
    errors,
    handleChange,
    touched,
    handleSubmit
  } = useFormik({
    initialValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, actions) => {
        try {
            emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, values, import.meta.env.VITE_PUBLIC_API_KEY);
            setIsFormSubmitted(true);
            actions.resetForm();
        } catch {
            setIsFormSubmitted(false);
        }
    }
  })
  
  return (
    <div className="contact__form">
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Name:</label>
                    <div>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={values.name}
                            onChange={handleChange}
                            className={errors.name && touched.name ? "input__error" : ""}
                        />
                        <div className="error__container">
                            {errors.name && touched.name && <p className="error__message">{errors.name}</p>}
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <div>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={values.email}
                        onChange={handleChange}
                        className={errors.email && touched.email ? "input__error" : ""}
                        />
                        <div className="error__container">
                            {errors.email && touched.email && <p className="error__message">{errors.email}</p>}
                        </div>
                    </div>
                    </div>
                <div className="field">
                    <label htmlFor="subject">Subject:</label>
                    <div>
                        <input 
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Type the subject"
                            value={values.subject}
                            onChange={handleChange}
                            className={errors.subject && touched.subject ? "input__error" : ""}
                        />
                        <div className="error__container">
                            {errors.subject && touched.subject && <p className="error__message">{errors.subject}</p>}
                        </div>
                    </div>
                    </div>
                <div className="field">
                    <label htmlFor="message">Message:</label>
                    <div>
                        <textarea 
                            name="message"
                            id="message" 
                            cols="30" 
                            rows="10"
                            placeholder="Your message..."
                            value={values.message}
                            onChange={handleChange}
                            className={errors.message && touched.message ? "input__error" : ""}
                        >
                        </textarea>
                        <div className="error__container">
                            {errors.message && touched.message && <p className="error__message">{errors.message}</p>}
                        </div>
                    </div>
                </div>
                <button type="submit" aria-label="submit message">
                    Send Message
                </button>
            </fieldset>
        </form>
    </div>
    );
};

export default ContactForm;
