import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth, logOut } from "../firebase/authContext";
//import { signOut } from "@firebase/auth";

export default function Navbar() {
  const { currentUser } = useAuth();

  return (
    <Nav>
      <Link to="/">
        <Logo src="/public/slikiZaEshop/logoDark-1.jpg" alt="Logo" />
      </Link>

      <NavLinks>
        <NavItem to="/listings">Работа</NavItem>
        <NavItemContainer>
          <NavItem
            to="/"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
            }}
          >
            Стартапи{" "}
            <img
              src="/assets/images/drop.png"
              style={{ width: "18px", height: "16px", marginTop: "2px" }}
            />
          </NavItem>
          <Dropdown>
            <DropdownItem to="/">Настани</DropdownItem>
            <DropdownItem to="/">Истражи</DropdownItem>
            <DropdownItem to="/startupCreate">Внеси</DropdownItem>
          </Dropdown>
        </NavItemContainer>
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
            <DropdownItem to={'/srekjaBar'}>Почетна</DropdownItem>
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
            <Button onClick={logOut}>
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

  z-index: 1000; //ova e za da raboti box shadow vrz site elementi
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
    color: var(--logo-orange);
  }
`;

const Button = styled(Link)`
  background: linear-gradient(45deg, var(--logo-orange), var(--logo-red));
  padding: 15px 10px;
  // border: 2px solid white;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: all 300ms ease-in-out;
  &:hover {
    background: linear-gradient(45deg, var(--logo-red), var(--logo-orange));
    transform: scale(1.05);
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
    // background-color: ;
    color: var(--logo-orange);
  }
`;

const NavItemContainer = styled.div`
  position: relative;
  &:hover ${Dropdown} {
    display: block;
  }
`;
