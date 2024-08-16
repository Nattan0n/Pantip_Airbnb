// Tag.jsx

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './TagsStyle.css';

function Tags() {
  const [tags, setTags] = useState([]);
  const tagsContainerRef = useRef(null);

  useEffect(() => {
    // ดึงข้อมูลแท็กจากไฟล์ JSON
    const fetchTags = async () => {
      try {
        const response = await axios.get('/data/data_Tag.json'); // ปรับเส้นทางให้ตรงกับที่เก็บไฟล์ JSON
        setTags(response.data.tags);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []);

  const scroll = (direction) => {
    if (tagsContainerRef.current) {
      const scrollAmount = 100; // ปรับความเร็วในการเลื่อนตามต้องการ
      tagsContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="tags-container">
      <button className="scroll-button left" onClick={() => scroll('left')}>
        &#9664;
      </button>
      <section id="tags" ref={tagsContainerRef}>
        <a href='#!' className="-item -active">
          ทั้งหมด
        </a>
        {tags.map(tag => (
          <a key={tag.id} href={`#!`} className="-item">
            {tag.name}
          </a>
        ))}
      </section>
      <button className="scroll-button right" onClick={() => scroll('right')}>
        &#9654;
      </button>
    </div>
  );
}

export default Tags;
