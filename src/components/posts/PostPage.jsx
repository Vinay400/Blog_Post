import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/PostPage.css';

const postData = {
  featured: {
    title: 'Mastering React Hooks: Tips & Tricks',
    date: 'Apr 10, 2024',
    readTime: '4 min read',
    imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: `Unlock the full potential of React Hooks with these practical tips and code examples for modern web development.

## Why React Hooks?
Hooks let you use state and other React features without writing a class. They simplify your code and make it more readable.

### Example: useState

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

You can use multiple state variables in a single component.

### Example: useEffect

\`\`\`jsx
useEffect(() => {
  // Fetch data or subscribe to events
  return () => {
    // Cleanup
  };
}, []);
\`\`\`

### Custom Hooks
You can create your own hooks to reuse logic across components.

\`\`\`jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}
\`\`\`

Hooks are a game-changer for React development!`,
  },
  'vscode-extensions': {
    title: '10 VS Code Extensions Every Web Developer Should Use',
    date: 'Apr 8, 2024',
    readTime: '2 min read',
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: `Boost your productivity and streamline your workflow with these must-have Visual Studio Code extensions for web development.

1. **Prettier** - Code formatter for consistent style.
2. **ESLint** - Lint your JavaScript and React code.
3. **Live Server** - Launch a local server with live reload.
4. **GitLens** - Supercharge the built-in Git capabilities.
5. **Bracket Pair Colorizer** - Color matching brackets for readability.
6. **Path Intellisense** - Autocompletes filenames.
7. **Auto Rename Tag** - Renames paired HTML/JSX tags.
8. **CSS Peek** - Jump to CSS definitions.
9. **Import Cost** - Display the size of imported packages.
10. **Thunder Client** - Lightweight REST API client.

Try these out and see your workflow improve!`,
  },
  'js-closures': {
    title: 'Understanding JavaScript Closures with Real-World Examples',
    date: 'Apr 5, 2024',
    readTime: '3 min read',
    imageUrl: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: `Demystify closures in JavaScript with clear explanations and practical coding scenarios you can use in your projects.

A closure is a function that has access to its own scope, the outer function's scope, and the global scope.

### Example

\`\`\`js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}
const counter = outer();
counter(); // 1
counter(); // 2
\`\`\`

Closures are useful for data privacy and functional programming patterns. For example, you can create private variables and factory functions using closures.`,
  },
  'css-grid-flexbox': {
    title: 'How to Build Responsive Layouts with CSS Grid and Flexbox',
    date: 'Apr 2, 2024',
    readTime: '2 min read',
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: `Learn the secrets to creating beautiful, responsive web layouts using modern CSS techniques like Grid and Flexbox.

## CSS Grid Example

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
\`\`\`

## Flexbox Example

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

Use media queries to make your layouts adapt to different screen sizes. Combine Grid and Flexbox for powerful, flexible designs!`,
  },
};

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = postData[id] || postData['featured'];

  return (
    <div className="postpage-container">
      <button onClick={() => navigate('/')} className="postpage-back-btn">
        <span style={{ fontSize: 22, marginRight: 8 }}>&larr;</span> Back
      </button>
      <img src={post.imageUrl} alt={post.title} className="postpage-image" />
      <h1 className="postpage-title">{post.title}</h1>
      <div className="postpage-meta">{post.date} • {post.readTime}</div>
      <div className="postpage-content">{post.content}</div>
    </div>
  );
};

export default PostPage; 