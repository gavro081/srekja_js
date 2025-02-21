import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import blogs from '../AI/blogs';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('Сите');

  const filteredBlogs =
    selectedCategory === 'Сите'
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '100px',
        gap: '20px',
      }}
    >
      <h1>Блогови</h1>

      <Categories>
        <Icon
          onClick={() => setSelectedCategory('Сите')}
          isSelected={selectedCategory === 'Сите'}
        >
          <img src="../../assets/images/all.svg" alt="All Blogs" />
          <p>Сите</p>
        </Icon>
        <Icon
          onClick={() => setSelectedCategory('Хумор')}
          isSelected={selectedCategory === 'Хумор'}
        >
          <img src="../../assets/images/smiley.svg" alt="Humor Blogs" />
          <p>Хумор</p>
        </Icon>
        <Icon
          onClick={() => setSelectedCategory('Љубов')}
          isSelected={selectedCategory === 'Љубов'}
        >
          <img src="../../assets/images/heart.svg" alt="Love Blogs" />
          <p>Љубов</p>
        </Icon>
        <Icon
          onClick={() => setSelectedCategory('Економија')}
          isSelected={selectedCategory === 'Економија'}
        >
          <img src="../../assets/images/eco.svg" alt="Economy Blogs" />
          <p>Економија</p>
        </Icon>
        <Icon
          onClick={() => setSelectedCategory('Технологија')}
          isSelected={selectedCategory === 'Технологија'}
        >
          <img src="../../assets/images/tech.svg" alt="Tech Blogs" />
          <p>Технологија</p>
        </Icon>
      </Categories>
      <BlogContainer>
        {filteredBlogs.map((blog, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '40px',
              gap: '20px',
              backgroundColor: blog.color,
              position: 'relative',
              boxShadow: '0 0 10px 0 #000',
            }}
          >
            <img
              src={blog.image}
              alt=""
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>
              {blog.title}
            </h2>
            <p style={{ textAlign: 'center' }}>{blog.short_desc}</p>
            <p style={{ textAlign: 'center', fontWeight: '600' }}>
              {blog.author}
            </p>
            <Link
              style={{
                color: 'white',
                textAlign: 'center',
                textDecoration: 'none',
                bottom: '0',
                margin: '20px ',
                position: 'absolute',
                backgroundColor: '#313332',
                padding: '10px',
                fontSize: '15px',
                borderRadius: '10px',
              }}
            >
              Погледни
            </Link>
          </div>
        ))}
      </BlogContainer>
    </div>
  );
};

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 20px;
  color: white;
`;
const Categories = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  padding: 15px;
  border-radius: 50px;
  width: 120px;
  border: 3px solid #e96f23;
  background-color: ${(props) =>
    props.isSelected ? '#f5dd7a' : 'transparent'};
`;
export default Blogs;
