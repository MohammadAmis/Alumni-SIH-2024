import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment, FaShare, FaBookmark } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Success_Story = () => {
  const [alumni, setAlumni] = useState([
    { id: 1, name: 'John Doe', year: 2015, story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80', likes: 15, comments: 5 },
    { id: 2, name: 'Jane Smith', year: 2018, story: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80', likes: 20, comments: 8 },
    { id: 3, name: 'Mike Johnson', year: 2020, story: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80', likes: 10, comments: 3 },
  ]);

  const [stories, setStories] = useState([]);
  const [currentStory, setCurrentStory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % alumni.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [alumni.length]);

  useEffect(() => {
    fetchAlumni();
    fetchStories();
  }, []);

  const fetchAlumni = () => {
    const dummyAlumni = [
      { id: 1, name: 'John Doe', description: 'CEO of Tech Innovations', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
      { id: 2, name: 'Jane Smith', description: 'Founder of EcoSolutions', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80' },
      { id: 3, name: 'Mike Johnson', description: 'Award-winning Researcher', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
    ];
    setAlumni(dummyAlumni);
  };

  const fetchStories = () => {
    const dummyStories = [
      { id: 1, name: 'Alice Green', title: 'Breaking Barriers in Tech', description: 'Lead developer at a Fortune 500 company', likes: 150, comments: 25, profileImage: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { id: 2, name: 'Bob Brown', title: 'From Classroom to Boardroom', description: 'My journey from student to successful entrepreneur', likes: 200, comments: 40, profileImage: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { id: 3, name: 'Carol White', title: 'Revolutionizing Healthcare', description: 'AI solutions for early disease detection', likes: 180, comments: 30, profileImage: 'https://randomuser.me/api/portraits/women/2.jpg' },
    ];
    setStories(dummyStories);
  };

  const filteredAlumni = alumni.filter(
    (story) => story.name.toLowerCase().includes(searchTerm.toLowerCase()) || story.story.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleSort = (e) => setSortBy(e.target.value);

  const handleFilter = (e) => setFilter(e.target.value);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleLike = (id) => {
    setStories((prev) =>
      prev.map((story) =>
        story.id === id ? { ...story, likes: story.likes + 1 } : story
      )
    );
    console.log('Liked story:', id);
  };

  const handleComment = (id) => console.log('Commented on story:', id);

  const handleReply = (id) => console.log('Replied to comment:', id);

  const handleShare = (id) => console.log('Shared story:', id);

  const handleBookmark = (id) => console.log('Bookmark story:', id);

  return (
    <div className='mx-[100px]'>
      <main className="container mx-auto mt-8 p-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Notable Alumni</h2>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <motion.div className="flex" animate={{ x: `-${currentStory * 100}%` }} transition={{ duration: 0.5 }}>
              {alumni.map((story) => (
                <div key={story.id} className="w-full flex-shrink-0">
                  <img src={story.image} alt={story.name} className="w-full h-96 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-sm">Class of {story.year}</p>
                    <p className="mt-2">{story.story}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Success Stories */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
          <div className="mb-4 flex flex-wrap items-center gap-4">
          <input
            type="text"
            placeholder="Search stories"
            value={searchTerm}
            onChange={handleSearch}
            className="px-3 py-2 border rounded-md flex-grow"
          />
          <select value={sortBy} onChange={handleSort} className="px-3 py-2 border rounded-md">
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
          </select>
          <select value={filter} onChange={handleFilter} className="px-3 py-2 border rounded-md">
            <option value="all">All Categories</option>
            <option value="tech">Technology</option>
            <option value="business">Business</option>
            <option value="science">Science</option>
          </select>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <div key={story.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src={story.profileImage} alt={story.name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h3 className="text-lg font-bold">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.title}</p>
                  </div>
                </div>
                <p>{story.description}</p>
                <div className="mt-4 flex items-center gap-4">
                  <button onClick={() => handleLike(story.id)} className="text-red-500">
                    <FaHeart /> {story.likes}
                  </button>
                  <button onClick={() => handleComment(story.id)} className="text-blue-500">
                    <FaComment /> {story.comments}
                  </button>
                  <button onClick={() => handleShare(story.id)} className="text-green-500">
                    <FaShare />
                  </button>
                  <button onClick={() => handleBookmark(story.id)} className="text-yellow-500">
                    <FaBookmark />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 rounded-l-md">&lt;</button>
          <span className="px-4 py-2 bg-gray-100">{currentPage}</span>
          <button onClick={() => handlePageChange(currentPage + 1)} className="px-4 py-2 bg-gray-200 rounded-r-md">&gt;</button>
        </div>

        </section>
      </main>
    </div>
  );
};

export default Success_Story;
