import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
    <section id="contact" className="bg-base-100 px-6 py-16 text-secondary">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-accent text-xs font-normal uppercase tracking-widest">
          <span className="bg-primary p-1">Contact</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Get In Touch</h2>
        <p className="text-sm mt-2 text-gray-400">Have a project in mind or just want to say hello?</p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary text-xl" />
            <a href="mailto:tahiaofficial1@gmail.com" className="hover:text-accent">tahiaofficial1@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-primary text-xl" />
            <a href="https://wa.me/8801405561667" target="_blank" rel="noopener noreferrer" className="hover:text-accent">WhatsApp Me</a>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-primary text-xl" />
            <p>+8801603121066</p>
          </div>
          {/* Social Links */}
          <div className="flex gap-6 mt-6 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent"><FaGithub /></a>
          </div>
        </div>

        {/* Right - Contact Form */}
<form onSubmit={handleSubmit} className="space-y-4">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full px-4 py-2 rounded border border-gray-400 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
    onChange={handleChange}
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full px-4 py-2 rounded border border-gray-400 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
    onChange={handleChange}
  />
  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
    className="w-full px-4 py-2 rounded border border-gray-400 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
    onChange={handleChange}
  />
  <textarea
    name="message"
    rows="5"
    placeholder="Your Message"
    required
    className="w-full px-4 py-2 rounded border border-gray-400 bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
    onChange={handleChange}
  ></textarea>
  <button
    type="submit"
                        className="inline-block bg-primary  text-secondary hover:text-base-100 px-5 py-2 mt-4 rounded hover:bg-accent transition"
  >
    Send Message
  </button>
</form>

      </div>
    </section>
  );
};

export default Contact;
