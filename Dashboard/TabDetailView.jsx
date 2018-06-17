import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

class TabDetailView extends Component {
  constructor(props, context) {
    super(props,context);
  }

  componentWillReceiveProps(nextProps){
    // console.log('cwrp-::>action item', nextProps );
  }

  render() {
    var attributes = this.props.attributes;
    var attributes_values = this.props.attributes_values;
    var attributes_actions = this.props.attributes_actions;

    var pathBar = <input name="" type="text" value="" readOnly/>;
    if (this.props.selected_member && this.props.selected_member.memberId && this.props.current_folder == 'member') {
      pathBar = <input name="" type="text"
                       value={`Member Profile\\${this.props.selected_member.physicalPersonProfile.firstName} ${this.props.selected_member.physicalPersonProfile.lastName}`} readOnly/>;
    }
    else
    {
      pathBar = <input name="" type="text"
                       value={`Organization Profile\\${this.props.user.member.organizationName}`} readOnly/>;
    }

    return (
      <div className="main-right-area">

        <div className="row-one">
          <div className="left-area">
            <div className="print-bttns-section">
              <a href="#" data-toggle="tooltip" title="Print" className="printer"/>
              <a href="#" data-toggle="tooltip" title="Download" className="downlaod"/>
              <a href="#" data-toggle="tooltip" title="Chat" className="chat"/>
              <a href="#" data-toggle="tooltip" title="Email" className="email"/>
            </div>
          </div>
          <div className="right-area-full">
            <div className="input-group search-path-outer">
              <span className="input-label">Path:</span>
              <span className="input-field">
                {pathBar}
              </span>
            </div>
          </div>
        </div>

        <div className="row-two section-titles">
          <div className="left-area">
            <div className="section-title">Name</div>
            <div className="location-cont">
              <div className="address-cont">
                <div className="search-outer">
                  <input type="hidden" name="search_param" value="all" id="search_param" />
                  <input name="" type="text" placeholder="Search" />
                  <input name="" type="submit" />
                </div>
              </div>
            </div>
          </div>
          <div className="center-area">
            <div className="section-title">Value</div>
            <div className="location-cont">
              <div className="address-cont">
                <div className="search-outer">
                  <input type="hidden" name="search_param" value="all" id="search_param"/>
                  <input name="" type="text" placeholder="Search"/>
                  <input name="" type="submit"/>
                </div>
              </div>
            </div>
          </div>
          <div className="right-area">
            <div className="section-title">Actions</div>
            <div className="location-cont">
              <div className="address-cont">
                <div className="search-outer">
                  <div className="isDiscoverable-action">Discoverable</div>
                  <div className="isVisible-action">Visible</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-three">
          <Scrollbars autoHide
                      autoHideTimeout={1000}
                      autoHideDuration={200}
                      style={{ position: 'absolute', top: 0, bottom: 0, height: 'auto' }}>
          <div className="left-area">
            <ul>
              {attributes}
            </ul>
          </div>
          <div className="center-area">
            <ul>
              {attributes_values}
            </ul>
          </div>
          <div className="right-area">
            <ul>
              {attributes_actions}
            </ul>
          </div>
          </Scrollbars>
        </div>
      </div>
    )
  }
}


TabDetailView.propTypes = {
  attr:PropTypes.object
  /*attributes: PropTypes.objectOf(PropTypes.shape({
    policyId: PropTypes.string.isRequired,
    policyName: PropTypes.string,
    isdiscoverable: PropTypes.bool,
    isVisible: PropTypes.bool,
  })),*/
  //dispatch: PropTypes.func.isRequired,
};

TabDetailView.contextTypes = {
  router: React.PropTypes.object,
};

export default TabDetailView;
