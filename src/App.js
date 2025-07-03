import React from 'react';
import { dividerClasses } from '@mui/material/Divider';
import './styles/App.css';
import FeaturedPosts from './components/FeaturedPosts';
import Navbar from './components/Navbar'
import Emailsection from './components/emailsection';
import Mainsection from './components/Mainsection';
import ContactForm from './components/Footer';
import AboutMe from './components/About Me/Aboutme';
import ProfileCard from './components/ProfileCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostPage from './components/posts/PostPage';

function App() {
  const [activePage, setActivePage] = React.useState('Home');
  const [fadeClass, setFadeClass] = React.useState('');
  const handleClick = (e) => {
    const { id } = e.target;
    setActivePage(id);
    setFadeClass('');
    setTimeout(() => setFadeClass('fade-in'), 10);
  };

  let content;
  if (activePage === 'Home') {
    content = (
      <>
        <FeaturedPosts />
        <Mainsection />
        <Emailsection />
        <ContactForm />
      </>
    );
  } else if (activePage === 'About') {
    content = (
      <>
      <ProfileCard
        imageUrl="https://randompicturegenerator.com/img/picture-generator/53e4d5424854a914f1dc8460962e33791c3ad6e04e507440702e7bd59e48c5_640.jpg"
        name="Hey! So Glad You're Here."
        title="Blogger & Storyteller"
        description={"I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page."}
        className={fadeClass}
      />
      <ContactForm />
      </>
    );
  }
   else if (activePage === 'MyBlog') {
    content = (
      <>
        <Mainsection />
        <ContactForm />
      </>
    );
  }

  return (
    <Router>
      <div>
        <div className="Homepage">
          <div className="container">
            <Navbar onChecked={handleClick} />
            <Routes>
              <Route path="/" element={content} />
              <Route path="/post/:id" element={<PostPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
