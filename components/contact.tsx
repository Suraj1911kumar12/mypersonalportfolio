"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FiMail, FiSend } from "react-icons/fi";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-32 max-w-4xl sm:mb-48  mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:bg-blue-900/30 dark:opacity-40"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:bg-purple-900/30 dark:opacity-40"></div>

        <SectionHeading>
          <span className="relative z-10">Get In Touch</span>
        </SectionHeading>
      </div>

      <motion.p
        className="text-lg text-gray-600 mb-12 text-center dark:text-gray-400"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Have a project in mind or want to discuss opportunities? Feel free to
        reach out.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-50 rounded-lg dark:bg-gray-800">
              <FiMail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                Email Me
              </h3>
              <a
                href="mailto:isurajkumar.cse@gmail.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                isurajkumar.cse@gmail.com
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h3>
            <div className="flex space-x-4">
              {[
                { name: "LinkedIn", icon: "BsLinkedin", url: "#" },
                { name: "GitHub", icon: "FaGithubSquare", url: "#" },
                { name: "Twitter", icon: "BsTwitter", url: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  {/* You'll need to import these icons */}
                  {social.name === "LinkedIn" && (
                    <BsLinkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  )}
                  {social.name === "GitHub" && (
                    <FaGithubSquare className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  )}
                  {social.name === "Twitter" && (
                    <BsTwitter className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          className="space-y-6"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Message sent successfully!");
            formRef.current?.reset();
          }}
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="senderEmail"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="senderEmail"
                name="senderEmail"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500 transition-all"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>
          </div>

          <SubmitBtn />
          {/* <span>Send Message</span>
            <FiSend className="ml-2 h-4 w-4" />
          </SubmitBtn> */}
        </motion.form>
      </div>
    </motion.section>
  );
}
