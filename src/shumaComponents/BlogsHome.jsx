import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import blogs from "../AI/blogs";

const BlogsHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("Сите");

  const filteredBlogs =
    selectedCategory === "Сите"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        allignItems: "center",
        margin: "100px",
        gap: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>Блогови</h1>
      <BlogContainer>
        {blogs.slice(0, 3).map((blog, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "40px",
              gap: "20px",
              backgroundColor: blog.color,
              position: "relative",
              boxShadow: "0 0 10px 0 #000",
            }}
          >
            <img
              src={blog.image}
              alt=""
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h2 style={{ textAlign: "center", margin: "20px 0" }}>
              {blog.title}
            </h2>
            <p style={{ textAlign: "center" }}>{blog.short_desc}</p>
            <p style={{ textAlign: "center", fontWeight: "600" }}>
              {blog.author}
            </p>
            <Link
              style={{
                color: "white",
                textAlign: "center",
                textDecoration: "none",
                bottom: "0",
                margin: "20px ",
                position: "absolute",
                backgroundColor: "#313332",
                padding: "10px",
                fontSize: "15px",
                borderRadius: "10px",
              }}
            >
              Погледни
            </Link>
          </div>
        ))}
      </BlogContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <NextButton className="vidigisite">ВИДИ ГИ СИТЕ </NextButton>
      </div>
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

const SeeMoreButton = styled(Link)`
  background-color: var(--logo-green);
  color: white;
  padding: 10px 20px;
  font-size: 17px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: none;

  &:hover {
    background-color: #555;
    cursor: pointer;
  }
`;
const NextButton = styled.button`
  background: linear-gradient(45deg, var(--logo-orange), var(--logo-red));
  color: white;
  border: none;
  width: 300px;
  padding: 0.7rem 2rem;
  font-size: 1rem;
  letter-spacing: 1px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(45deg, var(--logo-red), var(--logo-orange));
    transform: scale(1.05);
  }
`;
export default BlogsHome;
