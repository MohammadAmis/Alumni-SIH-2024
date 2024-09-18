import React, { useState } from 'react';
import './HelpAndFAQ.css';

const faqData = [
  {
    id: 1,
    category: 'General',
    questions: [
      {
        question: 'How can I contact support?',
        answer: 'You can contact support via email at support@example.com or use our chat feature for real-time assistance.',
      },
      {
        question: 'Where can I find the user manual?',
        answer: 'The user manual is available in the "Resources" section or at example.com/manual.',
      },
    ],
  },
  {
    id: 2,
    category: 'Account',
    questions: [
      {
        question: 'How do I reset my password?',
        answer: 'To reset your password, go to the "Forgot Password" section on the login page and follow the instructions.',
      },
      {
        question: 'How can I update my profile information?',
        answer: 'You can update your profile information in the "Account Settings" section of your dashboard.',
      },
    ],
  },
  // Additional categories and questions can be added here
];

function HelpAndFAQ() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const handleQuestionClick = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormSuccess(true);
    setContactEmail('');
    setContactMessage('');
  };

  const filteredFAQs = faqData.flatMap(category =>
    category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="help-and-faq-container">
      <header className="help-and-faq-header">
        <h1>Help & FAQ</h1>
        <p>Your questions answered. If you need more assistance, feel free to contact us.</p>
      </header>

      {/* Search Bar */}
      <section className="faq-search">
        <input
          type="text"
          className="search-input"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      {/* FAQ Categories */}
      <section className="faq-categories">
        {faqData.map((category) => (
          <div key={category.id} className="faq-category">
            <h2 onClick={() => handleCategoryClick(category.id)} className="category-title">
              {category.category}
            </h2>
            {activeCategory === category.id && (
              <div className="faq-list">
                {category.questions.map((q, index) => (
                  <div key={index} className="faq-item">
                    <button className="faq-question" onClick={() => handleQuestionClick(index)}>
                      {q.question}
                    </button>
                    <div className={`faq-answer ${activeQuestion === index ? 'active' : ''}`}>
                      {q.answer}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
          {formSuccess && <p className="form-success">Your message has been sent!</p>}
        </form>
      </section>

      {/* Recent Updates */}
      <section className="recent-updates">
        <h2>Recent Updates</h2>
        <ul>
          <li>New feature: Passwordless login added to the platform.</li>
          <li>Maintenance notice: Scheduled downtime on September 30th from 2 AM to 4 AM.</li>
          <li>New article: How to optimize your workflow using our latest tools.</li>
        </ul>
      </section>

      {/* Help Resources */}
      <section className="help-resources">
        <h2>Helpful Resources</h2>
        <ul>
          <li><a href="https://example.com/user-guide">User Guide</a></li>
          <li><a href="https://example.com/faq">FAQ Section</a></li>
          <li><a href="https://example.com/support">Customer Support</a></li>
        </ul>
      </section>

      {/* Chatbot or Live Chat */}
      <section className="chat-support">
        <h2>Need More Help?</h2>
        <p>Our support team is here to assist you. Click below to start a chat.</p>
        <button className="chat-button">Start Chat</button>
      </section>
    </div>
  );
}

export default HelpAndFAQ;
