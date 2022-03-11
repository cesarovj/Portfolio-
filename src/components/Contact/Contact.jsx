import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-section'>
            <div className='contact-liner'>
                <div>Want to</div>
                <div>start working</div>
                <div>together?</div>
            </div>

            <div className='contact-text'>
                <div className='text-line2'>
                    Technical skills are only half of my skill set.
                </div>
                <div className='text-line2'>
                    Good communication and a positive attitude are paramount in
                    a fast-paced ever changing industry.
                </div>
                <div className='text-line2'>So, let's get in touch!</div>
            </div>
            <ContactForm />
        </div>
    );
};

export default Contact;
