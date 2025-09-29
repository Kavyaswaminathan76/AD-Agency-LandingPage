import React, { useState } from "react";
import axios from "axios"; 

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      setResponse(res.data.msg);
    } catch (error) {
      setResponse("Error sending message.");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Let’s Talk</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
      <p>{response}</p>
    </section>
  );
}

export default ContactForm;
