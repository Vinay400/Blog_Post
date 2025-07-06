import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/PostPage.css';

const postData = {
  featured: {
    title: 'Mastering React Hooks: Tips & Tricks',
    date: 'Apr 10, 2024',
    readTime: '4 min read',
    imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['React', 'Hooks', 'JavaScript'],
    content: `Unlock the full potential of React Hooks with these practical tips and code examples for modern web development.\n\n## Why React Hooks?\nHooks let you use state and other React features without writing a class. They simplify your code and make it more readable.\n\n### Example: useState\n\n\`\`\`jsx\nconst [count, setCount] = useState(0);\n\`\`\`\n\nYou can use multiple state variables in a single component.\n\n### Example: useEffect\n\n\`\`\`jsx\nuseEffect(() => {\n  // Fetch data or subscribe to events\n  return () => {\n    // Cleanup\n  };\n}, []);\n\`\`\`\n\n### Custom Hooks\nYou can create your own hooks to reuse logic across components.\n\n\`\`\`jsx\nfunction useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n  return width;\n}\n\`\`\`\n\nHooks are a game-changer for React development!`,
  },
  'vscode-extensions': {
    title: '10 VS Code Extensions Every Web Developer Should Use',
    date: 'Apr 8, 2024',
    readTime: '2 min read',
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['VS Code', 'Productivity', 'Tools'],
    content: `Boost your productivity and streamline your workflow with these must-have Visual Studio Code extensions for web development.\n\n1. **Prettier** - Code formatter for consistent style.\n2. **ESLint** - Lint your JavaScript and React code.\n3. **Live Server** - Launch a local server with live reload.\n4. **GitLens** - Supercharge the built-in Git capabilities.\n5. **Bracket Pair Colorizer** - Color matching brackets for readability.\n6. **Path Intellisense** - Autocompletes filenames.\n7. **Auto Rename Tag** - Renames paired HTML/JSX tags.\n8. **CSS Peek** - Jump to CSS definitions.\n9. **Import Cost** - Display the size of imported packages.\n10. **Thunder Client** - Lightweight REST API client.\n\nTry these out and see your workflow improve!`,
  },
  'js-closures': {
    title: 'Understanding JavaScript Closures with Real-World Examples',
    date: 'Apr 5, 2024',
    readTime: '3 min read',
    imageUrl: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['JavaScript', 'Closures', 'Functions'],
    content: `Demystify closures in JavaScript with clear explanations and practical coding scenarios you can use in your projects.\n\nA closure is a function that has access to its own scope, the outer function's scope, and the global scope.\n\n### Example\n\n\`\`\`js\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  }\n}\nconst counter = outer();\ncounter(); // 1\ncounter(); // 2\n\`\`\`\n\nClosures are useful for data privacy and functional programming patterns. For example, you can create private variables and factory functions using closures.`,
  },
  'css-grid-flexbox': {
    title: 'How to Build Responsive Layouts with CSS Grid and Flexbox',
    date: 'Apr 2, 2024',
    readTime: '2 min read',
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['CSS', 'Grid', 'Flexbox', 'Responsive'],
    content: `Learn the secrets to creating beautiful, responsive web layouts using modern CSS techniques like Grid and Flexbox.\n\n## CSS Grid Example\n\n\`\`\`css\n.container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\`\`\`\n\n## Flexbox Example\n\n\`\`\`css\n.flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\`\`\`\n\nUse media queries to make your layouts adapt to different screen sizes. Combine Grid and Flexbox for powerful, flexible designs!`,
  },
};

// Social media share URLs (for demonstration)
const getShareUrl = (platform, url, title) => {
  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    case 'linkedin':
      return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    default:
      return '#';
  }
};

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = postData[id] || postData['featured'];
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setComments([...comments, { name, message, date: new Date().toLocaleString() }]);
      setName('');
      setMessage('');
    }
  };

  // Get current post URL for sharing
  const postUrl = window.location.href;

  return (
    <div className="postpage-container">
      {/* Back Button */}
      <button onClick={() => navigate('/')} className="postpage-back-btn">
        <span style={{ fontSize: 22, marginRight: 8 }}>&larr;</span> Back
      </button>
      {/* Post Image */}
      <img src={post.imageUrl} alt={post.title} className="postpage-image" />
      {/* Post Title */}
      <h1 className="postpage-title">{post.title}</h1>
      {/* Post Meta */}
      <div className="postpage-meta">{post.date} • {post.readTime}</div>
      {/* Tags */}
      <div style={{ marginBottom: '1rem' }}>
        {post.tags && post.tags.map(tag => (
          <span
            key={tag}
            style={{
              display: 'inline-block',
              background: '#f0f0f0',
              color: '#333',
              borderRadius: '12px',
              padding: '0.2rem 0.8rem',
              fontSize: '0.9rem',
              marginRight: '0.5rem',
              marginBottom: '0.2rem',
              cursor: 'pointer',
              border: selectedTag === tag ? '1px solid #6c63ff' : 'none',
              color: selectedTag === tag ? '#6c63ff' : '#333',
              fontWeight: selectedTag === tag ? 'bold' : 'normal',
            }}
            onClick={() => setSelectedTag(tag)}
          >
            #{tag}
          </span>
        ))}
        {selectedTag && (
          <span
            style={{
              marginLeft: '1rem',
              color: '#6c63ff',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.9rem',
            }}
            onClick={() => setSelectedTag(null)}
          >
            Clear Tag Filter
          </span>
        )}
      </div>
      {/* Post Content */}
      <div className="postpage-content">{post.content}</div>
      {/* Tag Filtered Posts */}
      {selectedTag && (
        <div style={{ margin: '2rem 0' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.7rem' }}>Other posts tagged #{selectedTag}:</h3>
          {Object.entries(postData)
            .filter(([pid, pdata]) => pdata.tags && pdata.tags.includes(selectedTag) && pid !== id)
            .map(([pid, pdata]) => (
              <div key={pid} style={{ marginBottom: '1rem', cursor: 'pointer', padding: '0.7rem', background: '#f7f7f7', borderRadius: 6 }} onClick={() => navigate(`/post/${pid}`)}>
                <strong>{pdata.title}</strong>
                <div style={{ color: '#888', fontSize: '0.95rem' }}>{pdata.date} • {pdata.readTime}</div>
              </div>
            ))}
          {Object.entries(postData).filter(([pid, pdata]) => pdata.tags && pdata.tags.includes(selectedTag) && pid !== id).length === 0 && (
            <div style={{ color: '#888' }}>No other posts with this tag.</div>
          )}
        </div>
      )}
      {/* Social Media Sharing */}
      <div style={{ margin: '2rem 0 1rem 0', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold' }}>Share:</span>
        <a href={getShareUrl('twitter', postUrl, post.title)} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">🐦</a>
        <a href={getShareUrl('facebook', postUrl, post.title)} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">📘</a>
        <a href={getShareUrl('linkedin', postUrl, post.title)} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">💼</a>
      </div>
      {/* Comment Section */}
      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Comments</h2>
        <form onSubmit={handleCommentSubmit} style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: 400 }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{ padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }}
          />
          <textarea
            placeholder="Your Comment"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            rows={3}
            style={{ padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ background: '#007bff', color: '#fff', border: 'none', borderRadius: 4, padding: '0.5rem', cursor: 'pointer' }}>Submit</button>
        </form>
        {/* Display Comments */}
        <div>
          {comments.length === 0 && <p>No comments yet. Be the first to comment!</p>}
          {comments.map((c, idx) => (
            <div key={idx} style={{ marginBottom: '1rem', padding: '0.7rem', background: '#f9f9f9', borderRadius: 6 }}>
              <strong>{c.name}</strong> <span style={{ color: '#888', fontSize: '0.9rem' }}>{c.date}</span>
              <div style={{ marginTop: '0.3rem' }}>{c.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage; 