import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

//component
import {
  // CCollapse,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavLink,
  CToggler,
} from "./index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <CNavbar expandable="sm" className="b-navbar">
          <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
          <CNavbarBrand className="brand-name font-rob">
            HuaYu Fertility Center
          </CNavbarBrand>
          {/* <CCollapse show={isOpen} navbar> */}
          <CNavbarNav className="navbar-links">
            <CNavLink className="nav-link ">最新消息</CNavLink>
            <CNavLink className="nav-link ">活動資訊</CNavLink>
            <CNavLink className="nav-link ">門診時間</CNavLink>
            <CNavLink className="nav-link ">衛教資訊</CNavLink>
          </CNavbarNav>
          <CNavbarNav className="navbar-links ml-auto">
            <CDropdown inNav>
              <CDropdownToggle color="secondary">Lang</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>TW</CDropdownItem>
                <CDropdownItem>EN</CDropdownItem>
                <CDropdownItem>CN</CDropdownItem>
                <CDropdownItem>JP</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown inNav>
              <CDropdownToggle color="primary">User</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Account</CDropdownItem>
                <CDropdownItem>Settings</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
          {/* </CCollapse> */}
        </CNavbar>
      </div>
    </>
  );
};
export default Navbar;
