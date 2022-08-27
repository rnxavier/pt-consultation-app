import styled from "styled-components";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <Nav>
          <Logo href="">
            Biz<span>Training</span>
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
            <MenuLink href="/">Information</MenuLink>
            <MenuLink href="/goals">Goals</MenuLink>
            <MenuLink href="/health">Health</MenuLink>
            <MenuLink href="/agreement">Agreement</MenuLink>
            <MenuLink href="/measurement">Measurements</MenuLink>
          </Menu>
        </Nav>
      </div>
    </>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #66d3fa;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
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

const MenuLink = styled.a`
  padding: 0.4rem 1rem 0rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #66d3fa;
  transition: all 0.3s ease-in;

  &:hover {
    color: #3c99dc;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #66d3fa;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Navbar;
