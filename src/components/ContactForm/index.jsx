import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./styles.css";

const ContactForm = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const form = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const emailData = new FormData();
    for (let key in data) {
      emailData.append(key, data[key]);
    }
    emailjs
      .sendForm("service_hridu79", "template_jrm3so9", form.current, {
        publicKey: "user_x5NtJXggciETqvUWOMbTu",
      })
      .then(
        () => {
          setMessage(
            "Thank you for your message! We will get back to you soon."
          );
          reset();
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-form-container">
      {loading ? (
        <div className="loading-message">loading...</div>
      ) : message ? (
        <div className="success-message">{message}</div>
      ) : (
        <form
          className="contact-form"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              className={`form-input ${errors.firstName ? "error" : ""}`}
              {...register("firstName", {
                required: "First name is required",
              })}
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              className={`form-input ${errors.lastName ? "error" : ""}`}
              {...register("lastName", {
                required: "Last name is required",
              })}
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className={`form-input ${errors.email ? "error" : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone #"
              className={`form-input ${errors.phone ? "error" : ""}`}
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                  message: "Invalid telephone number",
                },
              })}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone.message}</span>
            )}
          </div>

          <div className="form-group">
            <textarea
              placeholder="Brief Message"
              rows="4"
              className={`form-input form-textarea ${
                errors.message ? "error" : ""
              }`}
              {...register("message", {
                required: "Message is required",
              })}
            />
            {errors.message && (
              <span className="error-message">{errors.message.message}</span>
            )}
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;