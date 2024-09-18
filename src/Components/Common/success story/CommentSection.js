import { useState } from 'react';

const CommentSection = ({ comments }) => {
  const [newComment, setNewComment] = useState('');
  const [allComments, setAllComments] = useState(comments);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        text: newComment,
        createdAt: new Date().toLocaleString(),
      };
      setAllComments([...allComments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-4">
      <h4 className="font-bold mb-2">Comments</h4>
      {allComments.map((comment) => (
        <div key={comment.id} className="border-t pt-2">
          <p>{comment.text}</p>
          <p className="text-xs text-gray-500">{comment.createdAt}</p>
        </div>
      ))}
      <div className="flex mt-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border rounded-l-lg p-2 w-full focus:outline-none focus:ring"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
