import React, { useState, forwardRef } from 'react';
import email from "../../assets/images/email.svg";
import phonecall from "../../assets/images/phonecall.svg";

// Define the Contact component with a display name
const Contact = forwardRef(function Contact(props, ref) {
  const emailAddress = "nothingism99@gmail.com"; // Your email address
  const subject = "Hello"; // Predefined subject
  const body = "I'd like to get in touch with you."; // Predefined body message
  const phoneNumber = "(+251) 931932529"; // Your phone number
  const [popupMessage, setPopupMessage] = useState('');

  const handleMouseEnter = () => {
    setPopupMessage('Click it copy');
  };

  const handleMouseLeave = () => {
    setPopupMessage('');
  };

  const handleCopyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setPopupMessage('Copied to clipboard!');
      setTimeout(() => setPopupMessage(''), 2000); // Clear message after 2 seconds
    });
  };

  return (
    <div ref={ref} className="p-4 bg-gray-500 font-permanent relative">
      <h2>MY Address</h2>

      {/* Email Section */}
      <p className="flex items-center justify-center mb-2">
        <img className="mr-3" src={email} alt="Email Icon" />
        <a
          href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
          className="hover:underline"
        >
          {emailAddress}
        </a>
      </p>

      {/* Phone Section */}
      <p
        className="flex items-center justify-center cursor-pointer hover:underline"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCopyPhoneNumber}
      >
        <img src={phonecall} alt="Phone Call Icon" className="mr-3" />
        <span>{phoneNumber}</span>
      </p>

      {/* Popup Notification */}
      {popupMessage && (
        <div className="absolute top-12 right-64 mt-2 underline border-gray-600 bg-slate-600 rounded shadow-lg ">
          {popupMessage}
        </div>
      )}
    </div>
  );
});

export default Contact;