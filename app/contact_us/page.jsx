"use client";
import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (messageSent) {
    toast.success("Message Sent!", {
      theme: "colored",
    });
  }

  return (
    <>
      <div className={style.contact_wrapper}>
        <h1 className={style.header}>Contact Us</h1>
        <div className={style.contact_inner_wrapper}>
          <div className={style.left_card}>
            <p>
              We take pride in our work, maintaining a level of excellence that
              customers can trust, ensuring that we are a reliable partner
              through every challenge and opportunity. please get in touch.
            </p>

            <div className={style.contact_info}>
              <p>Email: Contact@redilas.co.uk</p>
            </div>
          </div>

          <div className={style.right_card}>
            <h2>Alternatively, you can fill the form below</h2>
            <form ref={form} onSubmit={sendEmail} className={style.form}>
              <label className={style.label}>Name</label>
              <input className={style.input} type="text" name="user_name" />
              <label className={style.label}>Email</label>
              <input className={style.input} type="email" name="user_email" />
              <label className={style.label}>Message</label>
              <textarea className={style.textarea} name="message" />
              <input className={style.submit} type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default contact;
