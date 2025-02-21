import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/authContext";

export default function Navbar() {
  const { currentUser } = useAuth();
  return (
    <Nav>
      <Link to="/">
        <Logo src="/public/slikiZaEshop/logoDark-1.jpg" alt="Logo" />
      </Link>

      <NavLinks>
        <NavItem to="/">Почетна</NavItem>
        <NavItemContainer>
          <NavItem
              to="/srekjaBar"
              style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "2px",
              }}
          >
            Среќа Бар{" "}
            <img
              src="/assets/images/drop.png"
              style={{ width: "18px", height: "16px", marginTop: "2px" }}
            />
          </NavItem>
          <Dropdown>
            <DropdownItem to="https://menu.e-bar.mk/language#/" target="_blank">
              Мени
            </DropdownItem>
            <DropdownItem to="/srekjaBar/reservation">Резервирај</DropdownItem>
            <DropdownItem to="/srekjaBar/reviews">Оцена</DropdownItem>
          </Dropdown>
        </NavItemContainer>
        <NavItem to="/mainEshopPage">Среќни производи</NavItem>
        <NavItem to="/about">За Нас</NavItem>
        {!currentUser && <Button to="/register">Регистрирај се</Button>}

        {currentUser && (
          <>
            <Button to="/shoppingCart" style={{ marginLeft: "35px" }}>
              <img
                src="/assets/images/shop2.svg"
                style={{ width: "18px", height: "18px" }}
              />
            </Button>
            <Button to="/register">
              <img
                src="/assets/images/person2.svg"
                style={{ width: "20px", height: "22px", marginTop: "-2px" }}
              />
            </Button>
          </>
        )}
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
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    
    z-index: 1000;   //ova e za da raboti box shadow vrz site elementi
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  &:hover {
    color: var(--logo-green);
  }
`;

const Button = styled(Link)`
  background-color: #0b776f;
  padding: 10px;
  border: 2px solid white;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    border: 2px solid var(--logo-green);
    box-shadow: 2px 2px 10px grey;
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
  z-index: 5;

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
