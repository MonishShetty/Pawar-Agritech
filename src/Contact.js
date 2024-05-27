import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wnldo5v', 'template_yjy2zks', form.current, 'Uncnu75D_Q5mlp9bI')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('contactbg.jpg')`,
        backdropFilter: 'blur(10px)',
        webkitBackdropFilter: 'blur(10px)',
      }}
    >
      <section className="bg-opacity-80 dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-lg text-white dark:text-gray-300">Your email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-green-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-lg font-medium text-white dark:text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-green-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-lg font-medium text-white dark:text-gray-400">Your message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-green-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-2xl bg-white font-medium text-center text-green-900 hover:bg-green-900 hover:text-white rounded-xl sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
