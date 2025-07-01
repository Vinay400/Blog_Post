import React from 'react';
import '../styles/App.css'; 
import HorizontalCard from './posts/HorizontalCard';
import AboutMe from './About Me/Aboutme';
import FollowMe from './About Me/Followme';
import Subscribe from './About Me/subscribe';
import ContactForm from './Footer';
function Mainsection() {
  return (
    <div className="main-grid">
      {/* Left Section */}
      <div className="left-section">
        <h3 className="section-heading">TRAIN OF THOUGHT</h3>
        <div className="space-y-6">
          <HorizontalCard
            date="Mar 23, 2023"
            readTime="1 min read"
            title="Do Not Leave Tokyo Before Eating This Ramen"
            description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and..."
            imageUrl="https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=400"
            views={0}
            comments={0}
            likes={8}
          />
          <HorizontalCard
            date="Mar 20, 2023"
            readTime="3 min read"
            title="The Ultimate Guide to Street Food in Bangkok"
            description="Discover the most authentic street food experiences in Thailand's vibrant capital city..."
            imageUrl="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
            views={24}
            comments={5}
            likes={15}
          />
          <HorizontalCard
            date="Mar 18, 2023"
            readTime="2 min read"
            title="Hidden Coffee Shops in Seoul You Must Visit"
            description="From traditional Korean tea houses to modern specialty coffee roasters, explore Seoul's unique cafe culture..."
            imageUrl="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400"
            views={12}
            comments={3}
            likes={22}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h3 className="section-heading">ABOUT ME</h3>
        <AboutMe
          imageUrl="https://randompicturegenerator.com/img/picture-generator/53e4d5424854a914f1dc8460962e33791c3ad6e04e507440702e7bd59e48c5_640.jpg"
          description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
          readMoreText=""
        />
        <hr className="custom-divider" />

        <h3 className="section-heading">FOLLOW ME</h3>
        <FollowMe />
        <hr className="custom-divider" />

        <Subscribe />
        <hr className="custom-divider" />

        <h3 className="section-heading">MY PICK OF THE MONTH</h3>
        <AboutMe
          imageUrl="https://randompicturegenerator.com/img/picture-generator/57e6d34b4b54ab14f1dc8460962e33791c3ad6e04e507441722a72d3964ec2_640.jpg"
          description="My PICK"
        />
      </div>
    </div>
  );
}

export default Mainsection;
