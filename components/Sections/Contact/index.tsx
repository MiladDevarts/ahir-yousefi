"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "@common/Input";
import Textarea from "@common/Textarea";
import User from "@components/UI/Icons/White/User";
import Email from "@components/UI/Icons/White/Email";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );

      setSubmitted(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="container flex flex-col gap-y-6 items-center my-36"
    >
      <h2 className="text-3xl font-mono text-white mb-6">Contact</h2>

      {submitted ? (
        <div className="text-green-500 text-center">
          Thank you for your message! We'll get back to you soon.
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-6 w-full lg:w-1/2"
        >
          <Input
            name="user_name"
            label="Full name"
            id="fullName"
            type="text"
            placeholder="Jason"
            icon={<User />}
          />

          <Input
            name="user_email"
            label="E-mail address"
            id="email"
            type="email"
            placeholder="unreal@outlook.com"
            icon={<Email />}
            required
          />

          <Textarea
            name="message"
            label="Message"
            id="message"
            placeholder="Your message..."
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-2xl flex justify-center items-center w-full h-[70px] px-4 font-semibold bg-white text-black hover:cursor-pointer border border-white hover:bg-white/0 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
