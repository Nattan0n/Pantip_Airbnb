// Content.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularThreads } from '../../features/pantipSlice';
import "../Contents/ContentStyle.css";

function Content() {
  const dispatch = useDispatch();
  const { popularThreads = [], status = 'idle', error } = useSelector((state) => state.pantip || {});

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPopularThreads());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  if (status === 'succeeded' && popularThreads.length === 0) {
    return <p>No popular threads available.</p>;
  }

  return (
    <section id="content">
      <h2>Popular Threads</h2>
      <section id="the-cards" style={{ width: '100%', maxWidth: '90%', margin: '0 auto' }}>
        {popularThreads.map((thread) => (
          <div key={thread.id} className="card">
            <div className="-thumb">
              <img src={thread.imageUrl} alt={thread.title} />
            </div>
            <div className="-about">
              <div className="-channel-img">
                <img src={thread.authorImageUrl} alt={thread.author} />
              </div>
              <div className="-detail">
                <div className="-title">{thread.title}</div>
                <div className="-channel">{thread.author}</div>
                <div className="-view">{thread.views} views • {thread.timeAgo}</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Content;
