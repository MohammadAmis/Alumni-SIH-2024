import { useState } from 'react';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';
import CommentSection from './CommentSection';

const StoryCard = ({ story }) => {
  const [likes, setLikes] = useState(story.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    // Optionally send like update to the backend
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg max-w-xl mb-6">
      <div className="flex items-center mb-4">
        <img
          src={story.profileImage}
          alt={story.name}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="font-bold">{story.name}</h3>
          <p className="text-sm text-gray-600">{story.batch}</p>
        </div>
      </div>
      <p className="mb-4">{story.snippet}</p>
      <div className="flex justify-between items-center">
        <button
          className="flex items-center space-x-2 text-red-500"
          onClick={handleLike}
        >
          <FaHeart /> <span>{likes}</span>
        </button>
        <button
          className="flex items-center space-x-2 text-blue-500"
          onClick={() => setShowComments(!showComments)}
        >
          <FaCommentAlt /> <span>{story.comments.length}</span>
        </button>
      </div>
      {showComments && <CommentSection comments={story.comments} />}
    </div>
  );
};

export default StoryCard;
