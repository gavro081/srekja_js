import styled from "styled-components";
import TableReservation from "./TableReservation.jsx";
import Navbar from "../shumaComponents/Navbar.jsx";
import Footer from "../shumaComponents/Footer.jsx";
import MenuPromotion from "./MenuPromotion.jsx";

export default function SrekjaBar() {
    return (
        <Wrapper >
            <Navbar />

            <MenuPromotion />

            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

