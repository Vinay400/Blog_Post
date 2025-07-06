import React from 'react';
import '../styles/App.css'; 
import '../styles/Mainsection.css';
import HorizontalCard from './posts/HorizontalCard';
import AboutMe from './About Me/Aboutme';
import FollowMe from './About Me/Followme';
import Subscribe from './About Me/subscribe';

function Mainsection() {
  return (
    <div className="main-grid">
      {/* Left Section */}
      <div className="left-section">
        <h3 className="section-heading">TRAIN OF THOUGHT</h3>
        <div className="space-y-6">
          <HorizontalCard
            id="vscode-extensions"
            date="Apr 8, 2024"
            readTime="2 min read"
            title="10 VS Code Extensions Every Web Developer Should Use"
            description="Boost your productivity and streamline your workflow with these must-have Visual Studio Code extensions for web development."
            imageUrl="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
            views={42}
            comments={7}
            likes={25}
          />
          <HorizontalCard
            id="js-closures"
            date="Apr 5, 2024"
            readTime="3 min read"
            title="Understanding JavaScript Closures with Real-World Examples"
            description="Demystify closures in JavaScript with clear explanations and practical coding scenarios you can use in your projects."
            imageUrl="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400"
            views={30}
            comments={4}
            likes={19}
          />
          <HorizontalCard
            id="css-grid-flexbox"
            date="Apr 2, 2024"
            readTime="2 min read"
            title="How to Build Responsive Layouts with CSS Grid and Flexbox"
            description="Learn the secrets to creating beautiful, responsive web layouts using modern CSS techniques like Grid and Flexbox."
            imageUrl="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400"
            views={18}
            comments={2}
            likes={14}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h3 className="section-heading">ABOUT ME</h3>
        <AboutMe
          imageUrl="https://randompicturegenerator.com/img/picture-generator/53e4d5424854a914f1dc8460962e33791c3ad6e04e507440702e7bd59e48c5_640.jpg"
          description="I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you."
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
