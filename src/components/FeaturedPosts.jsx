import { Margin } from '@mui/icons-material';
import React from 'react';
import '../styles/App.css';
function FeaturedPosts(){
    return(
        <div className='Featured-card'>
            <div className='Title'><span><h2>Featured Post</h2></span></div>
            <div className='card-image'>
            <img src='\images\handbag-407198_1920.jpg' alt='image' width="400px" height="400px"/>
            </div>
            <div className="author-details"><span><p id='author'>Admin</p></span><span><p id='date'>Date . 2 min read</p></span></div>
            <div className='post-detail'>
            <div className='Heading'><span><h2>Back to fiction: What I'm Reading This Summer</h2></span></div>
            <div className="summary"><span><p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p></span></div>
        </div></div>

    )
}
export default FeaturedPosts;