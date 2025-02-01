"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

import emailjs from "@emailjs/browser";

import Input from "@common/Input";
import Textarea from "@common/Textarea";

import User from "@components/UI/Icons/User";
import Email from "@components/UI/Icons/Email";

import { Instagram, TikTok } from "@components/UI/Icons";

import { socialMedia } from "@/config";
import Button from "@components/Common/Button";

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
      className="container flex flex-col gap-y-6 items-center mt-40 mb-[90px]"
    >
      <h2 className="text-4xl font-display text-white mb-6 uppercase font-bold">
        Contact
      </h2>

      {submitted ? (
        <div className="text-green-500 text-center">
          Thank you for your message! We'll get back to you soon.
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-6 w-full lg:w-1/2 lg:border-x border-[#313131] lg:px-[100px]"
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

          <Button
            href={socialMedia.instagram}
            className="w-full h-16 rounded-2xl"
          >
            {loading ? "Sending..." : "Send message"}
          </Button>
        </form>
      )}
      <div className="flex flex-col items-center gap-6 text-sm mt-[20px] lg:mb-[80px]">
        <div className="flex gap-8">
          <span className="text-[#939393]">Or send email to</span>
          <Link className="text-white" href={"mailto:info@p91.bio"}>
            info@p91.bio
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href={socialMedia.instagram}>
            <Instagram />
          </Link>
          <Link href={socialMedia.tiktok}>
            <TikTok />
          </Link>
        </div>
      </div>
      <div className="text-sm">
        <span className="text-[#939393]">Design by </span>
        <Link className="text-white" href={"https://rivdesign.se"}>
          Riv Design
        </Link>
      </div>
    </section>
  );
};

export default Contact;
