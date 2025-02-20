import styled from "styled-components";
import menuItems from "../AI/menuitems.js";
import cardImage from '../../assets/images/srekja bar transparent 2.png'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {color} from "framer-motion";
import GradientText from "./Reviews/GradientText.jsx";
import menu from "../../public/iconsSrekjaBar/restaurant-line.png"
import reserve from "../../public/iconsSrekjaBar/add-circle-line (1).png"
import review from "../../public/iconsSrekjaBar/chat-1-line.png"

export default function MenuPromotion() {


    return (
        <Wrapper>
            <div>
                <Hero>
                    <GradientText
                        colors={["var(--logo-orange)", "var(--logo-yellow)", "var(--logo-red), var(--logo-green)"]}
                        animationSpeed={10}><Title>Најди ја својата среќа во секој залак и
                        голтка!</Title></GradientText>
                    <ButtonWrapper>
                        <button><a href="https://menu.ebar.mk/language#/place/1623083480963963100/menu"> <img
                            src={menu}/></a></button>
                        <button><a><img src={reserve}/></a></button>
                        <button><a><img src={review}/></a></button>
                    </ButtonWrapper>
                </Hero>
                <HeroImg src={cardImage}/>
            </div>
            <Swiper
                style={{maxWidth: '80%', padding: 0}}
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={4}
                centeredSlides={false}
                navigation
                loop={true}
                className="mySwiper"
            >

                {menuItems.slice(0, 10).map((item, index) =>
                    <SwiperSlideStyled key={index}>
                        <Card>
                            <CardImage src={item.image} width={150}/>
                            <CardHeader>{item.macedonian_name}</CardHeader>
                            <CardText>
                                {Array.isArray(item["ingredients-mk"]) ? item["ingredients-mk"].join(", ") : item["ingredients-mk"]}
                            </CardText>
                            <CardPrice>{item.price}</CardPrice>

                        </Card>
                    </SwiperSlideStyled>
                )}

            </Swiper>


        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 12%;
    }

    .mySwiper .swiper-button-next, .mySwiper .swiper-button-prev {
        color: var(--logo-green);
    }
`

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.7rem;
`

const HeroImg = styled.img`
    width: 100%;
    height: auto;
    max-width: 560px;
`;

const Title = styled.h1`
    font-family: "Lobster", sans-serif;
    font-weight: 700;
    font-size: 4rem;
    width: 500px;
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
    & > button {
        border: none;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        cursor: pointer;
        transition: scale 300ms ease;
        width: max-content;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 100px;
    }
    & > button {
        background: var(--logo-yellow);
        color: white;
    }

    & > button:first-child a {
        text-decoration: none;
        color: white;
    }

    & > button:hover {
        scale: 1.05;
    }
    & > button img {
        width: 2rem;
        height: auto;
        margin-right: 0.5rem;
        color: white;
    }

`

const SwiperSlideStyled = styled(SwiperSlide)`
    overflow: visible !important;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 370px;
`;


const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: #f0f0f0;
    border-radius: 0.4rem;
    width: 200px;
    height: 300px;
    padding: 1rem;
    position: relative;
    overflow: visible;
    padding-top: 100px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;


const CardImage = styled.img`
    position: absolute;
    top: -20px;
    z-index: 2;
    width: 8rem;
    border-radius: 25px;

`;

const CardHeader = styled.h3`
    margin-top: 20px;

`
const CardText = styled.p`
    max-width: 100%;
    overflow: clip;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    position: relative;

    &:hover {
        white-space: normal;
        overflow: visible;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 5px;
        border-radius: 5px;
        z-index: 10;
        width: max-content;
        max-width: 300px;
    }
`;


const CardPrice = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--logo-green);
    word-wrap: break-word;
    text-align: center;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;

`