import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const resetForm = () => {
        setEmail('');
        setSubject('');
        setMessage('');
        setSent(true);
    };

    const validateEmail = (email) => {
        let re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(email)) {
            return true;
        } else {
            return false;
        }
    };

    const validateContent = () => {
        if (subject.length > 0 && message.length > 0) {
            return true;
        } else {
            return false;
        }
    };

    const handleSendClick = (e) => {
        e.preventDefault();
        alert(
            'Thank you for the message. I will get back to you as soon as possible.'
        );

        let contactParams = {
            email,
            subject,
            message,
        };
        emailjs.send(
            'cesar_service',
            'cesar_template',
            contactParams,
            'user_VedBrYmTB9Y4ahnfIhdkv'
        );

        resetForm();
        setTimeout(() => {
            setSent(false);
        }, 3000);
    };

    return (
        <>
            <form className='contact-form'>
                <div className='field'>
                    <input
                        type='email'
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        type='text'
                        id='subject'
                        placeholder='Subject'
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <div className='field'>
                        <textarea
                            placeholder='Message'
                            id='message'
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        ></textarea>
                    </div>
                </div>
                <br />
                {validateEmail(email) === true && validateContent() === true ? (
                    <div>
                        <button className='btn' onClick={handleSendClick}>
                            SEND
                        </button>
                    </div>
                ) : (
                    <div>
                        <button className='btn contact-btn'>SEND</button>
                    </div>
                )}
            </form>
        </>
    );
};

export default ContactForm;
