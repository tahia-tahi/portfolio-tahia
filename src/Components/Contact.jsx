import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:tahiaofficial1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-base-100 px-4 sm:px-6 md:px-12 py-16 text-secondary">
      {/* Section Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-widest">
          <span className="bg-primary p-1">Contact</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Get In Touch</h2>
        <p className="text-sm mt-2 text-gray-400">Have a project in mind or just want to say hello?</p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div className="space-y-6" data-aos="fade-right">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary text-xl" />
            <a
              href="mailto:tahiaofficial1@gmail.com"
              className="hover:text-accent transition-all duration-300"
              aria-label="Send Email"
            >
              tahiaofficial1@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-primary text-xl" />
            <a
              href="https://wa.me/8801405561667"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all duration-300"
              aria-label="WhatsApp Me"
            >
              WhatsApp Me
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-primary text-xl" />
            <p>+8801603121066</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 text-2xl sm:text-xl md:text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/tahia-tahi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4" data-aos="fade-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            required
            className="w-full max-w-full px-4 py-2 rounded border border-gray-400 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition mb-3"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            required
            className="w-full max-w-full px-4 py-2 rounded border border-gray-400 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition mb-3"
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            aria-label="Subject"
            required
            className="w-full max-w-full px-4 py-2 rounded border border-gray-400 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition mb-3"
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            aria-label="Your Message"
            required
            className="w-full max-w-full px-4 py-2 rounded border border-gray-400 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="inline-block bg-primary text-secondary hover:text-base-100 px-5 py-2 mt-4 rounded hover:bg-accent transition w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
