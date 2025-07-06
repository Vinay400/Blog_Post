import React from 'react';
import './styles/App.css';
import FeaturedPosts from './components/FeaturedPosts';
import Navbar from './components/Navbar';
import Emailsection from './components/emailsection';
import Mainsection from './components/Mainsection';
import ContactForm from './components/Footer';
import ProfileCard from './components/ProfileCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostPage from './components/posts/PostPage';
import FloatingSocialButton from './components/FloatingSocialButton';

function AboutPage() {
  return (
    <>
      <ProfileCard
        imageUrl="https://randompicturegenerator.com/img/picture-generator/53e4d5424854a914f1dc8460962e33791c3ad6e04e507440702e7bd59e48c5_640.jpg"
        name="Hey! So Glad You're Here."
        title="Blogger & Storyteller"
        description={"I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page."}
      />
      <ContactForm />
    </>
  );
}

function MyBlogPage() {
  return (
    <>
      <Mainsection />
      <ContactForm />
    </>
  );
}

function HomePage() {
  return (
    <>
      <FeaturedPosts />
      <Mainsection />
      <Emailsection />
      <ContactForm />
    </>
  );
}

function ContactPage() {
  return <ContactForm />;
}

function App() {
  return (
    <Router>
      <div>
        <div className="Homepage">
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/myblog" element={<MyBlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/post/:id" element={<PostPage />} />
            </Routes>
            <FloatingSocialButton />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
