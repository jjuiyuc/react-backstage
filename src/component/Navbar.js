import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

//component
import {
  CCollapse,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavLink,
  CToggler,
} from "@coreui/react";
// import { NavbarMenuItem } from "@component";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItem = [
    { itemName: "最新消息", name: "announcement" },
    { itemName: "活動資訊", name: "event" },
    { itemName: "門診時間", name: "schedule" },
    { itemName: "藥品衛教", name: "medicine" },
  ];
  return (
    <>
      <div>
        <CNavbar expandable="sm" className="b-navbar">
          <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
          <CNavbarBrand className="brand-name font-rob">
            HuaYu Fertility Center
          </CNavbarBrand>

          <CCollapse show={isOpen} navbar>
            <CNavbarNav className="navbar-links">
              {menuItem.map((item, index) => {
                return (
                  <CNavLink
                    key={index}
                    className="nav-link"
                    to={`/${item.name}`}
                  >
                    {item.itemName}
                  </CNavLink>
                );
              })}
              {/* <CNavLink className="nav-link ">最新消息</CNavLink>
                            <CNavLink className="nav-link ">活動資訊</CNavLink>
                            <CNavLink className="nav-link ">門診時間</CNavLink>
                            <CNavLink className="nav-link ">衛教資訊</CNavLink> */}
            </CNavbarNav>
            <CNavbarNav className="navbar-links-drop ml-auto">
              <CDropdown inNav>
                <CDropdownToggle className="nav-drop-down">
                  User
                </CDropdownToggle>
                <CDropdownMenu className="drop-down-menu">
                  <CDropdownItem className="drop-down-links">
                    Account
                  </CDropdownItem>
                  <CDropdownItem className="drop-down-links">
                    Settings
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CNavbar>
      </div>
    </>
  );
};
export default Navbar;
