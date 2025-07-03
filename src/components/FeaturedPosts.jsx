import { Margin } from '@mui/icons-material';
import React from 'react';
import "../styles/FeaturedPosts.css";
import '../styles/App.css';
import { useNavigate } from 'react-router-dom';

function FeaturedPosts(){
    const navigate = useNavigate();
    return(
        <div className='Featured-card' onClick={() => navigate('/post/featured')} style={{cursor: 'pointer'}}>
            <div className='Title'><span><h2>Featured Post</h2></span></div>
            <div className='card-image'>
            <img src='https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400' alt='React Hooks' width="400px" height="400px"/>
            </div>
            <div className="author-details"><span><p id='author'>Admin</p></span><span><p id='date'>Apr 10, 2024 . 4 min read</p></span></div>
            <div className='post-detail'>
            <div className='Heading'><span><h2>Mastering React Hooks: Tips & Tricks</h2></span></div>
            <div className="summary"><span><p>Unlock the full potential of React Hooks with these practical tips and code examples for modern web development. Learn how to write cleaner, more efficient React code!</p></span></div>
        </div></div>

    )
}
export default FeaturedPosts;