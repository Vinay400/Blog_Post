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

function App() {
  const [activePage, setActivePage] = React.useState('Home');

  const handleClick = (e) => {
    const { id } = e.target;
    setActivePage(id);
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
      <ProfileCard
        imageUrl="https://randompicturegenerator.com/img/picture-generator/53e4d5424854a914f1dc8460962e33791c3ad6e04e507440702e7bd59e48c5_640.jpg"
        name="Hey! So Glad You're Here."
        title="Blogger & Storyteller"
        description={"I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page."}
      />
    );
  } else if (activePage === 'Contact') {
    content = <ContactForm />;
  } else if (activePage === 'MyBlog') {
    content = <Mainsection />;
  }

  return (
    <div>
      <div className="Homepage">
        <div id="title">
          <h1>BlogPost</h1>
        </div>
        <div className="container">
          <Navbar onChecked={handleClick} />
          {content}
        </div>
      </div>
    </div>
  );
}

export default App;
