import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <Nav>
            <Logo src="/public/slikiZaEshop/logoDark-1.jpg" alt="Logo"/>
            <NavLinks>
                <NavItem to="/">Почетна</NavItem>
                <NavItemContainer>
                    <NavItem style={{display:'flex', justifyContent:'center', alignItems:'center' ,gap:'2px'}}>Среќа Бар <img src="/assets/images/drop.png" style={{ width: '18px', height: '16px',marginTop:'2px' }}/></NavItem>
                    <Dropdown>
                        <DropdownItem to="/srekjaBar/option1">Мени</DropdownItem>
                        <DropdownItem to="/srekjaBar">Резервирај</DropdownItem>
                        <DropdownItem to="/srekjaBar/option3">Оцена</DropdownItem>
                    </Dropdown>
                </NavItemContainer>

                <NavItem to="/shop">Среќни производи</NavItem>
                <NavItem to="/about">За Нас</NavItem>

                <NavItem to="/register" style={{backgroundColor:'#0B776F', padding:'10px',marginLeft:'40px'}}>
                    <img src="/assets/images/shop2.svg" alt="Регистрирај се" style={{ width: '22px', height: '22px' }} />
                </NavItem>
                <NavItem to="/register" style={{backgroundColor:'#0B776F', padding:'10px'}}>
                    <img src="/assets/images/person2.svg" alt="Корпа" style={{ width: '24px', height: '24px' }} />
                </NavItem>

            </NavLinks>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    color: black;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: white;
    margin-bottom: 40px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
`;


const NavItem = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    color: black;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    &:hover {
        color: var(--logo-green);
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

const Dropdown = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;

    ${NavItem}:hover & {
        display: block;
    }
`;

const DropdownItem = styled(Link)`
    display: block;
    padding: 10px;
    text-decoration: none;
    color: black;

    &:hover {
        background-color: var(--logo-green);
        color: white;
    }
`;

const NavItemContainer = styled.div`
  position: relative;
  &:hover ${Dropdown} {
    display: block;
  }
`;
