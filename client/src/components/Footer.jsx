import React, { useRef, useState, useEffect } from "react";
import "./Footer.css"; // Import the CSS file for animations

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {  
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-gray-800 text-white py-8 mt-12 ${
        isVisible ? "footer-visible" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Footer Links */}
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/blood-availability" className="hover:underline">Blood Availability</a></li>
              <li><a href="/blood-bank-directory" className="hover:underline">Blood Bank Directory</a></li>
              <li><a href="/thalassemia-request" className="hover:underline">Thalassemia Request</a></li>
              <li><a href="/want-to-donate-blood" className="hover:underline">Want to Donate Blood</a></li>
              <li><a href="/blood-donation-camps" className="hover:underline">Blood Donation Camps</a></li>
              <li><a href="/donor-login" className="hover:underline">Donor Login</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <ul>
              <li><a href="/about-us" className="hover:underline">About Us</a></li>
              <li><a href="/about-RaktDaan" className="hover:underline">About RaktDaan</a></li>
              <li><a href="/notifications" className="hover:underline">Notifications</a></li>
              <li><a href="/RaktDaan-faqs" className="hover:underline">RaktDaan FAQs</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/video-gallery" className="hover:underline">Video Gallery</a></li>
            </ul>
          </div>

          {/* Contact and Mobile Apps Section */}
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">Contact & Mobile Apps</h3>
            <ul>
              <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="/mobile-apps" className="hover:underline">Mobile Apps</a></li>
              <li><a href="https://www.mohfw.gov.in" target="_blank" className="hover:underline">Ministry of Health and Family Welfare</a></li>
              <li><a href="https://www.india.gov.in" target="_blank" className="hover:underline">National Portal of India</a></li>
              <li><a href="https://nhm.gov.in" target="_blank" className="hover:underline">National Health Portal</a></li>
            </ul>
          </div>

          {/* Footer Information Section */}
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">Footer Information</h3>
            <p className="text-sm">© 2016-2024 by Ministry of Health and Family Welfare®</p>
            <p className="text-sm">Designed and Developed by Centre for Development of Advanced Computing</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-gray-900 text-center py-4 mt-6">
        <p className="text-sm">© 2016 - 2024 Ministry of Health and Family Welfare. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
