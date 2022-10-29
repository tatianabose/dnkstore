import React from 'react'

function ContactUs() {
    return (
        <div>
            <section className='contact-details-bg'>
                <div className='for-grid'>
                    <div className='contactus-left'>
                        <h5>Don't be a stranger!</h5>
                        <h4>You tell us. We listen.</h4>
                        <p>Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</p>
                    </div>

                    <div className='contactus-right'>
                        <input type={'text'} placeholder="Name"></input>
                        <input type={'text'} placeholder="Subject"></input>
                        <input type={'email'} placeholder="Email"></input>
                        <textarea rows="8" placeholder='Message' ></textarea>
                        <button className='bluebtn'>SEND MESSAGE</button>
                    </div>

                </div>


            </section>
        </div>
    )
}

export default ContactUs