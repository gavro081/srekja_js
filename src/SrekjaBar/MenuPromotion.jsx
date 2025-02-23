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
import SplitText from "./SplitText.jsx";
import user1 from "../../public/picturesUsers/user1.jpg"
import user2 from "../../public/picturesUsers/user2.jpg"
import user3 from "../../public/picturesUsers/user3.jpg"
import user4 from "../../public/picturesUsers/user4.jpg"
import user5 from "../../public/picturesUsers/user5.jpg"
import user6 from "../../public/picturesUsers/user6.jpg"
import user7 from "../../public/picturesUsers/user7.jpg"
import {Link} from "react-router-dom";
import FoodInput from "../AI/FoodInput.jsx";

import image0 from '../../assets/images/srekja bar transparent.png'
import image1 from '../../assets/images/srekja bar transparent 1.png'
import image2 from '../../assets/images/srekja bar transparent 2.png'
import image3 from '../../assets/images/srekja bar transparent 3.png'
import image4 from '../../assets/images/srekja bar transparent 4.png'

export default function MenuPromotion() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    const images = [image0, image1, image2, image3, image4];
    const items = [
        'Поширани јајца',
        'Свинско каре',
        'Бифтек на жар',
        'Паста',
        'Зеленчук во фурна',
    ]
    const price = [200, 350, 500, 400, 180]


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
                        <button><Link to="/srekjaBar/rezerviraj"><img src={reserve}/></Link></button>
                        <button><Link to="/srekjaBar/reviews">
                            <img src={review} alt="Review" />
                        </Link></button>
                    </ButtonWrapper>
                </Hero>
                <HeroImg src={cardImage}/>
            </div>
            <h2><SplitText
                text="Популарни понуди"
                className="text-2xl font-semibold text-center"
                delay={70}
                animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
            /></h2>
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

                {items.map((item, index) =>
                    <SwiperSlideStyled key={index}>
                        <Card>
                            <CardImage src={images[index]} width={150}/>
                            <CardHeader>{item}</CardHeader>
                            <CardPrice>{price[index]} ден.</CardPrice>

                        </Card>
                    </SwiperSlideStyled>
                )}

            </Swiper>
            <h2><SplitText
                text="AI пребарување"
                className="text-2xl font-semibold text-center"
                delay={70}
                animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
            /></h2>
            <StyledWrapper>
                <FoodInput />
            </StyledWrapper>
            <h2><SplitText
                text="Нашите корисници не оцениле со"
                className="text-2xl font-semibold text-center"
                delay={70}
                animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
            /></h2>
            <Feedback>


                <RatingItem>
                    <span>Квалитет на храна: </span>
                    <RatingValue> 4.9/5</RatingValue>
                </RatingItem>
                <Overral>
                    4.8
                </Overral>

                <RatingItem>
                    <span>Услуга:</span>
                    <RatingValue>4.7/5</RatingValue>
                </RatingItem>

            </Feedback>

            <h2><SplitText
            text="Коментари"
            className="text-2xl font-semibold text-center"
            delay={100}
            animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
            animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
        /></h2>

            <CommentGrid>
                <CommentCard>
                    <UserImage src={user1}/>
                    <CommentText>
                        "Не можам да го изоставам овој ресторан! Храната е вкусна, а цените се разумни."
                    </CommentText>
                    <Rating>
                        <Star rating={3} />
                    </Rating>
                </CommentCard>
                <CommentCard>
                    <UserImage src={user3} />
                    <CommentText>
                        "Одлична услуга! Персоналот беше многу пријателски настроен, а храната стигна брзо."
                    </CommentText>
                    <Rating>
                        <Star rating={4} />
                    </Rating>
                </CommentCard>
                <CommentCard>
                    <UserImage src={user5} />
                    <CommentText>
                        "Храната е феноменална! Обавезно ќе се враќам повторно."
                    </CommentText>
                    <Rating>
                        <Star rating={5}></Star>
                    </Rating>
                </CommentCard>

                <CommentCard>
                    <UserImage src={user4} />
                    <CommentText>
                        "Амбиентот е прекрасен, а услугата е брза и ефективна. Се чувствувавме како дома!"
                    </CommentText>
                    <Rating>
                        <Star rating={4}></Star>
                    </Rating>
                </CommentCard>
            </CommentGrid>


        </Wrapper>
    )
}
const Star = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
        <div style={{ fontSize: "1.5rem" }}>
            {Array.from({ length: filledStars }).map((_, index) => (
                <span key={index}>&#9733;</span>
                ))}
            {halfStar && <span>&#9733;&#9734;</span>}
            {Array.from({ length: totalStars - Math.ceil(rating) }).map((_, index) => (
                <span key={index + filledStars}>&#9734;</span>
                ))}
        </div>
    );
};
const CommentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;
    margin-bottom: 40px;
`;

const CommentCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    border-radius: 15px;
    padding: 2.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const StyledWrapper = styled.div`
& > *{
    flex-direction: column;
}
`

const UserImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
`;

const CommentText = styled.p`
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1rem;
    font-style: italic;
`;

const Rating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;
const RatingItem = styled.div`
    display: flex;
    // justify-content: space-between;
    margin: 0.5rem 0;
    font-size: 1.5rem;
    gap: 1rem;
`;

const RatingValue = styled.span`
    font-weight: bold;
    color: var(--logo-orange);
`;
const Overral = styled.div`
    font-size: 4rem;
    font-weight: bold;
    color: var(--logo-yellow);
    text-align: center;
    padding: 1rem 0;
    height: auto;
`;

const Feedback = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    width: 90%;
    margin-left: 4rem;
    height: 50%;
    margin-top: 3rem;
    // margin-bottom: 7rem;
    position: relative;
    padding-top: 2rem;
    border-radius: 50px; 
    border: 3px solid transparent;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const FeedbackTitle = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    margin-top: -7rem;
    z-index: 10;
    padding: 1rem 0;
    background-color: transparent;
`;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        12%;
    }

    .mySwiper .swiper-button-next, .mySwiper .swiper-button-prev {
        color: var(--black);
    }

    & > h2 {
        text-align: center;
        margin: 2rem 0;
        font-size: 3rem;

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
    color: var(--black);
    word-wrap: break-word;
    text-align: center;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;

`