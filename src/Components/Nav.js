import styled from "styled-components";
import { useState } from "react";
import { useUserContext } from "../Context/UserContext";
import bizLogo from "../Screens/bizLogo.PNG";
import yourPTLogo from "../Screens/your-pt-logo.png";
import betterLogo from "./better-logo.jpeg";

const Nav = styled.div`
  padding: 0 2rem 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 832px) {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  .your-pt-logo {
    width: 30%;
    height: 80%;
    align-self: center;
  }

  .better-logo {
    width: 30%;
    height: 90%;
    align-self: center;
  }
`;

const Logo = styled.a`
  text-align: center;

  @media (max-width: 1140px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1010px) {
    font-size: 1.3rem;
  }

  img {
    width: 80%;
    height: 80%;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

const MenuLink = styled.button`
  padding: 0.4rem 1rem 0rem;
  cursor: pointer;

  text-decoration: none;

  color: #95c128;
  transition: all 0.3s ease-in;
  border: none;
  background-color: #fff;
  font-size: 1.2rem;

  @media (max-width: 1140px) {
    font-size: 1rem;
  }

  @media (max-width: 1010px) {
    font-size: 0.8rem;
  }

  span {
    @media (max-width: 795px) {
      display: none;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #95c128;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = (props) => {
  const { logoutUser } = useUserContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Nav>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={yourPTLogo} alt="" className="your-pt-logo" />
          <Logo href="">
            <img src={bizLogo} alt="logo" />
          </Logo>
          <img src={betterLogo} alt="" className="better-logo" />
        </div>

        <Hamburger
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink href="" onClick={props.setPageFive}>
            Clients
          </MenuLink>
          <MenuLink href="" onClick={props.setPageZero}>
            Information
          </MenuLink>
          <MenuLink href="" onClick={props.setPageOne}>
            Goals
          </MenuLink>
          <MenuLink href="" onClick={props.setPageTwo}>
            Health
          </MenuLink>
          <MenuLink href="" onClick={props.setPageThree}>
            Agreement
          </MenuLink>
          <MenuLink href="" onClick={props.setPageFour}>
            Measurements
          </MenuLink>
          <MenuLink className="sign-out-btn" href="" onClick={logoutUser}>
            Logout<span>👋🏾</span>
          </MenuLink>
        </Menu>
      </Nav>
    </div>
  );
};

export default Navbar;
