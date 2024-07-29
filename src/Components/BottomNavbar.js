import styled from "styled-components";
import { BsBook } from "react-icons/bs";
import { BsBookFill } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { PiUserCircleLight } from "react-icons/pi";
import { Routes, Route, useLocation } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const BottomNavBarContainer = styled.div`
  display: none;
  font-family: "GmarketSansLight";
  background-color: white;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0px 10px;
    position: fixed;
    bottom: 0;
    border-top: solid 1px #eee;
  }
`;
const NavbarIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const NavbarIcon = styled.div`
  display: flex;
  justify-content: center;
`;
const Text = styled.div`
  font-size: 8px;
  display: flex;
  justify-content: center;
`;

const BsBookIcon = styled(BsBook)`
  width: 22px;
  height: 22px;
  color: ${(props) => (props.current ? "#55666f" : "black")};
`;

function BottomNavBar() {
  const location = useLocation();
  const checkCurrentPath = (path) => {
    return location.pathname === path;
  };

  return (
    <BottomNavBarContainer>
      <NavbarIcons>
        <Link to="/shop">
          {checkCurrentPath("/shop") ? (
            <BsBookFill
              style={{ width: "22px", height: "22px", color: "#55666f" }}
            />
          ) : (
            <BsBook style={{ width: "22px", height: "22px" }} />
          )}
        </Link>
        <Text>홈</Text>
      </NavbarIcons>
      <NavbarIcons>
        <Link to="/chat">
          {checkCurrentPath("/chat") ? (
            <IoChatbubbles
              style={{ width: "22px", height: "22px", color: "#55666f" }}
            />
          ) : (
            <IoChatbubblesOutline style={{ width: "22px", height: "22px" }} />
          )}
        </Link>
        <Text>채팅</Text>
      </NavbarIcons>
      <NavbarIcons>
        <Link to="/upload">
          <NavbarIcon current={checkCurrentPath("/upload")}></NavbarIcon>

          {checkCurrentPath("/upload") ? (
            //   <BsBookFill
            //   style={{ width: "22px", height: "22px", color: "#55666f" }}
            //   />
            <AiFillPlusCircle
              style={{ width: "34px", height: "34px", color: "#55666f" }}
            />
          ) : (
            <CiCirclePlus style={{ width: "34px", height: "34px" }} />
            // <BsBook style={{ width: "22px", height: "22px" }} />
          )}
        </Link>
      </NavbarIcons>
      <NavbarIcons>
        <Link to="/alert">
          <NavbarIcon current={checkCurrentPath("/alert")}>
            <VscBell style={{ width: "22px", height: "22px" }} />
          </NavbarIcon>
        </Link>
        <Text>알람</Text>
      </NavbarIcons>
      <NavbarIcons>
        <Link to="/my">
          {checkCurrentPath("/my") ? (
            <FaUser style={{ width: "18px", height: "18px", color: "#55666f"  }} />
          ) : (
            <FaRegUser style={{ width: "18px", height: "18px" }} />
          )}
        </Link>
        <Text>나</Text>
      </NavbarIcons>
    </BottomNavBarContainer>
  );
}

export default BottomNavBar;
