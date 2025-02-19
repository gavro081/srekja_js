import styled from "styled-components";
import menuItems from "../AI/menuitems.js";
import cardImage from '../../assets/images/srekja bar transparent 2.png'
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function MenuPromotion() {

    return (
        <Wrapper >
            <div>
                <Hero >
                    <Title >Најди ја својата среќа во секој залак и голтка!</Title>
                    <ButtonWrapper >
                        <button ><a href="https://menu.ebar.mk/language#/place/1623083480963963100/menu">Види Мени</a></button>
                        <button ><a>Резервирај Маса</a></button>
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
                {menuItems.slice(0,5).map((item, index) =>
                    <SwiperSlideStyled key={index}>
                        <Card >
                            <CardImage src={cardImage} width={150} />
                            <CardHeader >{item.macedonian_name}</CardHeader>
                            <CardText >{item.details}</CardText>
                            <CardPrice >{item.price}</CardPrice>
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
        padding: 2rem 15%;
    }
    
    .mySwiper .swiper-button-next, .mySwiper .swiper-button-prev {
        color: var(--logo-green);        
    }
`

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

const HeroImg = styled.img`
    width: 100%;
    height: auto;
    max-width: 600px;
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
        padding: 1rem 4rem;
        font-size: 1.2rem;
        cursor: pointer;
        transition: scale 300ms ease;
        width: max-content;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    & > button:first-child {
        background: var(--logo-green);
        color: white;
    }
    & > button:hover {
        scale: 1.05;
    }
`

const SwiperSlideStyled = styled(SwiperSlide)`
    overflow: visible !important;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
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
    height: 250px;
    padding: 1rem;
    position: relative;
    overflow: visible;
    padding-top: 100px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;


const CardImage = styled.img`
    position: absolute;
    top: -50px; 
    z-index: 2;
`;

const CardHeader = styled.h3`
    
`

const CardText = styled.p`
    
`

const CardPrice = styled.p`
    
`