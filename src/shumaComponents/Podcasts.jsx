import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Podcasts = () => {
  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/ZCohKK0LP_0" },
    { id: 2, url: "https://www.youtube.com/embed/t3jkwAVrjXs" },
    { id: 3, url: "https://www.youtube.com/embed/LUGsxrjcd2I" },
    { id: 4, url: "https://www.youtube.com/embed/3F0-Yw-dBeo" },
    { id: 5, url: "https://www.youtube.com/embed/NmVjxA0dvy8" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Подкасти</h1>
      <Carousel style={{ width: "70%" }}>
        {videos.map((video) => (
          <Carousel.Item key={video.id}>
            <iframe
              width="100%"
              height="500"
              src={video.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`Podcast ${video.id}`}
            ></iframe>
          </Carousel.Item>
        ))}
      </Carousel>
      <SeeMoreButton to="/media">Види ги сите</SeeMoreButton>
    </div>
  );
};

const SeeMoreButton = styled(Link)`
  background-color: var(--logo-green);
  color: white;
  padding: 10px 20px;
  font-size: 17px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px 0;
  text-decoration: none;

  &:hover {
    background-color: #555;
    cursor: pointer;
  }
`;
export default Podcasts;
