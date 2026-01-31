import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelDate: '',
        message: ''
      });
      
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Luxury Avenue', 'Travel City, TC 12345', 'United States']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon-Sat: 9AM - 8PM']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@wanderluxe.com', 'support@wanderluxe.com', 'booking@wanderluxe.com']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9AM - 8PM', 'Saturday: 10AM - 6PM', 'Sunday: Closed']
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            Let's plan your perfect journey together
          </p>
        </div>
      </div>

      <section className="contact-content py-100">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-section">
              <h2 className="contact-section-title">Send Us a Message</h2>
              <p className="contact-section-description">
                Fill out the form below and our travel experts will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="destination">Interested Destination</label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                    >
                      <option value="">Select a destination</option>
                      <option value="europe">Europe</option>
                      <option value="asia">Asia</option>
                      <option value="americas">Americas</option>
                      <option value="africa">Africa</option>
                      <option value="oceania">Oceania</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="travelDate">Preferred Travel Date</label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your dream vacation..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="form-success">
                    Thank you! We'll get back to you shortly.
                  </div>
                )}
              </form>
            </div>

            <div className="contact-info-section">
              <h2 className="contact-section-title">Contact Information</h2>
              <p className="contact-section-description">
                Reach out to us through any of these channels. We're here to help!
              </p>

              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="contact-info-icon">
                      <info.icon size={28} />
                    </div>
                    <h3 className="contact-info-title">{info.title}</h3>
                    <div className="contact-info-details">
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-map">
                <div className="map-placeholder">
                  <MapPin size={48} />
                  <p>123 Luxury Avenue, Travel City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Adventure?</h2>
            <p>Our travel experts are available 24/7 to assist you</p>
            <a href="tel:+15551234567" className="btn btn-outline btn-large">
              Call Now: +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;