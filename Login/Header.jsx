import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header(props, context) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="logo">
              <a href="#"><img src="images/logo.png" alt="" title="#" /></a>
            </div>
            <div className="logo-state2">
              <a href="#"><img src="images/logo-state2.png" alt="" title="" /></a>
            </div>
            <div className="logo-state3">
              <a href="#"><img src="images/logo-state3.png" alt="" title="" /></a>
            </div>
            <div className="logo-state4">
              <a href="#"><img src="images/logo-state4.png" alt="" title="" /></a>
            </div>
            <div className="logo-state5">
              <a href="#"><img src="images/logo-state5.png" alt="" title="" /></a>
            </div>
            <div className="header-title">
              <h1>grid <span>command</span></h1>
              <p>mobile coordination for agencies</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/*Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func,
};*/

export default Header;
