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
        marginBottom: "100px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Поткасти</h1>
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
export default Podcasts;
