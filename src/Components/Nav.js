import styled from "styled-components";
import { useState } from "react";
import { useUserContext } from "../Context/UserContext";
import logo from "../Screens/bizLogo.PNG";

const Nav = styled.div`
  padding: 0 2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 832px) {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.a`
  /* padding: 1rem 0; */
  text-align: center;

  @media (max-width: 1140px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1010px) {
    font-size: 1.3rem;
  }

  img {
    width: 40%;
    height: 40%;
  }

  /* span {
    font-weight: 450;
    font-size: 1.3rem;

    @media (max-width: 1140px) {
      font-size: 1.1rem;
    }

    @media (max-width: 1010px) {
      font-size: 1rem;
    }
  } */
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
  text-align: center;
  text-decoration: none;

  color: #95c128;
  transition: all 0.3s ease-in;
  border: none;
  background-color: #fff;
  font-size: 1.2rem;

  &:hover {
    color: #66d3fa;
  }

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
    <>
      <div>
        <Nav>
          <Logo href="">
            <img src={logo} />
            {/* Bizzie💪🏾<span>Trainer</span> */}
          </Logo>
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
    </>
  );
};

export default Navbar;
