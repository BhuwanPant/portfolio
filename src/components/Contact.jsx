import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_7ocieum',
      'template_32n98em', 
      form.current,
      'aSh6dInlk_F0Ixmaq')
      .then((result) => {
          console.log(result.text);
          alert("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div name='/contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-2'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-gray-300 py-4'>as</p>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - myemail@email.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='user_name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='user_email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button type="submit" value="Send" className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-3 py-2 my-2 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact