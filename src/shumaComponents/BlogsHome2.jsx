import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import blogs from "../AI/blogs";


export default function BlogsHome2() {
    const [selectedCategory, setSelectedCategory] = useState("Сите");
    const navigate = useNavigate();

    const filteredBlogs =
        selectedCategory === "Сите"
            ? blogs
            : blogs.filter((blog) => blog.category === selectedCategory);


    // Move the settings for the slider outside of the handleBack function
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <HeroSection>
            <HeroTitle>
                Блогови
            </HeroTitle>
            <CarouselContainer>
                <Slider {...settings}>
                    {filteredBlogs.map((item) => (
                        <div key={item}>
                            <GridCard>
                                <div className="image-container">
                                    <FaqBadge>Види повеќе</FaqBadge>
                                    <img src={item.image} alt="Blog" />
                                </div>
                                <div className="card-content">
                                    <GridCardTitle>{item.title}</GridCardTitle>
                                    <div className="card-bottom">
                                        <div className="info-container">
                                            <GridCardInfo>{item.short_desc}</GridCardInfo>
                                            <GridCardInfo style={{marginTop: '.8rem',fontWeight: '600', fontStyle: 'italic'}}>{item.author}</GridCardInfo>
                                        </div>
                                    </div>
                                </div>
                            </GridCard>
                        </div>
                    ))}
                </Slider>
            </CarouselContainer>
            <NextButton className="vidigisite">ВИДИ ГИ СИТЕ </NextButton>
        </HeroSection>
    );
};


const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
    align-items: center;
  gap: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  line-height: 1.4;
  font-weight: normal;
`;

const CarouselContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  position: relative;
  padding: 0;

  .slick-slide {
    padding: 0 3rem;
    opacity: 0.5;
    transform: scale(0.9);
    transition: opacity 0.3s ease;

    > div {
      overflow: hidden;
    }
  }

  .slick-center {
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s ease;
    
    > div {
      border-radius: 12px;
      overflow: hidden;
    }
  }

  .slick-list {
    margin: 0 -3rem;
  }

  .slick-prev, .slick-next {
    width: 8rem;
    height: 2rem;
    z-index: 1;
      transition: scale 250ms ease-in-out;
      
    &:before {
      content: '';
      width: 2rem;
      height: 2rem;
      border: solid var(--logo-red);
      border-width: 0 4px 4px 0;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
    }
      
      &:hover {
          scale: 1.1;
      }
  }

  .slick-prev {
    left: calc(33.33% - 80px);
    &:before {
      transform: translate(-25%, -50%) rotate(135deg);
    }
  }

  .slick-next {
    right: calc(33.33% - 80px);
    &:before {
      transform: translate(-75%, -50%) rotate(-45deg);
    }
  }
`;

const GridCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
    margin: 1rem ;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  //width: 20rem;

  .image-container {
    height: 14rem;
    position: relative;
    //aspect-ratio: 4/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .card-content {
    //background: rgba(44, 43, 88, 0.95);
    padding: 1.5rem 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    border-radius: 0 0 15px 15px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    //gap: 0.5rem;
  }
`;

const GridCardTitle = styled.h3`
  //font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

const GridCardInfo = styled.div`
  font-size: 1rem;
  letter-spacing: 0.5px;
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

const FaqBadge = styled.div`
    cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
    background: linear-gradient(45deg, var(--logo-orange), var(--logo-red));
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  color: white;
  backdrop-filter: blur(5px);
  letter-spacing: 1px;
    transition: 0.3s ease-in-out;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    border: rgba(255,255,255,0.4) solid 1px;

    &:hover {
        background: linear-gradient(45deg, var(--logo-red), var(--logo-orange));
        transform: scale(1.05);
    }
`;
