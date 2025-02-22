import React, { useState } from "react";
import styled from "styled-components";
import podcasts from "../AI/podcasts";

const PodcastsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const PodcastItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  justify-content: center;
  padding: 15px 15px 0 15px;
  margin: 10px;
  cursor: pointer;
  border-radius: 50px;
  width: 300px;
  border: 3px solid #e96f23;
  font-size: 19px;
  background-color: ${(props) =>
    props.isSelected ? "#f5dd7a" : "transparent"};
`;

const Podcasts2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("Сите");

  const filteredPodcasts =
    selectedCategory === "Сите"
      ? podcasts
      : podcasts.filter((podcast) => podcast.season === selectedCategory);

  return (
    <>
      <Categories>
        <Icon
          onClick={() => setSelectedCategory("Сите")}
          isSelected={selectedCategory === "Сите"}
        >
          <p>Сите</p>
        </Icon>
        <Icon
          onClick={() => setSelectedCategory("Startup Revolution")}
          isSelected={selectedCategory === "Startup Revolution"}
        >
          <p>Startup Revolution</p>
        </Icon>
        <Icon
          onClick={() => setSelectedCategory("The Freelancers' Hangout")}
          isSelected={selectedCategory === "The Freelancers' Hangout"}
        >
          <p>The Freelancers' Hangout</p>
        </Icon>
      </Categories>

      <PodcastsContainer>
        {filteredPodcasts.map((podcast, index) => (
          <PodcastItem key={index}>
            <h3>{podcast.guest}</h3>
            <iframe
              width="90%"
              height="300"
              src={podcast.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`Podcast ${podcast.id}`}
            ></iframe>
            <p>{podcast.season}</p>
          </PodcastItem>
        ))}
      </PodcastsContainer>
    </>
  );
};

export default Podcasts2;
