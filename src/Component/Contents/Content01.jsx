// Content01.jsx

import { useEffect, useState } from 'react';
import axios from 'axios';
import Tags from "../Tag/Tags";
import "../Contents/ContentStyle.css";

function Content() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/data/data_Post.json');
        setPosts(response.data.posts || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="content">
      <Tags />
      <section id="the-cards" style={{width: '100%', margin: '0 auto'}}>
        {posts.length > 0 ? (
          posts.map(post => (
            <div className="card" key={post.postId}>
              <div className="-thumb">
                <img src={post.image} alt=""/>
              </div>
              <div className="-about">
                <div className="-channel-img">
                  <img src="https://via.placeholder.com/36x36" alt={post.author} />
                </div>
                <div className="-detail">
                  <div className="-title">
                    {post.title}
                  </div>
                  <div className="-channel">{post.author}</div>
                  <div className="-view">{post.date} • {post.category}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </section>
    </section>
  );
}

export default Content;
