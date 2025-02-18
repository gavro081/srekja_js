import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Nav>
            <Logo src="/assets/images/logo.png" alt="Logo" />
            <NavLinks>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/placeholder">Placeholder</NavItem>
                <NavItem to="/register">Register</NavItem>
                <NavItem to="/srekjaBar">SrekjaBar</NavItem>
            </NavLinks>
        </Nav>
    );
}

const Nav = styled.nav`
  display: flex;
    color: black;
  justify-content: space-around;
  background-color: white;
`;



const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  height: 100px;
    border: 1px solid white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;


