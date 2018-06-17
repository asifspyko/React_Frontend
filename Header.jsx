import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header(props, context) {

  var avatarUrl = props.user.member.firstName[0]+''+props.user.member.lastName[0].toLowerCase();
  if(props.user.member.secureAvatarUrl && props.user.member.secureAvatarUrl!=''){
    var secureAvatarUrl = props.user.member.secureAvatarUrl;
    secureAvatarUrl=secureAvatarUrl.substring(secureAvatarUrl.lastIndexOf("/")+1,secureAvatarUrl.lastIndexOf("?"));
    if(secureAvatarUrl!='')
      avatarUrl = <img src={props.user.member.secureAvatarUrl} className="header-avatar"/>;
  }

  return (
    <header>
      <div className="logo"><a href="/"><img src="images/GA_HISN_logo.png" alt=""/></a></div>
      <div className="dropdown right-cont nav navbar-nav navbar-right pull-right">
        <div className="drop-cont dropdown-toggle" data-toggle="dropdown" role="button">
          <div className="jd-title">
            <div className="caps-top">{props.user.member.firstName} {props.user.member.lastName}</div>
            <div className="caps-bottom">{props.user.member.jobTitle}</div>
          </div>
          <div className="jd-icon">{avatarUrl}</div>
          <div className="clearfix"></div>
        </div>
        <ul className="dropdown-menu dropdown-menu-righ" role="menu">
          <li><a href="#">Feedback</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Take The Tour</a></li>
          <li><a href="javascript:void(0)" onClick={props.handleLogout}>Logout</a></li>
        </ul>
      </div>
    </header>
  );
}

/*Header.contextTypes = {
 router: React.PropTypes.object,
 };
*/

Header.propTypes = {
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
