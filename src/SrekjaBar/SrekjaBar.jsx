import styled from "styled-components";
import TableReservation from "./TableReservation.jsx";
import Navbar from "../shumaComponents/Navbar.jsx";
import Reviews from "./Reviews.jsx";

export default function SrekjaBar() {
    return (
        <Wrapper >
            <Navbar></Navbar>
            <TableReservation />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Nav = styled.div`
    width: 100%;
    background: #fff;
    text-align: center;
    padding: 2rem;  
`