import styled from "styled-components";
import TableReservation from "./TableReservation.jsx";


export default function SrekjaBar() {
    return (
        <Wrapper >
            <Nav >
                <h1>Ova ke bide navigacijata sto shuma ke ja napravi</h1>
            </Nav>
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