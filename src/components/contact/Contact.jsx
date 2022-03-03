import React, { useRef, useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const form = useRef();
    const [verify, setVerify] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_21ya2p7', 'template_430kiio', form.current, 'gkNaELkMUbtR-0l5y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    function onChange(value) {
        console.log("Captcha value:", value);
        setVerify(false);
    }

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>dummys@gmail.com</h5>
                        <a href="mailto:dummys@gmail.com">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Mesenger</h4>
                        <h5>Kha Rommy</h5>
                        <a href="https://m.me/kidaxxraider" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+62 831 1234 5678</h5>
                        <a href="https://api.whatsapp.com/send?phone=+628312345678" target='_blank'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>

                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Message' required></textarea>
                    <div className="g-recaptcha"
                    >
                        <ReCAPTCHA
                            sitekey="6LcyMq0eAAAAAFYvuY6apXN7yrIzHggaLWd-kv4o"
                            onChange={onChange}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary' disabled={verify}>Send</button>
                </form>
            </div >
        </section >
    )
}

export default Contact