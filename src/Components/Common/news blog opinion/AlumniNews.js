import React, { useState, useEffect } from 'react';
import './AlumniNews.css';

const mockAlumniData = [
  {
    id: 1,
    name: 'John Doe',
    month: 'September 2024',
    field: 'Artificial Intelligence',
    opinion: 'AI will continue to shape our world, and students should focus on ethics in AI development.',
    successStory: 'Developed an AI tool that predicts climate changes with high accuracy.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    month: 'August 2024',
    field: 'Finance',
    opinion: 'Fintech innovations are revolutionizing the banking sector. Students should be adaptive to new technologies.',
    successStory: 'Founded a successful fintech startup that has gained significant market share.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    month: 'July 2024',
    field: 'Healthcare',
    opinion: 'AI-driven healthcare is the future. It’s important for students to get involved in this growing field.',
    successStory: 'Developed a healthcare app that improves patient monitoring and diagnosis.',
    image: 'https://via.placeholder.com/150',
  },
  // Add more mock data here
];

function AlumniNews() {
  const [alumni, setAlumni] = useState([]);
  const [selectedField, setSelectedField] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  useEffect(() => {
    setAlumni(mockAlumniData);
  }, []);

  const filterByField = (field) => {
    setSelectedField(field);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSuccess(true);
    setEmail('');
  };

  const filteredAlumni = alumni.filter((alum) => {
    const matchesField = selectedField === 'All' || alum.field === selectedField;
    const matchesSearch = alum.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesField && matchesSearch;
  });

  return (
    <div className="alumni-news-container">
      <header className="alumni-news-header">
        <h1>Alumni News & Opinions</h1>
        <p>Explore recent alumni highlights, success stories, and expert opinions.</p>
      </header>

      {/* Newsletter Subscription */}
      <section className="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
          {newsletterSuccess && <p className="success-message">Thank you for subscribing!</p>}
        </form>
      </section>

      {/* Recent Alumni of the Month */}
      <section className="recent-alumni">
        <h2>Recent Alumni of the Month</h2>
        <div className="alumni-list">
          {alumni.slice(0, 3).map((alum) => (
            <div key={alum.id} className="alumni-card">
              <img src={alum.image} alt={`${alum.name}`} />
              <h3>{alum.name}</h3>
              <p><strong>Field:</strong> {alum.field}</p>
              <p><strong>Alumni of the Month:</strong> {alum.month}</p>
              <blockquote>{alum.opinion}</blockquote>
              <p><strong>Success Story:</strong> {alum.successStory}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Alumni..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter by Field */}
      <div className="filters">
        <button onClick={() => filterByField('All')}>All Fields</button>
        <button onClick={() => filterByField('Artificial Intelligence')}>Artificial Intelligence</button>
        <button onClick={() => filterByField('Finance')}>Finance</button>
        <button onClick={() => filterByField('Healthcare')}>Healthcare</button>
        {/* Add more fields as needed */}
      </div>

      {/* Alumni List */}
      <section className="full-alumni-list">
        <h2>All Alumni</h2>
        <div className="alumni-list">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((alum) => (
              <div key={alum.id} className="alumni-card">
                <img src={alum.image} alt={`${alum.name}`} />
                <h3>{alum.name}</h3>
                <p><strong>Field:</strong> {alum.field}</p>
                <p><strong>Alumni of the Month:</strong> {alum.month}</p>
                <blockquote>{alum.opinion}</blockquote>
                <p><strong>Success Story:</strong> {alum.successStory}</p>
              </div>
            ))
          ) : (
            <p>No alumni found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default AlumniNews;
