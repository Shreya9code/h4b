import { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const { user } = useAppContext();

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([...posts, {
        id: Date.now(),
        content: newPost,
        author: user?.name || 'Anonymous',
        timestamp: new Date().toLocaleString()
      }]);
      setNewPost('');
    }
  };

  return (
    <div>
      <h2>Farmer Community</h2>
      <form onSubmit={handlePostSubmit}>
        <textarea 
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Ask a question or share your experience"
        />
        <button type="submit">Post</button>
      </form>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            <small>Posted by {post.author} on {post.timestamp}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityPage;