import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ? https://dashboard.emailjs.com/admin
    emailjs
      .send(
        "service_k1b9zh6", // ? Service Key
        "template_s9dp5c8", // ? Template Key
        {
          from_name: form.name,
          to_name: "Vishal",
          from_email: form.email,
          to_email: "vishalvishnine9000@gmail.com",
          message: form.message,
        },
        "s2vFUpnZixm1Ui-p_" // ? Public Key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, We have received your form submission.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Oops, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact_cont">
      <div className="contact_cont--header flow-sm">
        <p>GET IN TOUCH</p>
        <h2>Contact</h2>
      </div>
      <div className="contact_cont--wrapper pt-3 pb-8">
        <motion.div className="contact_form" variants={slideIn("left", "tween", 0.2, 1)}>
          <form className="contact_form--wrapper" ref={formRef} onSubmit={handleSubmit}>
            <label>
              <span>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name here."
              />
            </label>
            <label>
              <span>Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email here."
              />
            </label>
            <label>
              <span>Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message here."
              />
            </label>

            <button type="submit">{loading ? "Sending..." : "Send"}</button>
          </form>
        </motion.div>

        <motion.div className="contact_3d-shape" variants={slideIn("right", "tween", 0.2, 1)}>
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
