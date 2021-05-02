import React from 'react';
import emailjs from 'emailjs-com';
import NavBar from '../../Home/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const ContactUs = () => {
    document.title="Developer Siam - Contact";

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cjyh25a', 'template_4csgw0c', e.target, 'user_lpXswi6AE97WaDYJffa4O')
            .then((result) => {
                alert(" Email Send Successfully");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div style={{ backgroundColor: '#080808ec', height: '900px' }}>
            <NavBar></NavBar>

            <div className='text-light text-center mt-5' style={{ fontFamily: "Ubuntu,sans-serif" }}>
                <h2>Contact me</h2>
                <h5> - get in touch - </h5>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5 text-white">
                        <div class="text title-style">Get in Touch</div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga
                        corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                        <div>
                            <span>  <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faInbox} />
                            </span> <span> Email : Shahidulmd392@gmail.com </span>
                        </div>
                        <p> <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faPhoneAlt} /> Phone: +88 018 9168 7875</p>
                        <p> <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faMapMarkerAlt} /> Address: Hathazari  fatehabad -4335</p>
                    </div>
                    <div className="col-md-8 mt-5">
                        <form onSubmit={sendEmail}>
                            <div className="row pt-3 mx-auto">
                                <div className="col-8 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <textarea className="form-control" id="" cols="30" rows="6" placeholder="Your message .." name="message"></textarea>
                                </div>
                                <div className="col-8 pt-3 mx-auto" >
                                    <input style={{ borderRadius: "20px", height: '50px' }} type="submit" className="btn text-light More-skil w-100" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;