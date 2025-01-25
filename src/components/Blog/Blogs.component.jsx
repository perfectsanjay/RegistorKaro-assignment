import React, { useState } from 'react';
import './Blog.style.scss';

const allBlogs = [
  {
    id: 1,
    author: 'Prabhash Mishra',
    date: '1 Jan 2023',
    title: 'Small business & Startup',
    description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    tags: ['Tax & Audit', 'Management'],
    image: 'public/images/Image.png'
  },
  {
    id: 2,
    author: 'Mahesh Kumar',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'Mental models are simple expressions of complex processes or relationships.',
    tags: ['Tax', 'Research', 'Compliance'],
    image: 'public/images/Image (1).png',
  },
  {
    id: 3,
    author: 'Rakhi Verma',
    date: '1 Jan 2023',
    title: 'Growing Business Package',
    description: 'Introduction to Wireframing and Its Principles. Learn from the best in the Industry.',
    tags: ['Audit', 'Money Back'],
    image: 'public/images/Image (2).png',
  },
  {
    id: 4,
    author: 'Karan Kumar',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'Collaboration can make our teams stronger, and our individual designs better.',
    tags: ['Money', 'Management'],
    image: 'public/images/Image (3).png',
  },
  {
    id: 5,
    author: 'Richa Singh',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    tags: ['Tax Return', 'News', 'Audit'],
    image: 'public/images/Image (4).png',
  },
  {
    id: 6,
    author: 'Miss Nora',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    tags: ['Private Limited Company', 'Customer Success'],
    image: 'public/images/Image (5).png',
  },
];

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <p className="author">
          {blog.author} • {blog.date}
        </p>
        <h3 className="title">{blog.title}</h3>
        <p className="description">{blog.description}</p>
        <div className="tags">
          {blog.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(allBlogs.slice(0, 3)); // Show first 3 blogs initially
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    const newVisibleBlogs = allBlogs.slice(0, visibleBlogs.length + 3);
    setVisibleBlogs(newVisibleBlogs);
    if (newVisibleBlogs.length === allBlogs.length) {
      setShowMore(false); // Hide button if all blogs are shown
    }
  };

  return (
    <section className="blog-section">
      <h2>Explore Our Blogs</h2>
      <h3>Accelerate Digital Transformation</h3>
      <div className="blog-grid">
        {visibleBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    
        <button className="show-more" onClick={handleShowMore}>
          Show more blogs <p className='arrow'>→</p>
        </button>
     
    </section>
  );
};

export default BlogSection;
