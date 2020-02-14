import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Header>
        <div>
          <Link to="/">
            <i class="fas fa-concierge-bell" />
            Acceuil
          </Link>
        </div>
        <div></div>
        <div></div>
      </Header>
    );
  }
}
export default Header;
