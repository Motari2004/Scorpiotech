"use client";

import { FaPhoneAlt, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const phoneNumber = "+254716594620";

  return (
    <section className="pt-32 px-6 max-w-4xl mx-auto space-y-12">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Contact Us</h2>
      <p className="text-brown-100 text-center">
        Reach out to Scorpio Digital through your preferred contact method.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Phone - always visible */}
        <div className="flex flex-col items-center bg-[#e0d7c6] border border-[#cbbfa8] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-64">
          <FaPhoneAlt className="text-yellow-700 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Phone</h3>
          <p className="text-gray-800 font-medium">{phoneNumber}</p>
        </div>

        {/* Telegram - reveal on click */}
        <div className="flex flex-col items-center bg-[#e0d7c6] border border-[#cbbfa8] p-8 rounded-xl shadow-lg w-64">
          <FaTelegramPlane className="text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Telegram</h3>
          <a
            href="https://t.me/scorpiotech"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Open Telegram
          </a>
        </div>

        {/* Email - reveal on click */}
        <div className="flex flex-col items-center bg-[#e0d7c6] border border-[#cbbfa8] p-8 rounded-xl shadow-lg w-64">
          <FaEnvelope className="text-red-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Email</h3>
          <a
            href="mailto:hopefreymosingi1@gmail.com"
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
