import React, { PropTypes } from 'react';

function TabActionItem(props) {
  if(!props.attribute)
    return <div></div>;

  if(props.type=='small'){
    var attr = props.attribute;
    var type = props.call_type;
    var selected_member = props.selected_member;
    var classNameDiscoverable, classNameVisible, sm_visible_title, sm_discoverable_title;
    if(attr.isDiscoverable){
      classNameDiscoverable = "circle green-circle";
      sm_discoverable_title = 'The attribute is discoverable, click on this to change to undiscoverable';
    }else{
      classNameDiscoverable = "circle red-circle";
      sm_discoverable_title = 'The attribute is undiscoverable, click on this to change to discoverable';
    }
    if(attr.isVisible){
      classNameVisible = "circle green-circle";
      sm_visible_title = 'The attribute is currently revealed, click on this to conceal';
    }else{
      classNameVisible = "circle red-circle";
      sm_visible_title = 'The attribute is currently concealed, click on this to reveal';
    }

    return (
      <li key={attr.attributeId}>
        <a href="javascript:void(0);">
          <span className={classNameDiscoverable} data-toggle="tooltip" title={sm_discoverable_title} onClick={props.handleAttributeClick.bind(null, selected_member, attr, 'isDiscoverable',type) } />
        </a>
        <a href="javascript:void(0);">
          <span className={classNameVisible} data-toggle="tooltip" title={sm_visible_title} onClick={props.handleAttributeClick.bind(null, selected_member, attr, 'isVisible',type) } />
        </a>
      </li>
    )
  }else{
    var attribute = props.attribute;

    if (attribute) {
      var isDiscoverableActive, isVisibleActive, visible_title, discoverable_title;
      if(attribute.isDiscoverable){
        isDiscoverableActive = "attr-two active";
        discoverable_title = 'This attribute is discoverable';
      }else{
        isDiscoverableActive = "circle red-circle";
        discoverable_title = 'This attribute is undiscoverable';
      }
      if(attribute.isVisible){
        isVisibleActive = "attr-one active";
        visible_title = 'This attribute is revealed';
      }else{
        isVisibleActive = "attr-one inactive";
        visible_title = 'This attribute is concealed';
      }
    }

    return (
      <li key={attribute.attributeId}> {attribute.attributeName}
        <a className={isVisibleActive} data-toggle="tooltip" title={visible_title} />
        <a className={isDiscoverableActive} data-toggle="tooltip" title={discoverable_title} />
      </li>
    )
  }
}

export default TabActionItem;
