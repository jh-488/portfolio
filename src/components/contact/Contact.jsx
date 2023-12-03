import "./Contact.css";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";

const Contact = () => {
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(undefined);

  // Display the feedback message for a few seconds
  useEffect(() => {
    setTimeout(() => {
      setIsFormSubmitted(undefined)
    }, 3000);
  }, [isFormSubmitted])

  return (
    <section className="contact padding" id="contact">
      <div className="container">
        <h2 className="title">CONTACT ME</h2>
        <ContactForm setIsFormSubmitted={setIsFormSubmitted}/>
      </div>
      <div className="form__feedback" >
        {isFormSubmitted === true ? (
          <div className="feedback__message submition__success">Your message was sent successfully!</div> 
        ) : isFormSubmitted === false ? (
            <div className="feedback__message submition__error">Oops! an error has occured. Please try again</div> 
        ) 
        : ""
        }
      </div>
    </section>
  )
}

export default Contact
