import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavbarMenuItem = ({ changeState, menuItem }) => {
  return (
    <Link to={menuItem.pathUrl} className="menu-link">
      <li onClick={changeState} data-name={menuItem.name} className="">
        {menuItem.itemName}
      </li>
    </Link>
  );
};
export default withRouter(NavbarMenuItem);
