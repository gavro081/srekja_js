import styled from "styled-components";
import TableReservation from "./TableReservation.jsx";
import Navbar from "../shumaComponents/Navbar.jsx";
import Footer from "../shumaComponents/Footer.jsx";

export default function SrekjaBar() {
    return (
        <Wrapper >
            <Navbar></Navbar>
            <TableReservation />
            <Footer></Footer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

